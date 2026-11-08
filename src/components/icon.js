const iconShapes = {
  "map-pin": (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  home: <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1Z" />,
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />,
  bed: (
    <>
      <path d="M2 4v16" />
      <path d="M2 8h13a5 5 0 0 1 5 5v7" />
      <path d="M2 17h18" />
      <path d="M6 8v9" />
    </>
  ),
  bath: (
    <>
      <path d="M9 6 7.5 4.5a2.1 2.1 0 0 0-3 3L6 9" />
      <path d="M3 12h18v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
      <path d="M6 19v2M18 19v2" />
    </>
  ),
  ruler: (
    <>
      <path d="m21.3 8.7-6-6a1 1 0 0 0-1.4 0l-11.2 11.2a1 1 0 0 0 0 1.4l6 6a1 1 0 0 0 1.4 0L21.3 10a1 1 0 0 0 0-1.3Z" />
      <path d="m7.5 10.5 2 2M10.5 7.5l2 2M4.5 13.5l2 2M13.5 4.5l2 2" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="m18 6-12 12M6 6l12 12" />,
  shield: (
    <>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 11h18" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m16.2 7.8-2.6 5.8-5.8 2.6 2.6-5.8 5.8-2.6Z" />
    </>
  ),
  list: (
    <>
      <path d="M8 6h13M8 12h13M8 18h13" />
      <path d="M3 6h.01M3 12h.01M3 18h.01" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3.1a2 2 0 0 1-.6 1.7L7.7 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 1.7-.6l3.1.5a2 2 0 0 1 2.2 2.5Z" />,
  check: <path d="m5 12 4 4L19 6" />,
};

export default function Icon({
  name,
  size = 20,
  strokeWidth = 1.8,
  className,
  filled = false,
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconShapes[name]}
    </svg>
  );
}
