import { create } from "zustand";
import { getCategories } from "@/api/product";
import { CategoryType } from "@/schemas/CategorySchema";

interface CategoryState {
  categories: CategoryType[];
  reloadCategories: () => Promise<void>;
}

const useCategoryStore = create<CategoryState>((set) => ({
  categories: [], // Load from localStorage initially
  reloadCategories: async () => {
    const storedCategories = localStorage.getItem("categories");
    if (storedCategories) {
      set({ categories: JSON.parse(storedCategories) });
      return;
    }

    const res = await getCategories();
    set({ categories: res });
    localStorage.setItem("categories", JSON.stringify(res)); // Store in localStorage
  },
}));

export default useCategoryStore;
