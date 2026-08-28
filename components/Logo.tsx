import Image from "next/image";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  priority?: boolean;
};

export function Logo({
  variant = "dark",
  className = "",
  priority = false,
}: LogoProps) {
  const isLight = variant === "light";

  return (
    <Image
      src={
        isLight
          ? "/brand/urban-nest-logo-light.png"
          : "/brand/urban-nest-logo-dark.png"
      }
      alt="Urban Nest"
      width={isLight ? 854 : 967}
      height={isLight ? 547 : 652}
      className={`brand-logo ${className}`}
      priority={priority}
    />
  );
}
