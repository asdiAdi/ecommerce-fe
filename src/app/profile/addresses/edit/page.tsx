"use client";
import ProfileHeader from "../../_components/ProfileHeader";
import { ChangeEvent, useState } from "react";

// TODO edit to address data

const MOCKDATA: AddressType = {
  name: "Bahay",
  address_line_1: "9th St",
  address_line_2: undefined,
  city: "Caloocan",
  state: "Metro Manila",
  zip_code: "1400",
  country: "Philippines",
  phone_number: "(02) 361 7435",
  description: "Malapit sa gate",
};

export default function AddressEdit(props: { data?: AddressType }) {
  const { data } = props;
  const [formData, setFormData] = useState<AddressType>(data ?? MOCKDATA);
  const {
    name,
    address_line_1,
    address_line_2,
    city,
    state,
    zip_code,
    country,
    phone_number,
    description,
  } = formData;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="w-full">
      <ProfileHeader
        iconName="user-filled"
        title="Edit Address"
        link={{ href: "/profile/addresses", label: "Back to Addresses" }}
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
            <legend className="daisy-fieldset-legend pb-0">Name</legend>
            <input
              type="text"
              className="daisy-input w-full"
              placeholder="Name"
              value={name}
              name="name"
              onChange={handleOnChange}
            />
          </fieldset>
          <fieldset className="daisy-fieldset">
            <legend className="daisy-fieldset-legend pb-0">Phone</legend>
            <input
              type="tel"
              className="daisy-input w-full"
              placeholder="Phone"
              value={phone_number}
              name="phone_number"
              onChange={handleOnChange}
            />
          </fieldset>

          <fieldset className="daisy-fieldset">
            <legend className="daisy-fieldset-legend pb-0">
              Address Line 1
            </legend>
            <input
              type="text"
              className="daisy-input w-full"
              placeholder="Address Line 1"
              value={address_line_1}
              name="address_line_1"
              onChange={handleOnChange}
            />
          </fieldset>

          <fieldset className="daisy-fieldset">
            <legend className="daisy-fieldset-legend pb-0">
              Address Line 2
            </legend>
            <input
              type="text"
              className="daisy-input w-full"
              placeholder="Address Line 2"
              value={address_line_2}
              name="address_line_2"
              onChange={handleOnChange}
            />
          </fieldset>

          <fieldset className="daisy-fieldset">
            <legend className="daisy-fieldset-legend pb-0">City</legend>
            <input
              type="email"
              className="daisy-input w-full"
              placeholder="City"
              value={city}
              name="text"
              onChange={handleOnChange}
            />
          </fieldset>

          <fieldset className="daisy-fieldset">
            <legend className="daisy-fieldset-legend pb-0">State</legend>
            <input
              type="tel"
              className="daisy-input w-full"
              placeholder="State"
              value={state}
              name="state"
              onChange={handleOnChange}
            />
          </fieldset>

          <fieldset className="daisy-fieldset">
            <legend className="daisy-fieldset-legend pb-0">Zip Code</legend>
            <input
              type="tel"
              className="daisy-input w-full"
              placeholder="Zip Code"
              value={zip_code}
              name="zip_code"
              onChange={handleOnChange}
            />
          </fieldset>

          <fieldset className="daisy-fieldset">
            <legend className="daisy-fieldset-legend pb-0">Country</legend>
            <input
              type="tel"
              className="daisy-input w-full"
              placeholder="Country"
              value={country}
              name="country"
              onChange={handleOnChange}
            />
          </fieldset>

          <fieldset className="daisy-fieldset">
            <legend className="daisy-fieldset-legend pb-0">Description</legend>
            <input
              type="text"
              className="daisy-input w-full"
              placeholder="Description"
              value={description}
              name="description"
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
