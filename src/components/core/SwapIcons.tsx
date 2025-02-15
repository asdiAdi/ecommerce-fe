import TableIcon, { TableIconProps } from "@/components/core/TableIcon";
import { cx } from "@/utils/common";
import { ComponentPropsWithoutRef } from "react";

type SwapIconProps = Omit<TableIconProps, "name"> & {
  nameOff: string;
  nameOn: string;
  swap?: "rotate" | "flip";
  inputProps?: ComponentPropsWithoutRef<"input">;
};

export default function SwapIcons(props: SwapIconProps) {
  const {
    nameOff,
    nameOn,
    swap = "rotate",
    className,
    inputProps,
    ...rest
  } = props;

  return (
    <label
      className={cx(
        "daisy-btn daisy-swap daisy-btn-square h-fit w-fit border-none",
        {
          ["daisy-swap-rotate"]: swap === "rotate",
          ["daisy-swap-flip"]: swap === "flip",
        },
        className,
      )}
    >
      <input type="checkbox" {...inputProps} />

      <TableIcon name={nameOff} className="daisy-swap-off" {...rest} />
      <TableIcon name={nameOn} className="daisy-swap-on" {...rest} />
    </label>
  );
}
