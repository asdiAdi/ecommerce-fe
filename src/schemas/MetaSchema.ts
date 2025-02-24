import { z } from "zod";

export const MetaSchema = z.object({
  total_pages: z.coerce.number(),
  total_rows: z.coerce.number(),
  order: z.enum(["ASC", "DESC"]),
  order_by: z.string(),
  limit: z.coerce.number(),
  offset: z.coerce.number(),
});

export const MetaQuerySchema = z.object({
  order: z.enum(["ASC", "DESC"]).optional(),
  order_by: z.string().optional(),
  limit: z.coerce.number().optional(),
  offset: z.coerce.number().optional(),
});

export const PaginatedResponseSchema = <T extends z.ZodTypeAny>(schema: T) =>
  z.object({
    data: schema,
    meta: MetaSchema,
  });

export type MetaType = z.infer<typeof MetaSchema>;
export type MetaQueryType = z.infer<typeof MetaQuerySchema>;
export type ExtendedMetaQueryType<T extends MetaQueryType = MetaQueryType> = T;
