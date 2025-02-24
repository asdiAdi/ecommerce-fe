type Size = "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl";

type Dimension = {
  width: number;
  height: number;
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
