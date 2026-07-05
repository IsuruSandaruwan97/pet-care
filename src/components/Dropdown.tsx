"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";

type DropdownOption = {
  label: string;
  value: string;
};

type DropdownProps = {
  className?: string;
  name?: string;
  onChange?: (value: string) => void;
  options: DropdownOption[];
  value?: string;
};

export function Dropdown({
  className = "",
  name,
  onChange,
  options,
  value,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(
    value ?? options[0]?.value ?? "",
  );
  const rootRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();
  const selectedValue = value ?? internalValue;
  const selectedOption =
    options.find((option) => option.value === selectedValue) ?? options[0];

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const selectOption = (nextValue: string) => {
    setInternalValue(nextValue);
    onChange?.(nextValue);
    setOpen(false);
  };

  return (
    <div className={`hp-dropdown ${className}`} ref={rootRef}>
      {name ? <input name={name} type="hidden" value={selectedValue} /> : null}
      <Button
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        className="hp-dropdown-trigger"
        onClick={() => setOpen((current) => !current)}
        type="button"
        variant="unstyled"
      >
        <span>{selectedOption?.label}</span>
        <Icon name="expand_more" />
      </Button>
      {open ? (
        <div className="hp-dropdown-menu" id={listboxId} role="listbox">
          {options.map((option) => (
            <Button
              aria-selected={option.value === selectedValue}
              className="hp-dropdown-option"
              key={option.value}
              onClick={() => selectOption(option.value)}
              role="option"
              type="button"
              variant="unstyled"
            >
              {option.label}
            </Button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
