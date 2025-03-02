"use client";
import ProfileHeader from "../../../_components/ProfileHeader";
import { ChangeEvent, useEffect, useState } from "react";
import { UpdateAddressType } from "@/schemas/AddressSchema";
import { useParams, useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAddress, putAddress } from "@/api/address";
import { toast } from "react-toastify";
import { VALIDATOR_HINT } from "@/constants";

const INIT: UpdateAddressType = {
  name: "",
  address_line_1: "",
  address_line_2: "",
  city: "",
  state: "",
  zip_code: "",
  country: "",
  phone_number: "",
  description: "",
};

export default function AddressEditPage() {
  const [formData, setFormData] = useState<UpdateAddressType>(INIT);
  const router = useRouter();
  const { addressId } = useParams();

  const { data } = useQuery({
    queryKey: ["userAddress"],
    queryFn: () => getAddress(addressId as string),
  });

  const { mutate: onSave, isPending } = useMutation({
    mutationFn: () => putAddress(addressId as string, formData),
    onSuccess: () => {
      router.push("/profile/addresses");
      toast.success("Edited Address Successfully!");
    },
  });

  useEffect(() => {
    const { ...rest } = data;
    setFormData({ ...rest });
  }, [data]);

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
            onSave();
          }}
        >
          <fieldset className="daisy-fieldset">
            <legend className="daisy-fieldset-legend pb-0">Name</legend>
            <input
              type="text"
              className="daisy-validator daisy-input w-full"
              placeholder="Name"
              value={name || ""}
              name="name"
              onChange={handleOnChange}
              required
            />
            <p className="daisy-validator-hint mt-0 hidden">
              {VALIDATOR_HINT.required}
            </p>
          </fieldset>
          <fieldset className="daisy-fieldset">
            <legend className="daisy-fieldset-legend pb-0">Phone</legend>
            <input
              type="tel"
              className="daisy-validator daisy-input w-full"
              placeholder="Phone"
              value={phone_number || ""}
              name="phone_number"
              onChange={handleOnChange}
              required
            />
            <p className="daisy-validator-hint mt-0 hidden">
              {VALIDATOR_HINT.phone}
            </p>
          </fieldset>

          <fieldset className="daisy-fieldset">
            <legend className="daisy-fieldset-legend pb-0">
              Address Line 1
            </legend>
            <input
              type="text"
              className="daisy-validator daisy-input w-full"
              placeholder="Address Line 1"
              value={address_line_1 || ""}
              name="address_line_1"
              onChange={handleOnChange}
              required
            />
            <p className="daisy-validator-hint mt-0 hidden">
              {VALIDATOR_HINT.required}
            </p>
          </fieldset>

          <fieldset className="daisy-fieldset">
            <legend className="daisy-fieldset-legend pb-0">
              Address Line 2
            </legend>
            <input
              type="text"
              className="daisy-input w-full"
              placeholder="Address Line 2"
              value={address_line_2 || ""}
              name="address_line_2"
              onChange={handleOnChange}
            />
          </fieldset>

          <fieldset className="daisy-fieldset">
            <legend className="daisy-fieldset-legend pb-0">City</legend>
            <input
              type="text"
              className="daisy-validator daisy-input w-full"
              placeholder="City"
              value={city || ""}
              name="city"
              onChange={handleOnChange}
              required
            />
            <p className="daisy-validator-hint mt-0 hidden">
              {VALIDATOR_HINT.required}
            </p>
          </fieldset>

          <fieldset className="daisy-fieldset">
            <legend className="daisy-fieldset-legend pb-0">State</legend>
            <input
              type="text"
              className="daisy-validator daisy-input w-full"
              placeholder="State"
              value={state || ""}
              name="state"
              onChange={handleOnChange}
              required
            />
            <p className="daisy-validator-hint mt-0 hidden">
              {VALIDATOR_HINT.required}
            </p>
          </fieldset>

          <fieldset className="daisy-fieldset">
            <legend className="daisy-fieldset-legend pb-0">Zip Code</legend>
            <input
              type="text"
              className="daisy-validator daisy-input w-full"
              placeholder="Zip Code"
              value={zip_code || ""}
              name="zip_code"
              onChange={handleOnChange}
              required
            />
            <p className="daisy-validator-hint mt-0 hidden">
              {VALIDATOR_HINT.required}
            </p>
          </fieldset>

          <fieldset className="daisy-fieldset">
            <legend className="daisy-fieldset-legend pb-0">Country</legend>
            <input
              type="text"
              className="daisy-validator daisy-input w-full"
              placeholder="Country"
              value={country || ""}
              name="country"
              onChange={handleOnChange}
              required
            />
            <p className="daisy-validator-hint mt-0 hidden">
              {VALIDATOR_HINT.required}
            </p>
          </fieldset>

          <fieldset className="daisy-fieldset">
            <legend className="daisy-fieldset-legend pb-0">Description</legend>
            <input
              type="text"
              className="daisy-input w-full"
              placeholder="Description"
              value={description || ""}
              name="description"
              onChange={handleOnChange}
            />
          </fieldset>

          <button
            className="daisy-btn mt-4 w-fit daisy-btn-primary lg:col-span-2"
            type="submit"
            disabled={isPending}
          >
            {isPending ? (
              <span className="daisy-loading daisy-loading-sm daisy-loading-spinner" />
            ) : (
              "Save Changes"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
