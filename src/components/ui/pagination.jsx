import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button";

function Pagination({
  className,
  ...props
}) {
  return (
    (<nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center text-[var(--color-primary)]", className)}
      {...props} />)
  );
}

function PaginationContent({
  className,
  ...props
}) {
  return (
    (<ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props} />)
  );
}

function PaginationItem({
  ...props
}) {
  return <li data-slot="pagination-item" {...props} />;
}

function PaginationLink({
  className,
  isActive,
  size = "icon",
  noHover = false, // ✅ 추가
  ...props
}) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        isActive && "bg-[var(--color-primary)] text-white border-[var(--color-primary)]",

        // ✅ hover 제거 조건 분기
        !noHover && "hover:bg-[var(--color-primary)] hover:text-white",

        className
      )}
      {...props}
    />
  );
}
function PaginationPrevious({ className, ...props }) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      noHover // ✅ hover 제거
      className={cn("gap-1 px-2.5 sm:pl-2.5 mt-[5px]", className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">이전</span>
    </PaginationLink>
  );
}

function PaginationNext({ className, ...props }) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      noHover // ✅ hover 제거
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">다음</span>
      <ChevronRightIcon />
    </PaginationLink>
  );
}


function PaginationEllipsis({
  className,
  ...props
}) {
  return (
    (<span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}>
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>)
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
