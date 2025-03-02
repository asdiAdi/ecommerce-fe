"use client";
import Image from "next/image";
import Avatar from "../../../../public/placeholder/Avatar.png";
import ProfileHeader from "../_components/ProfileHeader";
import { ChangeEvent, useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getUser, putUser } from "@/api/auth";
import { UpdateUserType } from "@/schemas/UserSchema";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { VALIDATOR_HINT } from "@/constants";

const INIT: UpdateUserType = {
  avatar: null,
  first_name: null,
  last_name: null,
  email: null,
  phone: null,
  birthdate: null,
};

export default function ProfileEditPage() {
  const [formData, setFormData] = useState<UpdateUserType>(INIT);

  const router = useRouter();
  const { data } = useQuery({
    queryKey: ["userProfileEdit"],
    queryFn: () => getUser(),
    initialData: INIT,
  });

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const { first_name, last_name, email, phone, birthdate } = formData;
  const birth = birthdate ? new Date(birthdate) : "";

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { mutate: onSave } = useMutation({
    mutationFn: putUser,
    onSuccess: () => {
      toast.success("Edited Profile Successfully!");
      router.push("/profile");
    },
  });

  return (
    <div className="w-full">
      <ProfileHeader
        iconName="user-filled"
        title="Edit Profile"
        link={{ href: "/profile", label: "Back to Profile" }}
      />

      <div className="mb-6">
        <form
          className="grid w-full gap-2 gap-x-8 rounded-lg bg-base-100 px-8 py-8 shadow-sm lg:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            onSave(formData);
          }}
        >
          <figure className="daisy-avatar lg:col-span-2">
            <div className="h-fit w-16 rounded-full">
              <Image src={Avatar} alt="Movie" />
            </div>
          </figure>

          <fieldset className="daisy-fieldset">
            <legend className="daisy-fieldset-legend pb-0">First Name</legend>
            <input
              type="text"
              className="daisy-input w-full"
              placeholder="First Name"
              value={first_name || ""}
              name="first_name"
              onChange={handleOnChange}
            />
          </fieldset>

          <fieldset className="daisy-fieldset">
            <legend className="daisy-fieldset-legend pb-0">Last Name</legend>
            <input
              type="text"
              className="daisy-input w-full"
              placeholder="Last Name"
              value={last_name || ""}
              name="last_name"
              onChange={handleOnChange}
            />
          </fieldset>

          <fieldset className="daisy-fieldset">
            <legend className="daisy-fieldset-legend pb-0">Email</legend>
            <input
              type="email"
              className="daisy-validator daisy-input w-full"
              placeholder="Email"
              value={email || ""}
              name="email"
              onChange={handleOnChange}
            />
            <div className="daisy-validator-hint mt-0 hidden">
              {VALIDATOR_HINT.email}
            </div>
          </fieldset>

          <fieldset className="daisy-fieldset">
            <legend className="daisy-fieldset-legend pb-0">Phone</legend>
            <input
              type="tel"
              className="daisy-validator daisy-input w-full tabular-nums"
              placeholder="Phone"
              value={phone || ""}
              name="phone"
              pattern="[0-9]*"
              onChange={handleOnChange}
            />
            <p className="daisy-validator-hint mt-0 hidden">
              {VALIDATOR_HINT.phone}
            </p>
          </fieldset>

          <fieldset className="daisy-fieldset">
            <legend className="daisy-fieldset-legend pb-0">Birth Date</legend>

            <input
              type="date"
              className="daisy-input w-full"
              placeholder="Birth Date"
              value={birth ? birth.toISOString().split("T")[0] : ""}
              name="birthdate"
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
