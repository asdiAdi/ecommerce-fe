import Image from "next/image";
import TableIcon from "@/components/core/TableIcon";
import ButtonIcon from "@/components/core/ButtonIcon";
import Avatar from "../../../public/placeholder/Avatar.png";
import MenuAccount from "@/components/menu/MenuAccount";

export default function Test() {
  return (
    <section className="p-6 mb-8 xl:flex xl:flex-row gap-6">
      <div className="hidden xl:block daisy-card shadow-sm bg-base-100 w-104">
        <MenuAccount className="daisy-card-body p-4" isCompact />
      </div>
      <div>
        {/*MY PROFILE*/}
        <div className="mb-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="bg-base-300 w-fit h-fit rounded-lg">
              <TableIcon name="user-filled" className="text-secondary" />
            </div>
            <h2 className="text-xl font-bold">My Profile</h2>
          </div>
          <div className="flex items-center gap-4">
            <ButtonIcon name="menu-2" />
            <button className="hidden sm:block daisy-btn daisy-btn-secondary daisy-btn-soft">
              Edit Profile
            </button>
          </div>
        </div>
        <button className="mb-6 sm:hidden daisy-btn daisy-btn-secondary daisy-btn-soft w-full">
          Edit Profile
        </button>
        {/*END MY PROFILE*/}
        <div className="mb-6 grid grid-cols-2 grid-rows-2 lg:grid-cols-4 xl:grid-cols-8 xl:grid-rows-1 gap-6 w-full">
          {/* USER CARD */}
          <div className="py-4 px-8 col-span-2 lg:row-span-2 xl:col-span-4 xl:row-span-1 daisy-card daisy-card-md daisy-card-side  w-full bg-base-100  shadow-sm">
            <figure className="daisy-avatar">
              <div className="w-24 h-fit rounded-full">
                <Image src={Avatar} alt="Movie" />
              </div>
            </figure>
            <div className="daisy-card-body place-self-center">
              <h2 className="daisy-card-title">Nick Dubuque</h2>
              <p>
                <span className="opacity-50">Balance: </span>
                <span className="text-secondary opacity-100">$5,000.00</span>
              </p>
            </div>

            {/* TODO: customer roles */}
            <p className="place-self-center uppercase font-bold opacity-50">
              Silver User
            </p>
          </div>
          {/* END USER CARD */}

          {/* ORDER GRID */}
          {[
            { label: "All Orders", value: "16" },
            { label: "Awaiting Payments", value: "02" },
            { label: "Awaiting Shipment", value: "00" },
            { label: "Awaiting Delivery", value: "01" },
          ].map(({ label, value }, index) => (
            <div
              key={`account-grid-${index}`}
              className="daisy-card bg-base-100 daisy-card-lg shadow-sm text-center"
            >
              <div className="daisy-card-body items-center">
                <div className="text-2xl text-secondary font-bold">{value}</div>
                <div className="opacity-50">{label}</div>
              </div>
            </div>
          ))}
          {/* END ORDER GRID */}
        </div>
        {/* PRIVATE INFO CARD */}
        <div className="daisy-card bg-base-100 daisy-card-lg shadow-sm text-center">
          <ul className="daisy-card-body justify-between lg:flex-row lg:justify-around">
            <li className="flex flex-col gap-1 items-start">
              <span className="opacity-50 font-semibold">First Name</span>
              <span>Nick</span>
            </li>
            <li className="flex flex-col gap-1 items-start">
              <span className="opacity-50 font-semibold">Last Name</span>
              <span>DuBuque</span>
            </li>
            <li className="flex flex-col gap-1 items-start">
              <span className="opacity-50 font-semibold">Email Name</span>
              <span>Jayden.Gislason78@gmail.com</span>
            </li>
            <li className="flex flex-col gap-1 items-start">
              <span className="opacity-50 font-semibold">Phone</span>
              <span>(445) 653-3771 x985</span>
            </li>
            <li className="flex flex-col gap-1 items-start">
              <span className="opacity-50 font-semibold">Birth date</span>
              <span>25 Apr, 1996</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
