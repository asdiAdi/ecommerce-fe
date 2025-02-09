import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";

export type ButtonProps = ComponentPropsWithoutRef<"button">;

export default function Button(props: ButtonProps) {
  const { children, className, ...rest } = props;

  return (
    <button
      className={clsx(
        "text-black bg-white  dark:text-white dark:bg-black",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
