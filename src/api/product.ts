import { apiRequest, makeSearchParams } from "@/utils/crud";
import { ProductSchema } from "@/schemas/ProductSchema";
import { MetaQueryType, PaginatedResponseSchema } from "@/schemas/MetaSchema";

export const getProducts = async (query: MetaQueryType) => {
  const endpoint = makeSearchParams("/products", query);
  const res = await apiRequest("GET", endpoint);
  return PaginatedResponseSchema(ProductSchema).array().parse(res);
};
