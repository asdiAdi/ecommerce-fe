"use client";
import TableIcon from "@/components/core/TableIcon";
import { ComponentPropsWithoutRef } from "react";
import { useSidebar } from "@/components/sidebar/SidebarProvider";

type NavbarMenuProps = Omit<ComponentPropsWithoutRef<typeof TableIcon>, "name">;

export default function NavbarMenu(props: NavbarMenuProps) {
  const { className } = props;

  const { toggle } = useSidebar();

  return (
    <TableIcon
      name="menu-2"
      className={className}
      onClick={() => toggle("category")}
    />
  );
}
