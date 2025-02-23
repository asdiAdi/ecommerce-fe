"use client";
import TableIcon from "@/components/core/TableIcon";
import { ComponentPropsWithoutRef } from "react";
import { cx } from "@/utils/common";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSidebar } from "@/components/sidebar/SidebarProvider";

type MenuAccountProps = ComponentPropsWithoutRef<"ul"> & {
  isCompact?: boolean;
};

export default function MenuAccount(props: MenuAccountProps) {
  const { className, isCompact = false, ...rest } = props;

  const { toggle } = useSidebar();

  const pathname = usePathname();

  return (
    <ul className={cx("daisy-menu h-full w-full", className)} {...rest}>
      <li className={cx("daisy-menu-title uppercase", { "py-0": isCompact })}>
        Dashboard
      </li>
      <li>
        <Link
          href="/profile/orders"
          className={cx({
            "p-0 pr-2": isCompact,
            "daisy-menu-active": pathname === "/profile/orders",
          })}
          onClick={() => toggle(null)}
        >
          <TableIcon name="basket-outline" className="opacity-50" /> Orders
          <span className="daisy-badge border-0">5</span>
        </Link>
      </li>
      <li>
        <Link
          href="/profile/wishlists"
          className={cx({
            "p-0 pr-2": isCompact,
            "daisy-menu-active": pathname === "/profile/wishlists",
          })}
          onClick={() => toggle(null)}
        >
          <TableIcon name="heart-outline" className="opacity-50" /> Wishlist
          <span className="daisy-badge border-0">19</span>
        </Link>
      </li>
      {/*<li>
        <a className={cx({ "p-0 pr-2": isCompact })}>
          <TableIcon name="headphones-outline" className="opacity-50" /> Support
          Tickets
          <span className="daisy-badge border-0">1</span>
        </a>
      </li>*/}

      <li
        className={cx("mt-8 daisy-menu-title uppercase", {
          "mt-4 py-0": isCompact,
        })}
      >
        Account Settings
      </li>
      <li>
        <Link
          href="/profile"
          className={cx({
            "p-0 pr-2": isCompact,
            "daisy-menu-active": pathname === "/profile",
          })}
          onClick={() => toggle(null)}
        >
          <TableIcon name="user-outline" className="opacity-50" /> Profile Info
        </Link>
      </li>
      <li>
        <Link
          href="/profile/addresses"
          className={cx({
            "p-0 pr-2": isCompact,
            "daisy-menu-active": pathname === "/profile/addresses",
          })}
          onClick={() => toggle(null)}
        >
          <TableIcon name="map-pin-outline" className="opacity-50" /> Addresses
          <span className="daisy-badge border-0">16</span>
        </Link>
      </li>
      <li>
        <Link
          href="/profile/payments"
          className={cx({
            "p-0 pr-2": isCompact,
            "daisy-menu-active": pathname === "/profile/payments",
          })}
          onClick={() => toggle(null)}
        >
          <TableIcon name="credit-card-outline" className="opacity-50" />{" "}
          Payment Methods
          <span className="daisy-badge border-0">4</span>
        </Link>
      </li>
    </ul>
  );
}
