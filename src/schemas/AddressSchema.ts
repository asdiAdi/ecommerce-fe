import { z } from "zod";

export const AddressSchema = z.object({
  id: z.string(),
  name: z.string(),
  address_line_1: z.string(),
  address_line_2: z.string().optional(),
  city: z.string(),
  state: z.string(),
  zip_code: z.string(),
  country: z.string(),
  phone_number: z.string(),
  description: z.string().optional(),
});

export const CreateAddressSchema = AddressSchema.omit({ id: true });
export const UpdateAddressSchema = AddressSchema.omit({ id: true });

export type AddressType = z.infer<typeof AddressSchema>;

export type CreateAddressType = z.infer<typeof CreateAddressSchema>;
export type UpdateAddressType = z.infer<typeof UpdateAddressSchema>;
