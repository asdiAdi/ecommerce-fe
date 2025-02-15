"use client";
import { cx } from "@/utils/common";
import { ComponentPropsWithoutRef } from "react";
import { Color, ColorContent } from "@/types/constants";
type BadgeStatusProps = ComponentPropsWithoutRef<"div"> & {
  status?: string;
  color?: Color | ColorContent;
};

export default function BadgeStatus(props: BadgeStatusProps) {
  const { color, status, className, ...rest } = props;
  console.log(color);
  return (
    <div
      className={cx(
        "h-fit w-fit rounded-lg border-none p-1",
        `bg-${color}`,
        className,
      )}
      {...rest}
    >
      {status}
    </div>
  );
}
