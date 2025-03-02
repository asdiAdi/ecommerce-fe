"use client";
import ProfileHeader from "../_components/ProfileHeader";
import CardProduct from "@/components/card/CardProduct";
import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { deleteWishlistItem, getWishlistItems } from "@/api/wishlist";
import { toast } from "react-toastify";
import { postCartItems } from "@/api/cart";
import { useSidebar } from "@/components/sidebar/SidebarProvider";

export default function WishlistsPage() {
  const { refetchCart } = useSidebar();

  const {
    data: _data,
    refetch,
    isPending,
    isSuccess,
  } = useQuery({
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

  const { mutate: onDeleteWishlist } = useMutation({
    mutationFn: deleteWishlistItem,
    onSuccess: () => {
      void refetch();
      toast.success("Removed from Wishlist!");
    },
  });

  const { data } = _data || {};

  return (
    <div className="w-full">
      <ProfileHeader iconName="heart-filled" title="My Wish List" />

      <div className="grid w-full place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {!isPending &&
          isSuccess &&
          data?.map((product, index) => {
            return (
              <CardProduct
                key={index}
                product={product}
                onAdd={onAdd}
                isWishlist={true}
                onAddWishlist={() => {}}
                onDeleteWishlist={() => {
                  if (data) {
                    const wishlistId = data.find(
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
    </div>
  );
}
