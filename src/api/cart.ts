import { MetaQueryType, PaginatedResponseSchema } from "@/schemas/MetaSchema";
import { apiRequest, makeSearchParams } from "@/utils/crud";
import {
  CartSchema,
  UpdateCartSchema,
  UpdateCartType,
} from "@/schemas/CartSchema";

export const getCartItems = async (query: MetaQueryType) => {
  const endpoint = makeSearchParams("/cart", query);
  const res = await apiRequest("GET", endpoint);

  return PaginatedResponseSchema(CartSchema).array().parse(res);
};

export const putCartItems = async (payload: UpdateCartType) => {
  const validatedPayload = UpdateCartSchema.parse(payload);
  await apiRequest("PUT", "/cart", validatedPayload);
  return true;
};
