import { ReactNode } from "react";
import SidebarLayout from "@/components/sidebar/SidebarLayout";
import { useSidebar } from "@/components/sidebar/SidebarProvider";
import MenuAccount from "@/components/menu/MenuAccount";

export default function SidebarAccount(props: { children: ReactNode }) {
  const { children } = props;

  const { isOpen, toggle } = useSidebar();
  // TODO: dashboard provider or just use useStore?

  return (
    <SidebarLayout
      isOpen={isOpen === "account"}
      toggle={() => toggle("account")}
      side={<MenuAccount />}
    >
      {children}
    </SidebarLayout>
  );
}
