import { useMutation } from "@tanstack/react-query";
import { postSignup } from "@/api/auth";
import { cx } from "@/utils/common";
import Username from "@/components/input/Username";
import Password from "@/components/input/Password";
import { useAuthStore } from "@/stores/authStore";

export default function FieldSignup(props: {
  hidden: boolean;
  onLoginHere: () => void;
  toggle: () => void;
}) {
  const { hidden, onLoginHere, toggle } = props;

  const setToken = useAuthStore((state) => state.setToken);

  const { mutate: onSignUp, isPending } = useMutation({
    mutationFn: postSignup,
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
        Create my account
      </h4>
      <p className="pb-4">Please fill in the information below:</p>

      <form
        className="mb-4 w-full"
        onSubmit={(e) => {
          e.preventDefault();
          onSignUp(new FormData(e.currentTarget));
        }}
      >
        <Username className="mb-4" />
        <Password className="mb-8" />

        <button className="daisy-btn w-full daisy-btn-primary" type="submit">
          {isPending ? (
            <span className="daisy-loading daisy-loading-sm daisy-loading-spinner" />
          ) : (
            "Create my account"
          )}
        </button>
      </form>

      <p className="mb-4 text-sm">
        Already have an account?{" "}
        <a className="daisy-link daisy-link-primary" onClick={onLoginHere}>
          Login here
        </a>
      </p>
    </div>
  );
}
