import Image from "next/image";
import Avatar from "../../../public/placeholder/Avatar.png";
import ProfileHeader from "./_components/ProfileHeader";

export default function Profile() {
  return (
    <div className="w-full">
      <ProfileHeader
        iconName="user-filled"
        title="My Profile"
        link={{ href: "/profile/edit", label: "Edit Profile" }}
      />

      <div className="mb-6 grid w-full grid-cols-2 grid-rows-2 gap-6 lg:grid-cols-4 xl:grid-cols-8 xl:grid-rows-1">
        {/* USER CARD */}
        <div className="daisy-card col-span-2 daisy-card-side w-full bg-base-100 px-8 py-4 shadow-sm daisy-card-md lg:row-span-2 xl:col-span-4 xl:row-span-1">
          <figure className="daisy-avatar">
            <div className="h-fit w-24 rounded-full">
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
          <p className="place-self-center font-bold uppercase opacity-50">
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
            className="daisy-card bg-base-100 text-center shadow-sm daisy-card-lg"
          >
            <div className="daisy-card-body items-center">
              <div className="text-2xl font-bold text-secondary">{value}</div>
              <div className="opacity-50">{label}</div>
            </div>
          </div>
        ))}
        {/* END ORDER GRID */}
      </div>
      {/* PRIVATE INFO CARD */}
      <div className="daisy-card bg-base-100 text-center shadow-sm daisy-card-lg">
        <ul className="daisy-card-body justify-between lg:flex-row lg:justify-around">
          <li className="flex flex-col items-start gap-1">
            <span className="font-semibold opacity-50">First Name</span>
            <span>Nick</span>
          </li>
          <li className="flex flex-col items-start gap-1">
            <span className="font-semibold opacity-50">Last Name</span>
            <span>DuBuque</span>
          </li>
          <li className="flex flex-col items-start gap-1">
            <span className="font-semibold opacity-50">Email Name</span>
            <span>Jayden.Gislason78@gmail.com</span>
          </li>
          <li className="flex flex-col items-start gap-1">
            <span className="font-semibold opacity-50">Phone</span>
            <span>(445) 653-3771 x985</span>
          </li>
          <li className="flex flex-col items-start gap-1">
            <span className="font-semibold opacity-50">Birth date</span>
            <span>25 Apr, 1996</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
