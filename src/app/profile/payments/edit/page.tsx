"use client";
import ProfileHeader from "../../_components/ProfileHeader";
import { ChangeEvent, useState } from "react";

// TODO edit to address data

const MOCKDATA: PaymentMethodType = {
  name: "Bahay",
  card_type: "paypal",
  cvc: "1",

  card_number: "0123456789",
  expiry_date: "2020-03-02",
};

export default function AddressEdit(props: { data?: PaymentMethodType }) {
  const { data } = props;
  const [formData, setFormData] = useState<PaymentMethodType>(data ?? MOCKDATA);
  const { name, card_number, cvc, expiry_date } = formData;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="w-full">
      <ProfileHeader
        iconName="user-filled"
        title="Edit Payment Details"
        link={{ href: "/profile/payments", label: "Back to Payments" }}
      />

      <div className="mb-6">
        <form
          className="grid w-full gap-2 gap-x-8 rounded-lg bg-base-100 px-8 py-8 shadow-sm lg:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            //   TODO: edit api
          }}
        >
          <fieldset className="daisy-fieldset">
            <legend className="daisy-fieldset-legend pb-0">Card Number</legend>
            <input
              type="text"
              className="daisy-input w-full"
              placeholder="Card Number"
              value={card_number}
              name="card_number"
              onChange={handleOnChange}
            />
          </fieldset>

          <fieldset className="daisy-fieldset">
            <legend className="daisy-fieldset-legend pb-0">Name on Card</legend>
            <input
              type="text"
              className="daisy-input w-full"
              placeholder="Name on Card"
              value={name}
              name="name"
              onChange={handleOnChange}
            />
          </fieldset>

          <fieldset className="daisy-fieldset">
            <legend className="daisy-fieldset-legend pb-0">Expiry Date</legend>
            <input
              type="date"
              className="daisy-input w-full"
              placeholder="Expiry Date"
              value={expiry_date}
              name="expiry_date"
              onChange={handleOnChange}
            />
          </fieldset>

          <fieldset className="daisy-fieldset">
            <legend className="daisy-fieldset-legend pb-0">CVC</legend>
            <input
              type="text"
              className="daisy-input w-full"
              placeholder="CVC"
              value={cvc}
              name="cvc"
              onChange={handleOnChange}
            />
          </fieldset>

          <button
            className="daisy-btn mt-4 w-fit daisy-btn-primary lg:col-span-2"
            type="submit"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
