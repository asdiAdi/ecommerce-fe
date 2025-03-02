import { apiRequest, makeSearchParams } from "@/utils/crud";
import { ProductSchema } from "@/schemas/ProductSchema";
import { PaginatedResponseSchema } from "@/schemas/MetaSchema";
import { CategorySchema } from "@/schemas/CategorySchema";

export const getProducts = async (query?: URLSearchParams) => {
  const res = await apiRequest("GET", makeSearchParams("/products", query));
  return PaginatedResponseSchema(ProductSchema.array()).parse(res);
};

export const getCategories = async () => {
  const res = await apiRequest("GET", "/categories/arranged");

  return CategorySchema.array().parse(res);
};
