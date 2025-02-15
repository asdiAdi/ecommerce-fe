"use client";
import { useParams } from "next/navigation";
import ProfileHeader from "@/app/profile/_components/ProfileHeader";
import TableIcon from "@/components/core/TableIcon";
import Image from "next/image";

export default function OrderId() {
  const router = useParams();

  console.log(router);
  return (
    <div className="w-full">
      <ProfileHeader
        iconName="credit-card-outline"
        title="Order Details"
        link={{ href: "/profile/orders", label: "Back" }}
      />

      <div className="mb-8 flex flex-col items-center gap-8 rounded-lg bg-base-100 p-8 shadow-sm sm:items-start">
        <ul className="daisy-steps daisy-steps-vertical text-primary sm:daisy-steps-horizontal sm:w-full">
          <li className="daisy-step daisy-step-neutral">
            <span className="daisy-step-icon">
              <TableIcon name="package" />
            </span>
          </li>
          <li className="daisy-step daisy-step-neutral">
            <span className="daisy-step-icon">
              <TableIcon name="truck-filled" />
            </span>
          </li>
          <li className="daisy-step">
            <span className="daisy-step-icon">
              <TableIcon name="package" />
            </span>
          </li>
        </ul>

        <div className="=w-fit daisy-badge-soft daisy-badge rounded-full daisy-badge-secondary sm:self-end">
          Estimated Delivery Date <span className="font-semibold">N/A</span>
        </div>
      </div>

      <div className="mb-8 flex flex-col overflow-hidden rounded-lg bg-base-100 p-0 shadow-sm">
        <div className="flex flex-row justify-between bg-neutral-content p-4">
          <div>
            <span className="opacity-60">Order ID:</span>{" "}
            <span>sdfFSDF-DSFSD-SDFS</span>
          </div>
          <div>
            <span className="opacity-60">Placed on:</span>{" "}
            <span>10 Nov, 2022</span>
          </div>
          <div>
            <span className="opacity-60">Delivered on:</span> <span>None</span>
          </div>
        </div>

        <ul className="daisy-list rounded-box bg-base-100 shadow-md">
          <li className="daisy-list-row">
            <div>
              <Image
                src="https://m.media-amazon.com/images/I/71C3lbbeLsL._AC_UL320_.jpg"
                width={40}
                height={40}
                alt="Picture of the author"
                className="size-10 rounded-box"
              />
            </div>
            <div>
              <div>Amazon Echo</div>
              <div className="text-xs font-semibold uppercase opacity-60">
                $226.00 x 4
              </div>
            </div>

            <div className="daisy-list-col-grow place-self-center">
              Description Here
            </div>
            <button className="daisy-btn place-self-center daisy-btn-secondary daisy-btn-soft">
              Write A Review
            </button>
          </li>
        </ul>
      </div>

      <div className="mb-8 flex flex-col overflow-hidden rounded-lg bg-base-100 p-4 shadow-sm">
        <div className="mb-4 font-semibold">Shipping Address</div>
        <div>Pasig, Metro Manila</div>
      </div>

      <div className="flex flex-col overflow-hidden rounded-lg bg-base-100 p-4 shadow-sm">
        <div className="mb-4 font-semibold">Total Summary</div>

        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>$350.00</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping Fee:</span>
          <span>$0.00</span>
        </div>

        <div className="flex justify-between">
          <span>Discount:</span>
          <span>$0.00</span>
        </div>

        <div className="daisy-divider my-1"></div>

        <div className="flex justify-between pb-2">
          <span className="font-semibold">Total:</span>
          <span>$350.00</span>
        </div>

        <div>Paid by Credit/Debit Card</div>
      </div>
    </div>
  );
}
