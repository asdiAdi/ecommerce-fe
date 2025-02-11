import { ComponentPropsWithoutRef, ReactNode } from "react";
import { cx } from "@/utils/common";
import { clsx } from "clsx";

type SidebarLayoutProps = ComponentPropsWithoutRef<"div"> & {
  isOpen: boolean;
  toggle: () => void;
  side: ReactNode;
  position?: string;
};

export default function SidebarLayout(props: SidebarLayoutProps) {
  const {
    isOpen,
    toggle,
    position = "left",
    side,
    children,
    className,
  } = props;

  return (
    <div
      className={cx("daisy-drawer", {
        "daisy-drawer-end": position === "right",
      })}
    >
      <input
        type="checkbox"
        className="daisy-drawer-toggle"
        checked={isOpen}
        readOnly
      />

      <div className="daisy-drawer-content">{children}</div>

      <div className="daisy-drawer-side lg:hidden">
        <label
          aria-label="close sidebar"
          className="daisy-drawer-overlay"
          onClick={() => toggle()}
        />
        <div
          className={clsx(
            "bg-base-300 min-h-[calc(100%-56px)] p-4 w-full sm:w-80 mt-14 overflow-hidden",
            "transition-all ease-linear",
            "overflow-y-scroll",
            className,
          )}
        >
          {side}
        </div>
      </div>
    </div>
  );
}
