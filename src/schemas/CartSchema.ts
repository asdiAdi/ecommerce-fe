import { z } from "zod";
import { ProductSchema } from "@/schemas/ProductSchema";

export const CartSchema = z.object({
  quantity: z.coerce.number(),
  product_asin: z.string(),
  product: ProductSchema,
});

export const UpdateCartSchema = z.object({
  quantity: z.coerce.number(),
  product_asin: z.string(),
  operation: z.enum(["add", "subtract"]),
});

export type CartSchema = z.infer<typeof CartSchema>;

export type UpdateCartType = z.infer<typeof UpdateCartSchema>;
