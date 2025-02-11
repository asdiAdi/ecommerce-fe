type Size = "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl";

type Dimension = {
  width: number;
  height: number;
};

type ProductType = {
  asin: string;
  title: string;
  description: string;
  img_url: string;
  product_url: string;
  stars: number;
  reviews: number;
  price: number;
  is_best_seller: boolean;
  bought_in_last_month: boolean;
  category_name: string;
};

type CartType = Pick<ProductType, "img_url" | "title" | "price" | "quantity">;

type SVGProps = SVGProps<SVGSVGElement>;
