import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

type CardProductCartProps = ComponentPropsWithoutRef<"div"> & {
  data: CartType;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
  onRemove: (id: string) => void;
};

export default function CardProductCart(props: CardProductCartProps) {
  const { data, onIncrement, onDecrement, onRemove } = props;
  const { id, img_url, quantity, price, title } = data;

  return (
    <div className="daisy-card daisy-card-side bg-base-100 shadow-sm">
      <figure>
        <Image
          src={img_url}
          width={75}
          height={75}
          alt="Movie"
          className="rounded-lg"
          style={{
            width: "75px",
            height: "75px",
          }}
        />
      </figure>
      <div className="daisy-card-body">
        <h2 className="line-clamp-1">{title}</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="daisy-card-actions justify-end">
          <button className="daisy-btn daisy-btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
}
