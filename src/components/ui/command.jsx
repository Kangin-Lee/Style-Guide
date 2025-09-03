"use client";

import * as React from "react";
import {
  Command as CommandPrimitive,
  CommandInput as CommandInputPrimitive,
  CommandList as CommandListPrimitive,
  CommandItem as CommandItemPrimitive,
  CommandEmpty as CommandEmptyPrimitive,
  CommandGroup as CommandGroupPrimitive, // ✅ 추가
} from "cmdk";
import { cn } from "@/lib/utils";

const Command = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "rounded-md border bg-popover text-popover-foreground shadow-md",
      className
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

const CommandInput = React.forwardRef(({ className, ...props }, ref) => (
  <CommandInputPrimitive
    ref={ref}
    className={cn("px-3 py-2 text-sm border-b w-full outline-none", className)}
    {...props}
  />
));
CommandInput.displayName = CommandInputPrimitive.displayName;

const CommandList = React.forwardRef(({ className, ...props }, ref) => (
  <CommandListPrimitive
    ref={ref}
    className={cn("max-h-60 overflow-y-auto", className)}
    {...props}
  />
));
CommandList.displayName = CommandListPrimitive.displayName;

const CommandItem = React.forwardRef(({ className, ...props }, ref) => (
  <CommandItemPrimitive
    ref={ref}
    className={cn(
      "cursor-pointer select-none px-3 py-2 text-sm hover:bg-muted",
      className
    )}
    {...props}
  />
));
CommandItem.displayName = CommandItemPrimitive.displayName;

const CommandEmpty = React.forwardRef(({ className, ...props }, ref) => (
  <CommandEmptyPrimitive
    ref={ref}
    className={cn("px-3 py-2 text-sm text-muted-foreground", className)}
    {...props}
  />
));
CommandEmpty.displayName = CommandEmptyPrimitive.displayName;

const CommandGroup = React.forwardRef(({ className, ...props }, ref) => (
  <CommandGroupPrimitive
    ref={ref}
    className={cn("px-2 py-1 text-xs font-semibold text-muted-foreground", className)}
    {...props}
  />
));
CommandGroup.displayName = CommandGroupPrimitive.displayName;

export {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandGroup, // ✅ export 추가
};
