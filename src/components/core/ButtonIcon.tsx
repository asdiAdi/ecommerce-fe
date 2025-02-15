"use client";
import TableIcon, { TableIconProps } from "./TableIcon";
import { cx } from "@/utils/common";
import { useRouter } from "next/navigation";

type ButtonIconProps = TableIconProps & {
  shape?: "circle" | "square";
  href?: string;
  outline?: boolean;
};

export default function ButtonIcon(props: ButtonIconProps) {
  const {
    onClick,
    href,
    outline = false,
    shape = "square",
    className,
    ...rest
  } = props;
  const router = useRouter();

  return (
    <button
      className={cx(
        "daisy-btn h-fit w-fit border-none",
        {
          "daisy-btn-square": shape === "square",
          "daisy-btn-circle": shape === "circle",
          "daisy-btn-outline": outline,
        },
        className,
      )}
      onClick={() => {
        if (onClick) {
          onClick();
        }

        if (href) {
          router.push(href);
        }
      }}
    >
      <TableIcon {...rest} />
    </button>
  );
}
