"use client";
import CardProduct from "@/components/card/CardProduct";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/api/product";

export default function Home() {
  const qq = useQuery({
    queryKey: ["users"],
    queryFn: () => getProducts(),
  });

  console.log(qq);
  return (
    <div className="my-10">
      <div className="grid w-full place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => {
          return <CardProduct key={index} />;
        })}
      </div>
    </div>
  );
}
