"use client";
import TableIcon from "@/components/core/TableIcon";
import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";

type NavbarSearchProps = ComponentPropsWithoutRef<"label">;

export default function NavbarSearch(props: NavbarSearchProps) {
  const { className } = props;
  // TODO: Join (group items) - daisy
  return (
    <label className={clsx("daisy-input overflow-hidden pr-0", className)}>
      <input type="search" required placeholder="Search" />
      <TableIcon
        name="search"
        className="box-border h-full rounded-none border-l-1 border-neutral-content bg-base-300 opacity-75"
        size="xl"
      />
    </label>
  );
}
