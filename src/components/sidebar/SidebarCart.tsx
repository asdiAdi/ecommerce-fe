import BasketOutline from "../../../public/icons/basket-outline";
import SidebarLayout from "@/components/sidebar/SidebarLayout";
import { useSidebar } from "@/components/sidebar/SidebarProvider";
import { ReactNode } from "react";
import { useMutation } from "@tanstack/react-query";
import CartItem from "./CartItem";
import { toggleModal } from "@/utils/modal";
import { postCartItems } from "@/api/cart";
import { useAuthStore } from "@/stores/authStore";

export default function SidebarCart(props: { children: ReactNode }) {
  const { children } = props;

  const { isAuth } = useAuthStore();
  const { isOpen, toggle, refetchCart, cartData } = useSidebar();

  const { mutate } = useMutation({
    mutationFn: postCartItems,
    onSuccess: () => refetchCart(),
  });

  const { data } = cartData || {};

  const sum =
    data?.reduce((prev, { product }) => prev + product.price, 0).toFixed(2) ||
    0;
  const cartNum = data?.length || 0;

  return (
    <SidebarLayout
      isOpen={isOpen === "cart"}
      toggle={() => toggle("cart")}
      position="right"
      className="flex flex-col justify-between gap-2 p-4"
      isHidden={false}
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
                  <CartItem data={product} mutate={mutate} />
                </li>
              );
            })}
          </ul>

          <button
            className="daisy-btn bottom-0 w-full daisy-btn-primary"
            onClick={() => {
              if (isAuth) {
              } else {
                toggleModal("login");
              }
            }}
          >
            {`Checkout Now ($${sum})`}
          </button>
          <button
            className="daisy-btn bottom-0 w-full daisy-btn-outline"
            onClick={() => {
              if (isAuth) {
              } else {
                toggleModal("login");
              }
            }}
          >
            View Cart
          </button>
        </>
      }
    >
      {children}
    </SidebarLayout>
  );
}
