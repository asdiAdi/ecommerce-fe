type Size = "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl";

type Dimension = {
  width: number;
  height: number;
};

// {
//   "category_id": "5376f6aa-3093-4619-8451-f4a3e415b5c3"
// }
type ProductType = {
  asin: string;
  title: string;
  description: string;
  img_url: string;
  product_url: string;
  stars: number | string; // should have function to autoconvert all this to num
  reviews: number | string; // TODO: use zod next time?
  price: number | string;
  stock: number | string;
  is_best_seller: boolean;
  bought_in_last_month: boolean;
  category_name: string;
};

type AddressType = {
  name: string;
  address_line_1: string;
  address_line_2?: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
  phone_number: string;
  description?: string;
};

type PaymentMethodType = {
  name: string;
  card_number: string;
  card_type: "mastercard" | "visa" | "paypal";
  cvc: string;
  expiry_date: string;
};

type OrderType = {
  id: string;
  status: OrderStatusKey;
  delivery_date: string;
  total_amount: number;
};

type CartType = Pick<ProductType, "img_url" | "title" | "price"> & {
  id: string;
  quantity: number;
};

type SVGProps = SVGProps<SVGSVGElement>;
