import { z } from "zod";

const BaseCategorySchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type CategoryType = z.infer<typeof BaseCategorySchema> & {
  subcategories?: CategoryType[];
};

export const CategorySchema: z.ZodType<CategoryType> =
  BaseCategorySchema.extend({
    subcategories: z.lazy(() => CategorySchema.array()).optional(),
  });
