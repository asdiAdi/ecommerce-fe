import { z } from "zod";
import { ProductSchema } from "@/schemas/ProductSchema";

export const WishlistSchema = z.object({
  id: z.string(),
  product_asin: z.string(),
  product: ProductSchema,
});

export const PostWishlistSchema = WishlistSchema.pick({ product_asin: true });

export type WishlistType = z.infer<typeof WishlistSchema>;

export type PostWishlistType = z.infer<typeof PostWishlistSchema>;
