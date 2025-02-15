"use client";
import { useState } from "react";
import TableIcon from "@/components/core/TableIcon";
import Username from "@/components/input/Username";
import Password from "@/components/input/Password";
import Email from "@/components/input/Email";
import { cx } from "@/utils/common";

type Field = "login" | "signup" | "recover";

function LoginField(props: {
  field: Field;
  setField: (field: Field) => void;
  onLogin: () => void;
}) {
  const { field, setField, onLogin } = props;

  return (
    <div
      className={cx("flex w-full flex-col items-center", {
        hidden: field !== "login",
      })}
    >
      <h4 className="pb-2 text-lg font-semibold text-primary">
        Login to my account
      </h4>
      <p className="pb-4">Enter your username and password:</p>

      <form className="mb-8 w-full" onSubmit={onLogin}>
        <Username className="mb-4" />
        <Password className="mb-8" />

        <button className="daisy-btn w-full daisy-btn-primary">Login</button>
      </form>

      <p className="mb-4 text-sm">
        New customer?{" "}
        <a
          className="daisy-link daisy-link-primary"
          onClick={() => setField("signup")}
        >
          Create your account
        </a>
      </p>
      <p className="text-sm">
        Lost password?{" "}
        <a
          className="daisy-link daisy-link-primary"
          onClick={() => setField("recover")}
        >
          Recover password
        </a>
      </p>
    </div>
  );
}

function SignUpField(props: {
  field: Field;
  setField: (field: Field) => void;
  onSignUp: () => void;
}) {
  const { field, setField, onSignUp } = props;

  return (
    <div
      className={cx("flex w-full flex-col items-center", {
        hidden: field !== "signup",
      })}
    >
      <h4 className="pb-2 text-lg font-semibold text-primary">
        Create my account
      </h4>
      <p className="pb-4">Please fill in the information below:</p>

      <form className="mb-4 w-full" onSubmit={onSignUp}>
        <Username className="mb-4" />
        <Password className="mb-8" />

        <button className="daisy-btn w-full daisy-btn-primary">
          Create my account
        </button>
      </form>

      <p className="mb-4 text-sm">
        Already have an account?{" "}
        <a
          className="daisy-link daisy-link-primary"
          onClick={() => setField("login")}
        >
          Login here
        </a>
      </p>
    </div>
  );
}

function RecoverField(props: {
  field: Field;
  setField: (field: Field) => void;
  onRecover: () => void;
}) {
  const { field, setField, onRecover } = props;

  return (
    <div
      className={cx("flex w-full flex-col items-center", {
        hidden: field !== "recover",
      })}
    >
      <h4 className="pb-2 text-lg font-semibold text-primary">
        Recover password
      </h4>
      <p className="pb-4">Enter your email:</p>

      <form className="mb-4 w-full" onSubmit={onRecover}>
        <Email className="mb-8" />

        <button className="daisy-btn w-full daisy-btn-primary">Recover</button>
      </form>

      <p className="mb-4 text-sm">
        Remembered your password?{" "}
        <a
          className="daisy-link daisy-link-primary"
          onClick={() => setField("login")}
        >
          Back to login
        </a>
      </p>
    </div>
  );
}

export default function ModalLogin(props: { id: string }) {
  const { id } = props;
  const [field, setField] = useState<Field>("login");

  return (
    <dialog id={id} className="daisy-modal">
      <div className="daisy-modal-box flex w-100 flex-col items-center">
        <TableIcon name="building-store" size="xl" href="/" />
        <h3 className="pb-4 text-xl font-bold">An Ecommerce Project</h3>

        <LoginField field={field} setField={setField} onLogin={() => {}} />
        <SignUpField field={field} setField={setField} onSignUp={() => {}} />
        <RecoverField field={field} setField={setField} onRecover={() => {}} />
      </div>

      <form
        method="dialog"
        className="daisy-modal-backdrop"
        onClick={() => setField("login")}
      >
        <button>close</button>
      </form>
    </dialog>
  );
}
