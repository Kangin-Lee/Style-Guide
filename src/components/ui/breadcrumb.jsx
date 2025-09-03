"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

// Breadcrumb 전체 컨테이너
const Breadcrumb = React.forwardRef(({ className, ...props }, ref) => (
  <nav ref={ref} className={cn("flex", className)} {...props} />
))
Breadcrumb.displayName = "Breadcrumb"

// Breadcrumb 리스트 래퍼
const BreadcrumbList = React.forwardRef(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn("inline-flex items-center gap-1", className)}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

// 각각의 아이템
const BreadcrumbItem = React.forwardRef(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

// 링크 컴포넌트 (asChild로 Slot 사용 가능)
const BreadcrumbLink = React.forwardRef(
  ({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "a"
    return (
      <Comp
        ref={ref}
        className={cn("transition-colors hover:underline text-[var(--color-font-gray)]", className)}
        {...props}
      />
    )
  }
)
BreadcrumbLink.displayName = "BreadcrumbLink"

// 구분자 (/ 또는 >)
const BreadcrumbSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <li
    ref={ref}
    role="presentation"
    aria-hidden="true"
    className={cn("select-none opacity-50 text-[var(--color-font-gray)]", className)}
    {...props}
  >
    <ChevronRight size={15}/>
  </li>
))
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

// 현재 페이지 표시용
const BreadcrumbPage = React.forwardRef(({ className, ...props }, ref) => (
  <span
    ref={ref}
    aria-current="page"
    className={cn("font-bold text-[var(--color-primary)]", className)}
    {...props}
  />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

// 중첩 메뉴에서 ... 표기용
const BreadcrumbEllipsis = React.forwardRef(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("text-xl font-bold", className)}
    {...props}
  >
    …
  </span>
))
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
  BreadcrumbEllipsis,
}
