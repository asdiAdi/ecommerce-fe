import ProfileHeader from "../_components/ProfileHeader";
import ButtonIcon from "@/components/core/ButtonIcon";
import Link from "next/link";
import TableIcon from "@/components/core/TableIcon";

const MOCKDATA: PaymentMethodType[] = [
  {
    name: "Bahay",
    card_type: "paypal",
    card_number: "0123456789",
    cvc: "1",
    expiry_date: "2020-03-02",
  },
  {
    name: "Kubo",
    card_type: "visa",
    card_number: "0123456789",
    cvc: "1",
    expiry_date: "2020-03-02",
  },
];

function PaymentCard(props: { data: PaymentMethodType }) {
  const { data } = props;

  const { name, card_type, card_number, expiry_date } = data;

  return (
    <div className="daisy-card w-full bg-base-100 shadow-sm">
      <div className="daisy-card-content flex flex-row justify-between p-4">
        <div className="flex items-center justify-between gap-2">
          {/*  TODO: proper colored icons */}
          <TableIcon name={card_type} />
          <span>{name}</span>
        </div>
        <div>{card_number}</div>
        <div>{expiry_date}</div>

        <div className="opacity-50">
          <Link href={`/profile/payments/edit`}>
            <ButtonIcon name="edit" size="xs" className="mr-2 bg-base-300" />
          </Link>
          <ButtonIcon name="trash-filled" size="xs" className="bg-base-300" />
        </div>
      </div>
    </div>
  );
}

export default function Payments(props: { data: PaymentMethodType[] }) {
  const { data = MOCKDATA } = props;

  return (
    <div className="w-full">
      <ProfileHeader
        iconName="credit-card-outline"
        title="Payment Methods"
        link={{ href: "/profile/payments/add", label: "Add Payment Method" }}
      />

      <div className="flex w-full flex-col gap-4 rounded-lg">
        {data.map((card, index) => (
          <PaymentCard key={`address-card-${index}`} data={card} />
        ))}
      </div>
    </div>
  );
}
