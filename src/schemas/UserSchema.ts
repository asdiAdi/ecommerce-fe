import { z } from "zod";

export const UserSchema = z.object({
  username: z.string(),
  avatar: z.string().nullable().optional(),
  first_name: z.string().nullable().optional(),
  last_name: z.string().nullable().optional(),
  email: z.string().email().nullable().optional(),
  phone: z.string().nullable().optional(),
  birthdate: z.string().nullable().optional(),
});

export const UpdateUserSchema = UserSchema.omit({ username: true });

export type UserType = z.infer<typeof UserSchema>;

export type UpdateUserType = z.infer<typeof UpdateUserSchema>;
