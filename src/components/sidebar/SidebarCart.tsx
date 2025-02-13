import BasketOutline from "../../../public/icons/basket-outline";
import SidebarLayout from "@/components/sidebar/SidebarLayout";
import { useSidebar } from "@/components/sidebar/SidebarProvider";
import { ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProductCart } from "@/api/product";
import CartItem from "./CartItem";

export default function SidebarCart(props: { children: ReactNode }) {
  const { children } = props;

  const { isOpen, toggle } = useSidebar();

  const { data } = useQuery({
    queryKey: ["cart"],
    queryFn: getProductCart,
  });

  const sum = data?.reduce((prev, { price }) => prev + price, 0) ?? 0;
  const cartNum = data?.length ?? 0;

  return (
    <SidebarLayout
      isOpen={isOpen === "cart"}
      toggle={() => toggle("cart")}
      position="right"
      className="flex flex-col justify-between gap-2 p-4"
      isHiddenLarge={false}
      side={
        <>
          <div className="flex items-center pb-2 border-b-1">
            <BasketOutline
              width={24}
              height={24}
              className="p-1.5 box-content"
            />
            <span>{`${cartNum} item${cartNum <= 0 ? "" : "s"}`}</span>
          </div>

          <ul className="flex-1 daisy-list">
            {data?.map((product, index) => {
              return (
                <li
                  key={`card-cart-${index}`}
                  className="daisy-list-row grid-cols-none px-0"
                >
                  <CartItem
                    data={product}
                    onIncrement={() => {}}
                    onDecrement={() => {}}
                    onRemove={() => {}}
                  />
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
        </>
      }
    >
      {children}
    </SidebarLayout>
  );
}
