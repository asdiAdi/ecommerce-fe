"use client";
import { ComponentPropsWithoutRef } from "react";
import { useSidebar } from "./SidebarProvider";
import { cx } from "@/utils/common";
import SidebarCategory from "@/components/sidebar/SidebarCategory";
import SidebarTheme from "@/components/sidebar/SidebarTheme";

type SidebarLayoutProps = ComponentPropsWithoutRef<"div">;

export default function SidebarLayout(props: SidebarLayoutProps) {
  const { children, className, ...rest } = props;
  const { isOpen, toggle } = useSidebar();

  return (
    <div
      className={cx(
        "daisy-drawer",
        { "daisy-drawer-end": isOpen === "theme" },
        className,
      )}
      {...rest}
    >
      {/*<div
        className={cx(
          "absolute top-14.5 left-[-300px] h-5 w-5 bg-base-300 z-40 rotate-45 lg:hidden transition-all ease-linear duration-200",
          { "!left-8.5": isOpen },
        )}
      />*/}

      <input
        type="checkbox"
        className="daisy-drawer-toggle"
        checked={isOpen !== null}
        readOnly
      />

      <div className="daisy-drawer-content">{children}</div>

      <div className="daisy-drawer-side lg:hidden">
        <label
          aria-label="close sidebar"
          className="daisy-drawer-overlay"
          onClick={() => toggle(null)}
        />

        {isOpen === "category" && <SidebarCategory />}
        {isOpen === "theme" && <SidebarTheme />}
      </div>
    </div>
  );
}
