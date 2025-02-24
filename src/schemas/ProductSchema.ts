import { z } from "zod";
import { CategorySchema } from "@/schemas/CategorySchema";

export const ProductSchema = z.object({
  asin: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  img_url: z.string(),
  product_url: z.string(),
  stars: z.coerce.number(),
  reviews: z.coerce.number(),
  price: z.coerce.number(),
  stock: z.coerce.number(),
  is_best_seller: z.coerce.boolean(),
  bought_in_last_month: z.coerce.number(),
  category: CategorySchema,
});

export type ProductType = z.infer<typeof ProductSchema>;
