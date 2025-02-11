"use client";
import DropdownTheme from "@/components/dropdown/DropdownTheme";
import NavbarSearch from "@/components/navbar/NavbarSearch";
import SwapIcons from "@/components/core/SwapIcons";
import { useSidebar } from "@/components/sidebar/SidebarProvider";
import { useNavbar } from "./NavbarProvider";
import { clsx } from "clsx";
import DropdownCategory from "@/components/dropdown/DropdownCategory";
import { toggleModal } from "@/utils/modal";
import ModalLogin from "@/components/modal/ModalLogin";
import ButtonIcon from "@/components/core/ButtonIcon";

export default function NavbarLayout() {
  const { isOpen: isOpenSidebar, toggle: toggleSidebar } = useSidebar();
  const { isOpen: isOpenNavbar, toggle: toggleNavbar } = useNavbar();

  return (
    <nav
      className={clsx(
        "fixed top-0 w-full flex flex-col justify-between items-center bg-base-200 z-20",
        { "shadow-sm": !isOpenSidebar },
      )}
    >
      <div className="min-h-0 max-h-14 daisy-navbar px-6 max-w-400">
        <div className="daisy-navbar-start gap-1 ">
          <SwapIcons
            nameOff="menu-2"
            nameOn="x"
            className="self-center lg:hidden rounded-lg hover:bg-base-300"
            inputProps={{
              onClick: () => {
                toggleNavbar(false);
                toggleSidebar("category");
              },
              checked: isOpenSidebar === "category",
              readOnly: true,
            }}
          />

          <ButtonIcon name="building-store" size="xl" href="/" />

          <DropdownCategory className="daisy-dropdown-start hidden lg:block" />
        </div>

        <NavbarSearch className="rounded-full hidden sm:inline-flex sm:daisy-navbar-center w-1/2" />

        <div className="daisy-navbar-end gap-1">
          <ButtonIcon
            name="search"
            className="block sm:hidden"
            onClick={() => {
              toggleSidebar(null);
              toggleNavbar();
            }}
          />

          <DropdownTheme className="daisy-dropdown-center hidden lg:block" />
          <SwapIcons
            nameOff="brush"
            nameOn="x"
            className="self-center lg:hidden rounded-lg hover:bg-base-300"
            inputProps={{
              onClick: () => {
                toggleNavbar(false);
                toggleSidebar("theme");
              },
              checked: isOpenSidebar === "theme",
              readOnly: true,
            }}
          />

          <ButtonIcon name="user-circle" onClick={() => toggleModal("login")} />

          <ButtonIcon
            name="shopping-cart"
            onClick={() => {
              toggleNavbar(false);
              toggleSidebar("cart");
            }}
          />
        </div>
      </div>
      <div
        className={clsx(
          "px-6 overflow-hidden transition-all ease-linear",
          { "h-0 pb-0": !isOpenNavbar },
          { "h-14 py-2 sm:h-fit sm:py-0": isOpenNavbar },
        )}
      >
        <NavbarSearch className="rounded-sm sm:hidden inline-flex w-full" />
      </div>

      <ModalLogin id="login" />
    </nav>
  );
}
