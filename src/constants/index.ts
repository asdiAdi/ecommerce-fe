import {
  CategoryKey,
  Color,
  ColorContent,
  CombinedCategories,
  OrderStatusKey,
  SubCategoryKey,
} from "@/types/constants";

export const THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
  "caramellatte",
  "abyss",
  "silk",
];

// code : label
export const CATEGORIES = {
  fashion: "Fashion",
  electronics: "Electronics",
  bikes: "Bikes",
  home_garden: "Home garden",
  gifts: "Gifts",
  music: "Music",
  health_beauty: "Health and Beauty",
};
export const CATEGORY_KEYS = Object.keys(CATEGORIES) as CategoryKey[];

export const SUB_CATEGORIES = {
  sub_1: "Sub 1",
  sub_2: "Sub 2",
  sub_3: "Sub 3",
};
export const SUB_CATEGORY_KEYS = Object.keys(
  SUB_CATEGORIES,
) as SubCategoryKey[];

//main code : sub code : label
export const COMBINED_CATEGORIES: CombinedCategories<SubCategoryKey> = {
  fashion: { sub_1: "Sub1", sub_2: "s", sub_3: "4" },
  electronics: { sub_1: "Sub1" },
  bikes: { sub_1: "Sub1" },
  home_garden: { sub_1: "Sub1" },
  gifts: { sub_1: "Sub1" },
  music: { sub_1: "Sub1" },
  health_beauty: { sub_1: "Sub1" },
};

export const ORDER_STATUS = {
  pending: "Pending",
  processing: "Processing",
  delivered: "Delivered",
  canceled: "Canceled",
};

export const ORDER_STATUS_COLOR: Record<OrderStatusKey, Color | ColorContent> =
  {
    pending: "neutral-content",
    processing: "primary",
    delivered: "success",
    canceled: "error",
  };
