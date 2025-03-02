"use client";
import CardProduct from "@/components/card/CardProduct";
import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { getProducts } from "@/api/product";
import Pagination from "@/components/core/Pagination";
import { useSearchParams } from "next/navigation";
import { postCartItems } from "@/api/cart";
import { useSidebar } from "@/components/sidebar/SidebarProvider";
import { toast } from "react-toastify";
import {
  deleteWishlistItem,
  getWishlistItems,
  postWishlistItem,
} from "@/api/wishlist";

export default function Home() {
  const params = useSearchParams();

  const { refetchCart } = useSidebar();

  const {
    data: dataMeta,
    isPending,
    isSuccess,
  } = useQuery({
    queryKey: ["products", params.toString()],
    queryFn: () => getProducts(params),
    placeholderData: keepPreviousData,
  });

  const { data: dataMetaWishlist, refetch: refetchWishlist } = useQuery({
    queryKey: ["wishlist"],
    queryFn: () => getWishlistItems(),
    placeholderData: keepPreviousData,
  });

  const { mutate: onAdd } = useMutation({
    mutationFn: postCartItems,
    onSuccess: () => {
      refetchCart();
      toast.success("Added to cart!");
    },
  });

  const { mutate: onAddWishlist } = useMutation({
    mutationFn: postWishlistItem,
    onSuccess: () => {
      void refetchWishlist();
      toast.success("Added to Wishlist!");
    },
  });

  const { mutate: onDeleteWishlist } = useMutation({
    mutationFn: deleteWishlistItem,
    onSuccess: () => {
      void refetchWishlist();
      toast.success("Removed from Wishlist!");
    },
  });

  const { data: productData, meta } = dataMeta || {};
  const { data: wishlistData } = dataMetaWishlist || {};

  const wishlistAsin = wishlistData ? wishlistData.map(({ asin }) => asin) : [];

  return (
    <div className="my-10 flex flex-col items-center gap-12">
      <div className="grid w-full place-items-center gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {(isPending || productData?.length === 0) &&
          new Array(20)
            .fill(0)
            .map((_, index) => (
              <div
                key={`product-skeleton-${index}`}
                className="h-100 w-full daisy-skeleton"
              />
            ))}

        {!isPending &&
          isSuccess &&
          productData?.map((product, index) => {
            return (
              <CardProduct
                key={index}
                product={product}
                onAdd={onAdd}
                isWishlist={wishlistAsin.includes(product.asin)}
                onAddWishlist={onAddWishlist}
                onDeleteWishlist={() => {
                  if (wishlistData) {
                    const wishlistId = wishlistData.find(
                      (w) => w.asin === product.asin,
                    );

                    if (wishlistId !== undefined)
                      onDeleteWishlist(wishlistId.asin);
                  }
                }}
              />
            );
          })}
      </div>

      <Pagination
        meta={meta}
        isPending={isPending}
        className="hidden lg:block" //TODO : infinite scroll on mobile
      />
    </div>
  );
}
