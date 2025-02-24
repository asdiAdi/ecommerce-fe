import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export const TokenSchema = z.object({
  access_token: z.string(),
});

export type LoginType = z.infer<typeof LoginSchema>;

export type TokenType = z.infer<typeof TokenSchema>;
