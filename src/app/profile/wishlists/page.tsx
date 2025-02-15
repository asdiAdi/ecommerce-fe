import ProfileHeader from "../_components/ProfileHeader";
import Image from "next/image";
import { twSizeToPx } from "@/utils/common";
import TableIcon from "@/components/core/TableIcon";

function ProductCard() {
  return (
    <div className="daisy-card w-full bg-base-100 shadow-sm">
      <figure className="px-10 pt-10">
        <Image
          src="https://m.media-amazon.com/images/I/61c5rSxwP0L._AC_UL320_.jpg"
          width={twSizeToPx(36)}
          height={twSizeToPx(36)}
          alt="Movie"
          className="rounded-lg"
        />
      </figure>

      <div className="daisy-divider mt-8 mb-4 opacity-30" />
      <div className="daisy-card-body flex w-full flex-row justify-between pt-0">
        <div>
          <h2 className="daisy-card-title">Card Title</h2>
          <div className="daisy-rating-xs daisy-rating">
            <input
              type="radio"
              name="rating-2"
              className="daisy-mask bg-orange-400 daisy-mask-star-2"
              aria-label="1 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="daisy-mask bg-orange-400 daisy-mask-star-2"
              aria-label="2 star"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="daisy-mask bg-orange-400 daisy-mask-star-2"
              aria-label="3 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="daisy-mask bg-orange-400 daisy-mask-star-2"
              aria-label="4 star"
            />
            <input
              type="radio"
              name="rating-2"
              className="daisy-mask bg-orange-400 daisy-mask-star-2"
              aria-label="5 star"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="py-2 text-lg text-primary">$400</div>
            <div className="py-2 line-through opacity-60">$400</div>
          </div>
        </div>

        <button className="daisy-btn mb-2 h-fit w-fit self-end p-0 daisy-btn-outline daisy-btn-primary">
          <TableIcon name="plus" />
        </button>
      </div>
    </div>
  );
}

export default function WishlistsPage() {
  return (
    <div className="w-full">
      <ProfileHeader iconName="heart-filled" title="My Wish List" />

      <div className="grid w-full place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => {
          return <ProductCard key={index} />;
        })}
      </div>
    </div>
  );
}
