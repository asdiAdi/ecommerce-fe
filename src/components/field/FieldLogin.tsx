import { cx } from "@/utils/common";
import Username from "@/components/input/Username";
import Password from "@/components/input/Password";
import { useMutation } from "@tanstack/react-query";
import { postLogin } from "@/api/auth";
import { useAuthStore } from "@/stores/authStore";

export default function FieldLogin(props: {
  hidden: boolean;
  toggle: () => void;
  onClickSignup: () => void;
  onClickRecover: () => void;
}) {
  const { hidden, toggle, onClickSignup, onClickRecover } = props;

  const setToken = useAuthStore((state) => state.setToken);

  const { mutate: onLogin, isPending } = useMutation({
    mutationFn: postLogin,
    onSuccess: (data) => {
      setToken(data.access_token);
      toggle();
    },
    onError: console.error,
  });

  return (
    <div
      className={cx("flex w-full flex-col items-center", {
        hidden: hidden,
      })}
    >
      <h4 className="pb-2 text-lg font-semibold text-primary">
        Login to my account
      </h4>
      <p className="pb-4">Enter your username and password:</p>

      <form
        className="mb-8 w-full"
        onSubmit={(e) => {
          e.preventDefault();
          onLogin(new FormData(e.currentTarget));
        }}
      >
        <Username className="mb-4" />
        <Password className="mb-8" />

        <button className="daisy-btn w-full daisy-btn-primary">
          {isPending ? (
            <span className="daisy-loading daisy-loading-sm daisy-loading-spinner" />
          ) : (
            "Login"
          )}
        </button>
      </form>

      <p className="mb-4 text-sm">
        New customer?{" "}
        <a className="daisy-link daisy-link-primary" onClick={onClickSignup}>
          Create your account
        </a>
      </p>
      <p className="text-sm">
        Lost password?{" "}
        <a className="daisy-link daisy-link-primary" onClick={onClickRecover}>
          Recover password
        </a>
      </p>
    </div>
  );
}
