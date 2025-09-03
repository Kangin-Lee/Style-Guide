import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-primary)] text-[var(--color-white)] hover:bg-[var(--color-primary)]/90",
        secondary:
          "bg-[var(--color-secondary)] text-[var(--color-white)] hover:bg-[var(--color-secondary)]/90",
        success:
          "bg-[var(--color-success)] text-[var(--color-white)] hover:bg-[var(--color-success)]/80",
        warning:
          "bg-[var(--color-warning)] text-[var(--color-white)] hover:bg-[var(--color-warning)]/80",
        blueGray:
          "bg-[var(--color-blue-gray)] text-[var(--color-text)] hover:bg-[var(--color-blue-gray)]/80",
        dark: "bg-[var(--color-dark-gray)] text-[var(--color-white)] hover:bg-[var(--color-dark-gray)]/80",
        info: "border border-[var(--color-border)] bg-transparent text-[var(--color-text)] hover:bg-[var(--color-blue-gray)]/20",
        link: "text-[var(--color-primary)] underline-offset-4 hover:underline",

        // 색상별 Outline 버튼들
        outlineDefault:
          "border border-[var(--color-primary)] text-[var(--color-primary)] bg-white hover:bg-[var(--color-primary)] hover:text-white",
        outlineSecondary:
          "border border-[var(--color-secondary)] text-[var(--color-secondary)] bg-white hover:bg-[var(--color-secondary)]/10",
        outlineSuccess:
          "border border-[var(--color-success)] text-[var(--color-success)] bg-white hover:bg-[var(--color-success)]/20",
        outlineWarning:
          "border border-[var(--color-warning)] text-[var(--color-warning)] bg-white hover:bg-[var(--color-warning)]/10",
        outlineDark:
          "border border-[var(--color-dark-gray)] text-[var(--color-dark-gray)] bg-white hover:bg-[var(--color-dark-gray)]/10",
      },
      size: {
        xs: "h-7 px-2 text-xs",
        sm: "h-8 px-3 text-sm",
        md: "h-9 px-4 text-sm",
        lg: "h-10 px-6 text-base",
        xl: "h-11 px-8 text-base",
        full: "w-full h-11 px-8 text-base",
        icon: "size-9 p-0",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "md",
    },
  }
);

function Button({
  className,
  variant,
  size,
  rounded,
  outline,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  
  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size, rounded, outline }),
        className
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
