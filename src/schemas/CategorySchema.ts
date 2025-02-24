import { z } from "zod";

export const CategorySchema = z.object({
  id: z.string(),
  parent_id: z.string().nullable(),
  name: z.string(),
});

export type CategoryType = z.infer<typeof CategorySchema>;
