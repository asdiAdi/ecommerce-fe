"use client";
import TableIcon from "@/components/core/TableIcon";
import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";

type NavbarSearchProps = ComponentPropsWithoutRef<"label">;

export default function NavbarSearch(props: NavbarSearchProps) {
  const { className } = props;
  // TODO: Join (group items) - daisy
  return (
    <label className={clsx("pr-0 overflow-hidden daisy-input", className)}>
      <input type="search" required placeholder="Search" />
      <TableIcon
        name="search"
        className="opacity-75 bg-base-300 rounded-none box-border h-full border-l-1 border-neutral-content"
        size="xl"
      />
    </label>
  );
}
