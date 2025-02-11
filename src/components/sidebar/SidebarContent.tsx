import { ComponentPropsWithoutRef } from "react";

import { clsx } from "clsx";

export type SidebarContentProps = ComponentPropsWithoutRef<"ul">;

export default function SidebarContent(props: SidebarContentProps) {
  const { className, children } = props;

  // if (!isOpen) {
  //   return null; // TODO: fallback
  // }

  return (
    <div
      className={clsx(
        "bg-base-300 min-h-[calc(100%-56px)] p-4 w-full sm:w-80 mt-14 overflow-hidden",
        "transition-all ease-linear",
        "overflow-y-scroll",
        className,
      )}
    >
      {children}
    </div>
  );
}
