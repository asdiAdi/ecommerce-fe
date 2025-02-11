"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import SidebarTheme from "@/components/sidebar/SidebarTheme";
import SidebarCategory from "@/components/sidebar/SidebarCategory";
import SidebarCart from "@/components/sidebar/SidebarCart";

export type SidebarOpenType = "category" | "account" | "theme" | "cart" | null;
type SidebarContextType = {
  isOpen: SidebarOpenType;
  toggle: (open: SidebarOpenType) => void;
};

const SidebarContext = createContext<SidebarContextType>(null!);

export default function SidebarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState<SidebarOpenType>(null);

  const toggle = (value: SidebarOpenType) => {
    setIsOpen(value === isOpen ? null : value);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggle }}>
      <SidebarTheme>
        <SidebarCategory>
          <SidebarCart>{children}</SidebarCart>
        </SidebarCategory>
      </SidebarTheme>
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => useContext(SidebarContext);
