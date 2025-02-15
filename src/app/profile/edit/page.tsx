"use client";
import Image from "next/image";
import Avatar from "../../../../public/placeholder/Avatar.png";
import MenuAccount from "@/components/menu/MenuAccount";
import ProfileHeader from "../_components/ProfileHeader";
import { ChangeEvent, useState } from "react";

type ProfileFormData = {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  birth_date?: string;
};

const MOCKDATA = {
  first_name: "Nick",
  last_name: "Dubuque",
  email: "Jayden.Gislason78@gmail.com",
  phone: "(445) 653-3771 x985",
  birth_date: "2017-06-01",
};

export default function ProfileEdit(props: { data?: ProfileFormData }) {
  const { data } = props;
  const [formData, setFormData] = useState<ProfileFormData>(data ?? MOCKDATA);
  const { first_name, last_name, email, phone, birth_date } = formData;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="mb-8 gap-6 p-6 xl:flex xl:flex-row">
      <div className="daisy-card hidden w-104 bg-base-100 shadow-sm xl:block">
        <MenuAccount className="daisy-card-body p-4" isCompact />
      </div>
      <div className="w-full">
        <ProfileHeader isEdit />
        <div className="mb-6">
          <form
            className="grid w-full gap-2 gap-x-8 rounded-lg bg-base-100 px-8 py-8 shadow-sm lg:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              //   TODO: edit api
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
                value={first_name}
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
                value={last_name}
                name="last_name"
                onChange={handleOnChange}
              />
            </fieldset>

            <fieldset className="daisy-fieldset">
              <legend className="daisy-fieldset-legend pb-0">Email</legend>
              <input
                type="email"
                className="daisy-input w-full"
                placeholder="Email"
                value={email}
                name="email"
                onChange={handleOnChange}
              />
            </fieldset>

            <fieldset className="daisy-fieldset">
              <legend className="daisy-fieldset-legend pb-0">Phone</legend>
              <input
                type="tel"
                className="daisy-input w-full"
                placeholder="Phone"
                value={phone}
                name="phone"
                onChange={handleOnChange}
              />
            </fieldset>

            <fieldset className="daisy-fieldset">
              <legend className="daisy-fieldset-legend pb-0">Birth Date</legend>

              <input
                type="date"
                className="daisy-input w-full"
                placeholder="Birth Date"
                value={birth_date}
                name="birth_date"
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
    </section>
  );
}
