import TableIcon from "@/components/core/TableIcon";
import { ComponentPropsWithoutRef } from "react";
import { cx } from "@/utils/common";

type UsernameProps = ComponentPropsWithoutRef<"div">;

export default function Password(props: UsernameProps) {
  const { className, ...rest } = props;

  return (
    <div className={cx("w-full", className)} {...rest}>
      <label className="daisy-validator daisy-input w-full">
        <TableIcon name="key-outline" className="p-0 opacity-50" size="2xs" />

        <input
          type="password"
          required
          placeholder="Password"
          minLength={8}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
        />

        <TableIcon
          name="eye-off"
          className="p-0 opacity-50"
          size="2xs"
          href="/"
        />
      </label>
      <p className="daisy-validator-hint hidden text-sm">
        Must be more than 8 characters, including
        <br />
        At least one number
        <br />
        At least one lowercase letter
        <br />
        At least one uppercase letter
      </p>
    </div>
  );
}
