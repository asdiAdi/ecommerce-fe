"use client";
import ProfileHeader from "../_components/ProfileHeader";
import ButtonIcon from "@/components/core/ButtonIcon";
import Link from "next/link";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteAddress, getAddresses, postAddress } from "@/api/address";
import { AddressType } from "@/schemas/AddressSchema";
import { toast } from "react-toastify";

function AddressCard(props: {
  data: AddressType;
  onDelete: (id: string) => void;
}) {
  const { data, onDelete } = props;

  const {
    id,
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
      <input type="checkbox" className="w-[calc(100%-140px)]!" />
      <div className="daisy-collapse-title flex flex-row justify-between pb-0">
        <div className="font-semibold">{name}</div>

        <div>{phone_number}</div>
        <div>
          <Link href={`/profile/addresses/edit/${id}`}>
            <ButtonIcon name="edit" size="xs" className="mr-2 bg-base-300" />
          </Link>
          <ButtonIcon
            name="trash-filled"
            size="xs"
            className="bg-base-300"
            onClick={() => onDelete(id)}
          />
        </div>
      </div>

      <div className="daisy-collapse-content grid w-[calc(100%-160px)] grid-cols-2">
        <div className="mb-4">
          <label className="daisy-label text-sm">Address Line 1</label>
          <p className="ml-2">{address_line_1}</p>
        </div>

        <div className="mb-4">
          <label className="daisy-label text-sm">Address Line 2</label>
          <p className="ml-2">{address_line_2 || "N/A"}</p>
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

export default function AddressesPage() {
  const { data, refetch } = useQuery({
    queryKey: ["userAddress"],
    queryFn: () => getAddresses(),
  });

  const { mutate: onDelete } = useMutation({
    mutationFn: deleteAddress,
    onSuccess: () => {
      void refetch();
      toast.success("Deleted Address Successfully!");
    },
  });

  return (
    <div className="w-full">
      <ProfileHeader
        iconName="map-pin-outline"
        title="My Addresses"
        link={{ href: "/profile/addresses/add", label: "Add Address" }}
      />

      <div className="flex w-full flex-col gap-4 rounded-lg">
        {data?.data?.map((address, index) => (
          <AddressCard
            key={`address-card-${index}`}
            data={address}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
