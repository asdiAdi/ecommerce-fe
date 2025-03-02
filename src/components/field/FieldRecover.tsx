import { cx } from "@/utils/common";
import Email from "@/components/input/Email";

export function FieldRecover(props: {
  hidden: boolean;
  toggle: () => void;
  onClickLogin: () => void;
}) {
  const { hidden, toggle, onClickLogin } = props;

  return (
    <div
      className={cx("flex w-full flex-col items-center", {
        hidden: hidden,
      })}
    >
      <h4 className="pb-2 text-lg font-semibold text-primary">
        Recover password
      </h4>
      <p className="pb-4">Enter your email:</p>

      <form className="mb-4 w-full" onSubmit={toggle}>
        <Email className="mb-8" />

        <button className="daisy-btn w-full daisy-btn-primary">Recover</button>
      </form>

      <p className="mb-4 text-sm">
        Remembered your password?{" "}
        <a className="daisy-link daisy-link-primary" onClick={onClickLogin}>
          Back to login
        </a>
      </p>
    </div>
  );
}
