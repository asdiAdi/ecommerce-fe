import { apiRequest, makeSearchParams, QueryType } from "@/utils/crud";
import {
  AddressSchema,
  CreateAddressSchema,
  CreateAddressType,
  UpdateAddressSchema,
  UpdateAddressType,
} from "@/schemas/AddressSchema";
import { PaginatedResponseSchema } from "@/schemas/MetaSchema";

export const getAddresses = async (query: QueryType) => {
  const endpoint = makeSearchParams("/addresses", query);
  const res = await apiRequest("GET", endpoint);
  return PaginatedResponseSchema(AddressSchema).array().parse(res);
};

export const postAddress = async (payload: CreateAddressType) => {
  const validatedPayload = CreateAddressSchema.parse(payload);
  await apiRequest("POST", "/address/create", validatedPayload);
  return true;
};

export const putAddress = async (id: string, payload: UpdateAddressType) => {
  const validatedPayload = UpdateAddressSchema.parse(payload);
  await apiRequest("PUT", `/address/${id}`, validatedPayload);
  return true;
};

export const deleteAddress = async (id: string) => {
  await apiRequest("DELETE", `/address/${id}`);
  return true;
};
