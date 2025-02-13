"use client";
import TableIcon, { TableIconProps } from "./TableIcon";
import { cx } from "@/utils/common";
import { useRouter } from "next/navigation";

type ButtonIconProps = TableIconProps & {
  shape?: "circle" | "square";
  href?: string;
};

export default function ButtonIcon(props: ButtonIconProps) {
  const { onClick, href, shape = "square", className, ...rest } = props;
  const router = useRouter();

  return (
    <button
      className={cx(
        "daisy-btn border-none w-fit h-fit",
        {
          "daisy-btn-square": shape === "square",
          "daisy-btn-circle": shape === "circle",
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
