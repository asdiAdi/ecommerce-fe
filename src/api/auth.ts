import { apiRequest } from "@/utils/crud";
import {
  UpdateUserSchema,
  UpdateUserType,
  UserSchema,
} from "@/schemas/UserSchema";
import { LoginSchema, LoginType, TokenSchema } from "@/schemas/LoginSchema";

export const postSignup = async (payload: LoginType) => {
  const validatedPayload = LoginSchema.parse(payload);
  const res = await apiRequest("POST", "/auth/signup", validatedPayload);

  return TokenSchema.parse(res);
};

export const postLogin = async (payload: LoginType) => {
  const validatedPayload = LoginSchema.parse(payload);
  const res = await apiRequest("POST", "/auth/login", validatedPayload);

  return TokenSchema.parse(res);
};

export const getUser = async () => {
  const res = await apiRequest("GET", "/user");
  return UserSchema.parse(res);
};

export const putUser = async (payload: UpdateUserType) => {
  const validatedPayload = UpdateUserSchema.parse(payload);
  return await apiRequest("PUT", "/user", validatedPayload);
};
