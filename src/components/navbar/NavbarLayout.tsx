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
        "fixed top-0 z-20 flex w-full flex-col items-center justify-between bg-base-200",
        { "shadow-sm": !isOpenSidebar },
      )}
    >
      <div className="daisy-navbar max-h-14 min-h-0 max-w-400 px-6">
        <div className="daisy-navbar-start gap-1">
          <SwapIcons
            nameOff="menu-2"
            nameOn="x"
            className="self-center rounded-lg hover:bg-base-300 lg:hidden"
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

        <NavbarSearch className="hidden w-1/2 rounded-full sm:daisy-navbar-center sm:inline-flex" />

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
            className="self-center rounded-lg hover:bg-base-300 lg:hidden"
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
          "overflow-hidden px-6 transition-all ease-linear",
          { "h-0 pb-0": !isOpenNavbar },
          { "h-14 py-2 sm:h-fit sm:py-0": isOpenNavbar },
        )}
      >
        <NavbarSearch className="inline-flex w-full rounded-sm sm:hidden" />
      </div>

      <ModalLogin id="login" />
    </nav>
  );
}
