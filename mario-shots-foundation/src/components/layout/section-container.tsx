import { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionVariant = "hero" | "light" | "dark" | "cta";

type SectionContainerProps = {
  children: ReactNode;
  variant?: SectionVariant;
  fluid?: boolean;
  className?: string;
  innerClassName?: string;
  gradient?: boolean;
  style?: CSSProperties;
};

const variantClasses: Record<SectionVariant, string> = {
  hero: "py-0 min-h-screen text-white",
  light: "bg-white text-zinc-900 dark:bg-black dark:text-white py-20",
  dark: "bg-zinc-900 text-white py-20",
  cta: "py-20 text-white bg-gradient-to-br from-red-700/70 via-red-900/60 to-black",
};

const innerSlots: Record<SectionVariant, string> = {
  hero: "px-4 md:px-8",
  light: "container mx-auto px-4",
  dark: "container mx-auto px-4",
  cta: "container mx-auto px-4",
};

export function SectionContainer({
  children,
  variant = "light",
  className,
  innerClassName,
  fluid = false,
  gradient = false,
  style,
}: SectionContainerProps) {
  const containerClasses = fluid ? "w-full px-4 md:px-8" : innerSlots[variant];
  const showGradient = gradient || variant === "cta";

  return (
    <section
      className={cn("relative w-full overflow-hidden", variantClasses[variant], className)}
      style={style}
    >
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-900/30 to-black opacity-80 pointer-events-none" />
      )}
      <div className={cn("relative z-10", containerClasses, innerClassName)}>{children}</div>
    </section>
  );
}
