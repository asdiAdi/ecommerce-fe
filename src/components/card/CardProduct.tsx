import Image from "next/image";
import { twSizeToPx } from "@/utils/common";
import TableIcon from "@/components/core/TableIcon";
import { ProductType } from "@/schemas/ProductSchema";
import { truncate } from "@/utils/string";
import { UpdateCartType } from "@/schemas/CartSchema";
import SwapIcons from "@/components/core/SwapIcons";

type CardProductProps = {
  product: ProductType;
  onAdd: (arg: UpdateCartType) => void;
  isWishlist: boolean;
  onAddWishlist: (asin: string) => void;
  onDeleteWishlist: () => void;
};

export default function CardProduct(props: CardProductProps) {
  const {
    product,
    onAdd,
    isWishlist = false,
    onAddWishlist,
    onDeleteWishlist,
  } = props;

  const { asin, img_url, title, stars, price } = product;

  return (
    <div className="daisy-card h-100 w-full bg-base-100 shadow-sm">
      <figure className="min-h-53 px-10 pt-10">
        <Image
          src={img_url.split("._AC_")[0] + "._AC_UL320_.jpg"}
          width={twSizeToPx(36)}
          height={twSizeToPx(36)}
          alt="Movie"
          className="rounded-lg"
          style={{ height: twSizeToPx(36), width: "auto" }}
        />

        <SwapIcons
          nameOff="heart-outline"
          nameOn="heart-filled"
          className="absolute top-4 right-4 rounded-full text-secondary"
          inputProps={{
            onClick: () => {
              if (isWishlist) {
                onDeleteWishlist();
              } else {
                onAddWishlist(asin);
              }
            },
            checked: isWishlist,
            readOnly: true,
          }}
          size="xl"
        />
        {/*{isWishlist && (*/}
        {/*  <ButtonIcon*/}
        {/*    name="heart-filled"*/}
        {/*    className="absolute top-4 right-4 text-secondary"*/}
        {/*    outline={true}*/}
        {/*  />*/}
        {/*)}*/}
        {/*{!isWishlist && (*/}
        {/*  <ButtonIcon*/}
        {/*    name="heart-outline"*/}
        {/*    className="absolute top-4 right-4 text-secondary"*/}
        {/*    outline={true}*/}
        {/*  />*/}
        {/*)}*/}
      </figure>

      <div className="daisy-divider mt-8 mb-4 opacity-30" />
      <div className="daisy-card-body flex w-full flex-row justify-between pt-0">
        <div>
          <h2 className="daisy-card-title">
            <div className="daisy-tooltip cursor-pointer" data-tip={title}>
              {truncate(title)}
            </div>
          </h2>

          <div className="daisy-rating-xs daisy-rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <input
                key={`value-${asin}-${value}`}
                type="radio"
                name={asin}
                className="daisy-mask bg-orange-400 daisy-mask-star-2"
                aria-label={`${value} star`}
                defaultChecked={value === Math.ceil(stars)}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="py-2 text-lg text-primary">{`$${price}`}</div>
            {/*<div className="py-2 line-through opacity-60">$400</div>*/}
          </div>
        </div>

        <button
          className="daisy-btn mb-2 h-fit w-fit self-end p-0 daisy-btn-outline daisy-btn-primary"
          onClick={() =>
            onAdd({ quantity: 1, product_asin: asin, operation: "add" })
          }
        >
          <TableIcon name="plus" />
        </button>
      </div>
    </div>
  );
}
