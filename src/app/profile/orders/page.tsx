import ProfileHeader from "../_components/ProfileHeader";
import ButtonIcon from "@/components/core/ButtonIcon";
import Link from "next/link";

const MOCKDATA: OrderType = {
  id: "ssdfsdfsfsfesf",
  status: "cancelled",
  delivery_date: "2020-03-02",
  total_amount: 350,
};
function OrderCard(props: { data: OrderType }) {
  const { data } = props;

  const { id, status, delivery_date, total_amount } = data;

  return (
    <div className="daisy-card w-full bg-base-100 shadow-sm">
      <div className="daisy-card-content flex flex-row justify-between p-4">
        <div>{id}</div>
        {/* TODO: Proper Badge Status */}
        <div>
          {/*<BadgeStatus status={status} color={color} />*/}
          {status}
        </div>
        <div>{delivery_date}</div>
        <div>{total_amount}</div>

        <div className="opacity-50">
          <Link href={`/profile/orders/${id}`}>
            <ButtonIcon
              name="arrow-right"
              size="xs"
              className="mr-2 bg-base-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function OrdersPage(props: { data: OrderType[] }) {
  const { data = [MOCKDATA] } = props;

  return (
    <div className="w-full">
      <ProfileHeader iconName="credit-card-outline" title="My Orders" />

      <div className="flex w-full flex-col gap-4 rounded-lg">
        {data.map((card, index) => (
          <OrderCard key={`order-card-${index}`} data={card} />
        ))}
      </div>
    </div>
  );
}
