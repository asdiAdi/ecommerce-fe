import TableIcon from "@/components/core/TableIcon";
import { ComponentPropsWithoutRef } from "react";
import { cx } from "@/utils/common";

type UsernameProps = ComponentPropsWithoutRef<"div">;

export default function Username(props: UsernameProps) {
  const { className, ...rest } = props;

  return (
    <div className={cx("w-full", className)} {...rest}>
      <label className="daisy-input daisy-validator w-full">
        <TableIcon name="user-outline" className="opacity-50 p-0" size="2xs" />

        <input
          type="input"
          required
          placeholder="Username"
          pattern="[A-Za-z][A-Za-z0-9\-]*"
          minLength={3}
          maxLength={20}
          title="Only letters, numbers or dash"
        />
      </label>

      <p className="daisy-validator-hint hidden text-sm">
        Must be 3 to 20 characters
        <br />
        containing only letters, numbers or dash
      </p>
    </div>
  );
}
