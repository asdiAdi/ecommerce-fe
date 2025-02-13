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
      <div className="col-span-3 row-span-2 place-self-center min-w-fit max-w-20 size-20 flex items-center justify-between ">
        <Image
          src={img_url}
          width={twSizeToPx(20)}
          height={twSizeToPx(20)}
          alt="Movie"
          className="rounded-lg"
        />
      </div>

      <div className="col-span-8 sm:col-start-5 sm:col-span-7">
        <p className="text-nowrap text-ellipsis overflow-hidden">{title}</p>
        <p>{price}</p>
      </div>

      <div className="col-span-3 sm:col-start-5 sm:col-span-7 row-start-2! self-end flex gap-3 items-center">
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
        className="col-start-12 row-span-2 justify-self-end self-center opacity-50"
        onClick={() => onRemove(id)}
      />
    </div>
  );
}
