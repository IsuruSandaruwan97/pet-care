"use client";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";

type RightClickGuardProps = {
  enabled: boolean;
};

export default function RightClickGuard({ enabled }: RightClickGuardProps) {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const hideTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const showAlert = () => {
      setIsAlertVisible(true);

      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
      }

      hideTimerRef.current = window.setTimeout(() => {
        setIsAlertVisible(false);
      }, 2000);
    };

    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      showAlert();
    };

    const isDevToolsShortcut = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const ctrlOrMeta = event.ctrlKey || event.metaKey;
      const shift = event.shiftKey;
      const alt = event.altKey;

      if (key === "f12") return true;
      if (ctrlOrMeta && shift && ["i", "j", "c", "k"].includes(key))
        return true;
      if (event.metaKey && alt && ["i", "j", "c"].includes(key)) return true;
      if (ctrlOrMeta && key === "u") return true;
      return false;
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isDevToolsShortcut(event)) return;
      event.preventDefault();
      event.stopPropagation();
      showAlert();
    };

    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleKeyDown, true);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown, true);
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
      }
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[10000] flex items-center justify-center transition-opacity duration-200 ${
        isAlertVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-black/15" />
      <div className="relative flex items-center gap-2 rounded-lg border border-red-500/60 bg-red-900/70 px-4 py-2 text-center text-xs font-semibold text-red-100 shadow-[0_0_20px_rgba(239,68,68,0.35)]">
        <Icon className="text-sm text-red-300" name="warning" />
        <span>Right click and shortcut keys are disabled.</span>
      </div>
    </div>
  );
}
