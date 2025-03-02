import { apiRequest, makeSearchParams } from "@/utils/crud";
import {
  AddressSchema,
  CreateAddressSchema,
  CreateAddressType,
  UpdateAddressSchema,
  UpdateAddressType,
} from "@/schemas/AddressSchema";
import { PaginatedResponseSchema } from "@/schemas/MetaSchema";

export const getAddress = async (id: string) => {
  const res = await apiRequest("GET", `/address/${id}`);
  return AddressSchema.parse(res);
};

export const getAddresses = async (query?: URLSearchParams) => {
  const endpoint = makeSearchParams("/addresses", query);
  const res = await apiRequest("GET", endpoint);
  return PaginatedResponseSchema(AddressSchema.array()).parse(res);
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
