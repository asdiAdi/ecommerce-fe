"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import SidebarLayout from "./SidebarLayout";

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
      <SidebarLayout>{children}</SidebarLayout>
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => useContext(SidebarContext);
