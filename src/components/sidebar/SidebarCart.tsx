import SidebarContent, { SidebarContentProps } from "./SidebarContent";
import { cx } from "@/utils/common";
import TableIcon from "@/components/core/TableIcon";
import CardProductCart from "@/components/card/CardProductCart";
import BasketOutline from "../../../public/icons/basket-outline";
import { getTest } from "@/api/product";

const data: CartType[] = [
  {
    img_url: "...",
    title: "Test A",
    price: 226,
    quantity: 4,
  },
  {
    img_url: "...",
    title: "Test B",
    price: 226,
    quantity: 4,
  },
  {
    img_url: "...",
    title: "Test C",
    price: 226,
    quantity: 4,
  },
];

export default function SidebarCart(props: SidebarContentProps) {
  const { className, ...rest } = props;

  // const x = await getTest();

  // console.log(x);

  const sum = data.reduce((prev, { price }) => prev + price, 0);

  return (
    <SidebarContent
      className={cx("flex flex-col justify-between gap-2", className)}
      {...rest}
    >
      <div className="flex items-center pb-2 border-b-1">
        {/*<TableIcon name="basket-outline" size="sm" />*/}
        <BasketOutline width={24} height={24} className="p-1.5 box-content" />
        <span>{data.length} item</span>
      </div>

      <ul className="flex-1">
        {data.map((product) => {
          const { img_url, title, price, quantity } = product;
          return (
            <li key={`card-${title}`} className="">
              {/*  Card Herre*/}

              <CardProductCart></CardProductCart>
            </li>
          );
        })}
      </ul>

      <button className="bottom-0 w-full daisy-btn daisy-btn-primary">
        {`Checkout Now ($${sum})`}
      </button>
      <button className="bottom-0 w-full daisy-btn daisy-btn-outline">
        View Cart
      </button>
    </SidebarContent>
  );
}
