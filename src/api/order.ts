import { apiRequest, makeSearchParams } from "@/utils/crud";
import { MetaQueryType, PaginatedResponseSchema } from "@/schemas/MetaSchema";
import { OrderSchema } from "@/schemas/OrderSchema";

export const getOrders = async (query: MetaQueryType) => {
  const endpoint = makeSearchParams("/orders", query);
  const res = await apiRequest("GET", endpoint);

  PaginatedResponseSchema(OrderSchema).array().parse(res);
};

export const getOrder = async (id: string) => {
  const res = await apiRequest("GET", `/order/${id}`);
  return OrderSchema.parse(res);
};

export const postOrder = async () => {
  await apiRequest("POST", `/order`);
  return true;
};
