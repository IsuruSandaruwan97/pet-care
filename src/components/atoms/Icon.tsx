import type { ReactNode } from "react";

type IconProps = {
  name: string;
  className?: string;
};

const iconPaths: Record<string, ReactNode> = {
  assignment: (
    <>
      <path d="M8 5h8" />
      <path d="M9 3h6l1 2h3v16H5V5h3l1-2Z" />
      <path d="M8 11h8" />
      <path d="M8 15h5" />
    </>
  ),
  auto_awesome: (
    <>
      <path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Z" />
      <path d="m19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z" />
      <path d="m5 14 .9 2.1L8 17l-2.1.9L5 20l-.9-2.1L2 17l2.1-.9L5 14Z" />
    </>
  ),
  biotech: (
    <>
      <path d="M10 3v5" />
      <path d="M14 3v5" />
      <path d="M8 8h8" />
      <path d="M9 8v4.5L4.5 20h15L15 12.5V8" />
      <path d="M8 16h8" />
    </>
  ),
  calendar_month: (
    <>
      <path d="M7 3v4" />
      <path d="M17 3v4" />
      <path d="M4 8h16" />
      <rect height="16" rx="2" width="16" x="4" y="5" />
      <path d="M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" />
    </>
  ),
  call: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
  ),
  check: <path d="m5 12 4 4L19 6" />,
  check_circle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </>
  ),
  chevron_left: <path d="m15 18-6-6 6-6" />,
  chevron_right: <path d="m9 18 6-6-6-6" />,
  child_care: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M8.5 15.5c1.8 1.2 5.2 1.2 7 0" />
      <path d="M9 9h.01M15 9h.01" />
      <path d="M5 21c1.5-2.5 4-4 7-4s5.5 1.5 7 4" />
    </>
  ),
  close: (
    <>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </>
  ),
  arrow_forward: <path d="M5 12h14M13 6l6 6-6 6" />,
  chat: (
    <>
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
      <path d="M8 9h8M8 13h5" />
    </>
  ),
  content_cut: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4 8.1 15.9" />
      <path d="M14.5 14.5 20 20" />
      <path d="M8.1 8.1 12 12" />
    </>
  ),
  emergency_home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </>
  ),
  emergency: (
    <>
      <path d="M12 3v18" />
      <path d="M3 12h18" />
      <path d="m5.6 5.6 12.8 12.8" />
      <path d="M18.4 5.6 5.6 18.4" />
    </>
  ),
  expand_more: <path d="m6 9 6 6 6-6" />,
  favorite: (
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
  ),
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10" />
    </>
  ),
  hotel: (
    <>
      <path d="M4 21V6a2 2 0 0 1 2-2h8a4 4 0 0 1 4 4v13" />
      <path d="M4 12h17" />
      <path d="M7 9h4" />
      <path d="M7 21v-5h10v5" />
    </>
  ),
  elderly: (
    <>
      <circle cx="11" cy="4" r="2" />
      <path d="M10 7v5l-2 4" />
      <path d="m12 12 3 3" />
      <path d="M14 21v-7" />
      <path d="M17 21v-9" />
    </>
  ),
  elderly_woman: (
    <>
      <circle cx="12" cy="4" r="2" />
      <path d="M10 7h4l1 7" />
      <path d="M9 21v-6l-2 1" />
      <path d="M15 21v-6l2 1" />
      <path d="M8 10h8" />
    </>
  ),
  ecg_heart: (
    <>
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l3.5-3.4" />
      <path d="M3 14h4l2-4 3 8 2-4h7" />
    </>
  ),
  keyboard_arrow_up: <path d="m18 15-6-6-6 6" />,
  laptop_mac: (
    <>
      <rect height="11" rx="2" width="16" x="4" y="5" />
      <path d="M2 20h20" />
      <path d="M8 16h8" />
    </>
  ),
  medication: (
    <>
      <path d="m10.5 20.5 10-10a4 4 0 0 0-5.7-5.7l-10 10a4 4 0 0 0 5.7 5.7Z" />
      <path d="m8.5 10.5 5 5" />
    </>
  ),
  nutrition: (
    <>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="M9 12h6" />
      <path d="M12 9v6" />
    </>
  ),
  orthopedics: (
    <>
      <path d="M7 21c3-5 7-8 10-18" />
      <path d="M4 17c3 2 8 3 13 2" />
      <path d="M9 8c2 1 4 1 6 0" />
    </>
  ),
  dentistry: (
    <>
      <path d="M8 3c1.4 0 2.4.8 4 .8S14.6 3 16 3c2.2 0 4 1.8 4 4 0 4.2-2.4 13-5 13-1.4 0-1.2-4-3-4s-1.6 4-3 4c-2.6 0-5-8.8-5-13 0-2.2 1.8-4 4-4Z" />
    </>
  ),
  pill: (
    <>
      <path d="m10.5 20.5 10-10a4 4 0 0 0-5.7-5.7l-10 10a4 4 0 0 0 5.7 5.7Z" />
      <path d="m8.5 10.5 5 5" />
    </>
  ),
  qr_code_scanner: (
    <>
      <path d="M4 4h5v5H4zM15 4h5v5h-5zM4 15h5v5H4z" />
      <path d="M15 15h2v2h-2zM19 15h1v5h-5v-1M12 4v2M12 9v2M4 12h2M9 12h2M13 12h7" />
    </>
  ),
  qr_code_2: (
    <>
      <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" />
      <path d="M14 14h2v2h-2zM18 14h2v6h-6v-2M14 18h2" />
    </>
  ),
  priority_high: (
    <>
      <path d="M12 4v10" />
      <path d="M12 19h.01" />
    </>
  ),
  restaurant: (
    <>
      <path d="M7 2v8" />
      <path d="M4 2v8" />
      <path d="M10 2v8" />
      <path d="M4 10h6" />
      <path d="M7 10v12" />
      <path d="M17 2v20" />
      <path d="M17 2c2 1.8 3 4.3 3 7 0 2-1 3-3 3" />
    </>
  ),
  savings: (
    <>
      <path d="M5 11a7 7 0 0 1 14 0v6H5z" />
      <path d="M7 17v4h3v-4" />
      <path d="M14 17v4h3v-4" />
      <path d="M9 9h.01" />
      <path d="M16 8h3" />
      <path d="M12 11c-1.2 0-2 .6-2 1.4s.8 1.4 2 1.4 2 .6 2 1.4-.8 1.4-2 1.4" />
    </>
  ),
  receipt_long: (
    <>
      <path d="M5 3v18l2-1 2 1 2-1 2 1 2-1 2 1 2-1V3l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </>
  ),
  schedule: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  science: (
    <>
      <path d="M9 3h6" />
      <path d="M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3" />
      <path d="M8 15h8" />
    </>
  ),
  sentiment_satisfied: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <path d="M9 9h.01M15 9h.01" />
    </>
  ),
  stethoscope: (
    <>
      <path d="M6 4v5a4 4 0 0 0 8 0V4" />
      <path d="M4 4h4M12 4h4" />
      <path d="M10 13v2a5 5 0 0 0 10 0v-2" />
      <circle cx="20" cy="10" r="2" />
    </>
  ),
  vaccines: (
    <>
      <path d="m18 2 4 4" />
      <path d="m17 7 2-2" />
      <path d="M4 21 16 9" />
      <path d="m8 17-3-3 8-8 3 3" />
      <path d="m12 6 6 6" />
    </>
  ),
  verified_user: (
    <>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="m9 12 2 2 4-5" />
    </>
  ),
  verified: (
    <>
      <path d="m12 2 2.5 2 3.2-.2.9 3.1 2.5 2.1-1.2 3 1.2 3-2.5 2.1-.9 3.1-3.2-.2-2.5 2-2.5-2-3.2.2-.9-3.1L2.9 15l1.2-3-1.2-3 2.5-2.1.9-3.1 3.2.2z" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </>
  ),
  videocam: (
    <>
      <rect height="12" rx="2" width="14" x="3" y="6" />
      <path d="m17 10 4-3v10l-4-3" />
    </>
  ),
  warning: (
    <>
      <path d="m12 3 10 18H2L12 3Z" />
      <path d="M12 9v5" />
      <path d="M12 17h.01" />
    </>
  ),
};

export function Icon({ name, className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={`hp-icon ${className}`}
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      {iconPaths[name] ?? iconPaths.favorite}
    </svg>
  );
}
