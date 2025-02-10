"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import NavbarLayout from "./NavbarLayout";
import { clsx } from "clsx";

type NavbarContextType = {
  isOpen: boolean;
  toggle: (open?: boolean) => void;
};

const NavbarContext = createContext<NavbarContextType>(null!);

export default function NavbarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (value?: boolean) => setIsOpen(value ?? !isOpen);

  return (
    <NavbarContext.Provider value={{ isOpen, toggle }}>
      <NavbarLayout />
      <main
        className={clsx("transition-all ease-linear sm:mt-14", {
          "mt-14": !isOpen,
          "mt-28": isOpen,
        })}
      >
        {children}
      </main>
    </NavbarContext.Provider>
  );
}

export const useNavbar = () => useContext(NavbarContext);
