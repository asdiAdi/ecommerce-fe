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
          <div className="flex items-center border-b-1 pb-2">
            <BasketOutline
              width={24}
              height={24}
              className="box-content p-1.5"
            />
            <span>{`${cartNum} item${cartNum <= 0 ? "" : "s"}`}</span>
          </div>

          <ul className="daisy-list flex-1">
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

          <button className="daisy-btn bottom-0 w-full daisy-btn-primary">
            {`Checkout Now ($${sum})`}
          </button>
          <button className="daisy-btn bottom-0 w-full daisy-btn-outline">
            View Cart
          </button>
        </>
      }
    >
      {children}
    </SidebarLayout>
  );
}
