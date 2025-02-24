import { z } from "zod";

export const UserSchema = z.object({
  username: z.string(),
  avatar: z.string().nullable(),
  name: z.string().nullable(),
  email: z.string().email().nullable(),
  phone: z.string().nullable(),
  birthdate: z.date().nullable(),
});

export const UpdateUserSchema = UserSchema.omit({ username: true });

export type UserType = z.infer<typeof UserSchema>;

export type UpdateUserType = z.infer<typeof UpdateUserSchema>;
