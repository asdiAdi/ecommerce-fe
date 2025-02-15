import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";
import { twSizeToPx } from "@/utils/common";
import ButtonIcon from "@/components/core/ButtonIcon";

type CartItemProps = ComponentPropsWithoutRef<"div"> & {
  data: CartType;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
  onRemove: (id: string) => void;
};

export default function CartItem(props: CartItemProps) {
  const { data, onIncrement, onDecrement, onRemove } = props;
  const { id, img_url, quantity, price, title } = data;

  return (
    <div className="grid grid-cols-12 grid-rows-2">
      <div className="col-span-3 row-span-2 flex size-20 max-w-20 min-w-fit items-center justify-between place-self-center">
        <Image
          src={img_url}
          width={twSizeToPx(20)}
          height={twSizeToPx(20)}
          alt="Movie"
          className="rounded-lg"
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
          onClick={() => onIncrement(id)}
          className="bg-base-300"
        />
        <p>{quantity}</p>
        <ButtonIcon
          name="minus"
          size="2xs"
          onClick={() => onDecrement(id)}
          className="bg-base-300"
        />
      </div>

      <ButtonIcon
        name="x"
        size="2xs"
        className="col-start-12 row-span-2 self-center justify-self-end opacity-50"
        onClick={() => onRemove(id)}
      />
    </div>
  );
}
