import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";
import { twSizeToPx } from "@/utils/common";
import ButtonIcon from "@/components/core/ButtonIcon";
import { CartType, UpdateCartType } from "@/schemas/CartSchema";

type CartItemProps = ComponentPropsWithoutRef<"div"> & {
  data: CartType;
  mutate: (arg: UpdateCartType) => void;
};

export default function CartItem(props: CartItemProps) {
  const { data, mutate } = props;
  const { product_asin, quantity, product } = data;
  const { img_url, price, title } = product;

  return (
    <div className="grid grid-cols-12 grid-rows-2">
      <div className="col-span-3 row-span-2 flex size-20 max-w-20 min-w-fit items-center justify-center place-self-center overflow-hidden">
        <Image
          src={img_url.split("._AC_")[0] + "._AC_UL320_.jpg"}
          width={twSizeToPx(20)}
          height={twSizeToPx(20)}
          alt="Movie"
          className="rounded-lg"
          style={{ height: twSizeToPx(20), width: "auto" }}
        />
      </div>

      <div className="col-span-8 sm:col-span-7 sm:col-start-5">
        <p className="overflow-hidden text-nowrap text-ellipsis">{title}</p>
        <p>{price}</p>
      </div>

      <div className="col-span-3 row-start-2! flex items-center gap-3 self-end sm:col-span-7 sm:col-start-5">
        <ButtonIcon
          name="plus"
          size="2xs"
          onClick={() =>
            mutate({
              quantity: 1,
              product_asin: product_asin,
              operation: "add",
            })
          }
          className="bg-base-300"
        />
        <p>{quantity}</p>
        <ButtonIcon
          name="minus"
          size="2xs"
          onClick={() =>
            mutate({
              quantity: 1,
              product_asin: product_asin,
              operation: "subtract",
            })
          }
          className="bg-base-300"
        />
      </div>

      <ButtonIcon
        name="x"
        size="2xs"
        className="col-start-12 row-span-2 self-center justify-self-end opacity-50"
        onClick={() =>
          mutate({
            quantity: 100,
            product_asin: product_asin,
            operation: "subtract",
          })
        }
      />
    </div>
  );
}
