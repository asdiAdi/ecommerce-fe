import { z } from "zod";

export const OrderItemSchema = z.object({
  product_asin: z.string(),
  quantity: z.coerce.number(),
  price: z.coerce.number(),
});

export const OrderSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  total_price: z.coerce.number(),
  status: z.enum(["PENDING", "PROCESSING", "DELIVERED", "CANCELED"]),
  order_items: OrderItemSchema.array(),
});
