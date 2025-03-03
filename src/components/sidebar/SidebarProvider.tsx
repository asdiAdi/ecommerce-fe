"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import SidebarTheme from "@/components/sidebar/SidebarTheme";
import SidebarCategory from "@/components/sidebar/SidebarCategory";
import SidebarCart from "@/components/sidebar/SidebarCart";
import SidebarAccount from "@/components/sidebar/SidebarAccount";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getCartItems } from "@/api/cart";
import { PaginatedType } from "@/schemas/MetaSchema";
import { CartType } from "@/schemas/CartSchema";
import useCategoryStore from "@/stores/categoryStore";
import { useAuthStore } from "@/stores/authStore";

export type SidebarOpenType = "category" | "account" | "theme" | "cart" | null;
type SidebarContextType = {
  isOpen: SidebarOpenType;
  toggle: (open: SidebarOpenType) => void;
  refetchCart: () => void;
  cartData?: PaginatedType<CartType[]>;
};

const SidebarContext = createContext<SidebarContextType>(null!);

export default function SidebarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState<SidebarOpenType>(null);

  const { isAuth } = useAuthStore();

  const { data: cartData, refetch: refetchCart } = useQuery({
    queryKey: ["cart", isAuth],
    queryFn: () => getCartItems(),
    placeholderData: keepPreviousData,
  });

  // run this once
  const reloadCategories = useCategoryStore((state) => state.reloadCategories);

  useEffect(() => {
    void reloadCategories();
  }, [reloadCategories]);

  const toggle = (value: SidebarOpenType) => {
    setIsOpen(value === isOpen ? null : value);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggle, cartData, refetchCart }}>
      <SidebarTheme>
        <SidebarCategory>
          <SidebarAccount>
            <SidebarCart>{children}</SidebarCart>
          </SidebarAccount>
        </SidebarCategory>
      </SidebarTheme>
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => useContext(SidebarContext);
