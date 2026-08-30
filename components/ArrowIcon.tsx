type ArrowIconProps = {
  className?: string;
  direction?: "up-right" | "right" | "up";
};

const paths = {
  "up-right": "M5 15 15 5M7 5h8v8",
  right: "M4 10h12m-5-5 5 5-5 5",
  up: "M10 16V4m-5 5 5-5 5 5",
} as const;

export function ArrowIcon({
  className = "arrow-icon",
  direction = "up-right",
}: ArrowIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={paths[direction]}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
