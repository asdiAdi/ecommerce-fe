import TableIcon from "@/components/core/TableIcon";
import { ComponentPropsWithoutRef } from "react";
import { cx } from "@/utils/common";

type EmailProps = ComponentPropsWithoutRef<"div">;

export default function Email(props: EmailProps) {
  const { className, ...rest } = props;

  return (
    <div className={cx("w-full", className)} {...rest}>
      <label className="daisy-input daisy-validator w-full">
        <TableIcon name="mail-outline" size="2xs" />
        <input type="email" placeholder="mail@site.com" required />
      </label>
      <div className="daisy-validator-hint hidden text-sm">
        Enter valid email address
      </div>
    </div>
  );
}
