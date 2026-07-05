"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";

type DateTimePickerProps = {
  className?: string;
  name?: string;
};

const monthFormatter = new Intl.DateTimeFormat("en", {
  month: "long",
  year: "numeric",
});

const displayFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

function toDateValue(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function sameDay(first: Date, second: Date) {
  return toDateValue(first) === toDateValue(second);
}

export function DateTimePicker({ className = "", name }: DateTimePickerProps) {
  const today = useMemo(() => new Date(), []);
  const roundedMinutes = Math.ceil(today.getMinutes() / 5) * 5;
  const initialHours =
    roundedMinutes === 60 ? (today.getHours() + 1) % 24 : today.getHours();
  const initialMinutes = roundedMinutes === 60 ? 0 : roundedMinutes;
  const nowTime = `${String(initialHours).padStart(2, "0")}:${String(
    initialMinutes,
  ).padStart(2, "0")}`;
  const [open, setOpen] = useState(false);
  const [monthDate, setMonthDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedTime, setSelectedTime] = useState(nowTime);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const days = useMemo(() => {
    const firstDay = new Date(
      monthDate.getFullYear(),
      monthDate.getMonth(),
      1,
    );
    const daysInMonth = new Date(
      monthDate.getFullYear(),
      monthDate.getMonth() + 1,
      0,
    ).getDate();
    const leading = firstDay.getDay();

    return [
      ...Array.from({ length: leading }, () => null),
      ...Array.from(
        { length: daysInMonth },
        (_, index) =>
          new Date(monthDate.getFullYear(), monthDate.getMonth(), index + 1),
      ),
    ];
  }, [monthDate]);

  const hiddenValue = `${toDateValue(selectedDate)}T${selectedTime}`;
  const triggerLabel = `${displayFormatter.format(selectedDate)} at ${selectedTime}`;

  const changeMonth = (offset: number) => {
    setMonthDate(
      new Date(monthDate.getFullYear(), monthDate.getMonth() + offset, 1),
    );
  };

  return (
    <div className={`hp-datetime ${className}`} ref={rootRef}>
      {name ? <input name={name} type="hidden" value={hiddenValue} /> : null}
      <Button
        aria-expanded={open}
        className="hp-datetime-trigger"
        onClick={() => setOpen((current) => !current)}
        type="button"
        variant="unstyled"
      >
        <span>{triggerLabel}</span>
        <Icon name="calendar_month" />
      </Button>
      {open ? (
        <div className="hp-datetime-panel">
          <div className="hp-datetime-head">
            <Button
              aria-label="Previous month"
              onClick={() => changeMonth(-1)}
              type="button"
              variant="unstyled"
            >
              <Icon name="chevron_left" />
            </Button>
            <strong>{monthFormatter.format(monthDate)}</strong>
            <Button
              aria-label="Next month"
              onClick={() => changeMonth(1)}
              type="button"
              variant="unstyled"
            >
              <Icon name="chevron_right" />
            </Button>
          </div>
          <div className="hp-datetime-week">
            {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
              <span key={`${day}-${index}`}>{day}</span>
            ))}
          </div>
          <div className="hp-datetime-days">
            {days.map((date, index) =>
              date ? (
                <Button
                  aria-pressed={sameDay(date, selectedDate)}
                  className="hp-datetime-day"
                  key={toDateValue(date)}
                  onClick={() => setSelectedDate(date)}
                  type="button"
                  variant="unstyled"
                >
                  {date.getDate()}
                </Button>
              ) : (
                <span key={`empty-${index}`} />
              ),
            )}
          </div>
          <div className="hp-datetime-times">
            <label htmlFor={`${name ?? "appointment"}-time`}>Time</label>
            <input
              id={`${name ?? "appointment"}-time`}
              onChange={(event) => setSelectedTime(event.target.value)}
              step="300"
              type="time"
              value={selectedTime}
            />
            <Button
              className="hp-datetime-done"
              onClick={() => setOpen(false)}
              type="button"
              variant="unstyled"
            >
              Done
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
