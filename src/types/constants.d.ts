import { THEMES, CATEGORIES, SUB_CATEGORIES, ORDER_STATUS } from "@/constants";

export type Themes = (typeof THEMES)[number];

export type Color =
  | "primary"
  | "secondary"
  | "accent"
  | "neutral"
  | "base-100"
  | "base-200"
  | "base-300"
  | "info"
  | "success"
  | "warning"
  | "error";

export type ColorContent =
  | "primary-content"
  | "secondary-content"
  | "accent-content"
  | "neutral-content"
  | "base-content"
  | "info-content"
  | "success-content"
  | "warning-content"
  | "error-content";

export type CategoryKey = keyof typeof CATEGORIES;
export type SubCategoryKey = keyof typeof SUB_CATEGORIES;
export type CombinedCategories<T extends SubCategoryKey> = {
  [key in CategoryKey]: Partial<Record<T, string>>;
};

export type OrderStatusKey = keyof typeof ORDER_STATUS;
