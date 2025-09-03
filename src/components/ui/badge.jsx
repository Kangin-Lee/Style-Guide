import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-primary)] border-2 text-[var(--color-white)] border-transparent focus-visible:ring-[var(--color-primary)]",
        secondary:
          "bg-[var(--color-light-blue)] text-[var(--color-blue)] border-[var(--color-secondary)] focus-visible:ring-[var(--color-secondary)]",
        success:
          "bg-[var(--color-light-green)] text-[var(--color-green-border)] border-[var(--color-green-border)] focus-visible:ring-[var(--color-secondary)]",
        warning:
          "bg-[var(--color-light-red)] text-white border-[var(--color-red-border)] focus-visible:ring-[var(--color-destructive)]",
        info: "border border-[var(--color-border)] bg-white text-[var(--color-font-gray)]",
        yellow: "border border-[var(--color-yellow-border)] bg-[var(--color-yellow)] text-[var(--color-text)]",
        disable: "border border-[var(--color-disable-border)] bg-[var(--color-disable)] text-[var(--color-text)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
