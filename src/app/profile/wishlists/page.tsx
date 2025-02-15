import ProfileHeader from "../_components/ProfileHeader";
import CardProduct from "@/components/card/CardProduct";

export default function WishlistsPage() {
  return (
    <div className="w-full">
      <ProfileHeader iconName="heart-filled" title="My Wish List" />

      <div className="grid w-full place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => {
          return <CardProduct key={index} />;
        })}
      </div>
    </div>
  );
}
