"use client";
import { useState } from "react";
import TableIcon from "@/components/core/TableIcon";
import { toggleModal } from "@/utils/modal";
import FieldSignup from "@/components/field/FieldSignup";
import FieldLogin from "@/components/field/FieldLogin";
import { FieldRecover } from "@/components/field/FieldRecover";

type Field = "login" | "signup" | "recover";

export default function ModalLogin(props: { id: string }) {
  const { id } = props;
  const [field, setField] = useState<Field>("login");

  return (
    <dialog id={id} className="daisy-modal">
      <div className="daisy-modal-box flex w-100 flex-col items-center">
        <TableIcon name="building-store" size="xl" href="/" />
        <h3 className="pb-4 text-xl font-bold">An Ecommerce Project</h3>

        <FieldLogin
          hidden={field !== "login"}
          toggle={() => toggleModal(id)}
          onClickSignup={() => setField("signup")}
          onClickRecover={() => setField("recover")}
        />
        <FieldSignup
          hidden={field !== "signup"}
          toggle={() => toggleModal(id)}
          onLoginHere={() => setField("login")}
        />
        <FieldRecover
          hidden={field !== "recover"}
          toggle={() => toggleModal(id)}
          onClickLogin={() => setField("login")}
        />
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
