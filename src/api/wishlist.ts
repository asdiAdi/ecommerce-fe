import { MetaQueryType, PaginatedResponseSchema } from "@/schemas/MetaSchema";
import { apiRequest, makeSearchParams } from "@/utils/crud";
import { ProductSchema } from "@/schemas/ProductSchema";
import {
  PostWishlistSchema,
  WishlistSchema,
  WishlistType,
} from "@/schemas/WishlistSchema";

export const getWishlistItems = async (query?: URLSearchParams) => {
  const endpoint = makeSearchParams("/wishlist", query);
  const res = await apiRequest("GET", endpoint);

  return PaginatedResponseSchema(ProductSchema.array()).parse(res);
};

export const postWishlistItem = async (product_asin: string) => {
  const validatedPayload = PostWishlistSchema.parse({ product_asin });
  await apiRequest("POST", "/wishlist/add", validatedPayload);
  return true;
};

export const deleteWishlistItem = async (product_asin: string) => {
  await apiRequest("DELETE", `/wishlist/product/${product_asin}`);
  return true;
};
