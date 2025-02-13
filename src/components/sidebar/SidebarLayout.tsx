import { ComponentPropsWithoutRef, ReactNode } from "react";
import { cx } from "@/utils/common";

type SidebarLayoutProps = ComponentPropsWithoutRef<"div"> & {
  isOpen: boolean;
  toggle: () => void;
  side: ReactNode;
  position?: string;
  isHiddenLarge?: boolean;
};

export default function SidebarLayout(props: SidebarLayoutProps) {
  const {
    isOpen,
    toggle,
    position = "left",
    isHiddenLarge,
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

      <div className={cx("daisy-drawer-side", { "lg:hidden": isHiddenLarge })}>
        <label
          aria-label="close sidebar"
          className="daisy-drawer-overlay"
          onClick={() => toggle()}
        />
        <div
          className={cx(
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
