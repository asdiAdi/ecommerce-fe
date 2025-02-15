import ProfileHeader from "../_components/ProfileHeader";
import ButtonIcon from "@/components/core/ButtonIcon";
import Link from "next/link";

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

function AddressCard(props: { data: AddressType }) {
  const { data } = props;

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
  } = data;

  return (
    <div className="daisy-collapse w-full bg-base-100 shadow-sm">
      <input type="checkbox" className="w-[calc(100%-100px)]!" />
      <div className="daisy-collapse-title flex flex-row justify-between pb-0">
        <div className="font-semibold">{name}</div>

        <div>{phone_number}</div>
        <div className="opacity-50">
          <Link href={`/profile/addresses/edit`}>
            <ButtonIcon name="edit" size="xs" className="mr-2 bg-base-300" />
          </Link>
          <ButtonIcon name="trash-filled" size="xs" className="bg-base-300" />
        </div>
      </div>

      <div className="daisy-collapse-content grid w-[calc(100%-160px)] grid-cols-2">
        <div className="mb-4">
          <label className="daisy-label text-sm">Address Line 1</label>
          <p className="ml-2">{address_line_1}</p>
        </div>

        <div className="mb-4">
          <label className="daisy-label text-sm">Address Line 2</label>
          <p className="ml-2">{address_line_2 ?? "N/A"}</p>
        </div>

        <div className="mb-4">
          <label className="daisy-label text-sm">City</label>
          <p className="ml-2">{city}</p>
        </div>

        <div className="mb-4">
          <label className="daisy-label text-sm">State</label>
          <p className="ml-2">{state}</p>
        </div>

        <div className="mb-4">
          <label className="daisy-label text-sm">Zip Code</label>
          <p className="ml-2">{zip_code}</p>
        </div>

        <div className="mb-4">
          <label className="daisy-label text-sm">Country</label>
          <p className="ml-2">{country}</p>
        </div>

        <div className="mb-4">
          <label className="daisy-label text-sm">Description</label>
          <p className="ml-2">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Addresses(props: { data: AddressType[] }) {
  const { data = [MOCKDATA] } = props;

  return (
    <div className="w-full">
      <ProfileHeader
        iconName="map-pin-outline"
        title="My Addresses"
        link={{ href: "/profile/addresses/add", label: "Add Address" }}
      />

      <div className="flex w-full flex-col gap-4 rounded-lg">
        {data.map((address, index) => (
          <AddressCard key={`address-card-${index}`} data={address} />
        ))}
      </div>
    </div>
  );
}
