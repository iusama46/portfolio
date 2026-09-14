type IconName =
  | "arrow-up-right"
  | "arrow-down"
  | "download"
  | "menu"
  | "mail"
  | "pin"
  | "spark"
  | "chevron";

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    "arrow-up-right": <path d="M5 19 19 5M8 5h11v11" />,
    "arrow-down": <path d="M12 4v15m0 0 6-6m-6 6-6-6" />,
    download: <path d="M12 3v11m0 0 4-4m-4 4-4-4m-5 8v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    mail: <path d="M3 6h18v12H3zM3 7l9 6 9-6" />,
    pin: <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />,
    spark: <path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2ZM19 17l.7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17Z" />,
    chevron: <path d="m8 10 4 4 4-4" />,
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    >
      {paths[name]}
    </svg>
  );
}
