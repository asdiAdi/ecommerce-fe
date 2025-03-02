import { PaginatedResponseSchema } from "@/schemas/MetaSchema";
import { apiRequest, makeSearchParams } from "@/utils/crud";
import {
  CartSchema,
  UpdateCartSchema,
  UpdateCartType,
} from "@/schemas/CartSchema";

export const getCartItems = async (query?: URLSearchParams) => {
  const res = await apiRequest("GET", makeSearchParams("/cart", query));
  return PaginatedResponseSchema(CartSchema.array()).parse(res);
};

export const postCartItems = async (payload: UpdateCartType) => {
  const validatedPayload = UpdateCartSchema.parse(payload);
  await apiRequest("POST", "/cart", validatedPayload);
  return true;
};
