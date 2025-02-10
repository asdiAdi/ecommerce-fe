import { THEMES, CATEGORIES, SUB_CATEGORIES } from "@/constants";

export type Themes = (typeof THEMES)[number];

export type CategoryKey = keyof typeof CATEGORIES;
export type SubCategoryKey = keyof typeof SUB_CATEGORIES;
export type CombinedCategories<T extends SubCategoryKey> = {
  [key in CategoryKey]: Partial<Record<T, string>>;
};
