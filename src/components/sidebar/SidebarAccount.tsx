import { ReactNode } from "react";
import SidebarLayout from "@/components/sidebar/SidebarLayout";
import { useSidebar } from "@/components/sidebar/SidebarProvider";
import TableIcon from "@/components/core/TableIcon";

export default function SidebarAccount(props: { children: ReactNode }) {
  const { children } = props;

  const { isOpen, toggle } = useSidebar();
  // TODO: dashboard provider or just use useStore?

  return (
    <SidebarLayout
      isOpen={isOpen === "account"}
      toggle={() => toggle("account")}
      side={
        <ul className="daisy-menu w-full h-full">
          <li className="daisy-menu-title uppercase">Dashboard</li>
          <li>
            <a>
              <TableIcon name="basket-outline" className="opacity-50" /> Orders
              <span className="daisy-badge border-0">5</span>
            </a>
          </li>
          <li>
            <a>
              <TableIcon name="heart-outline" className="opacity-50" /> Wishlist
              <span className="daisy-badge border-0">19</span>
            </a>
          </li>
          <li>
            <a>
              <TableIcon name="headphones-outline" className="opacity-50" />{" "}
              Support Tickets
              <span className="daisy-badge border-0">1</span>
            </a>
          </li>

          <li className="daisy-menu-title uppercase mt-8">Account Settings</li>
          <li>
            <a>
              <TableIcon name="user-outline" className="opacity-50" /> Profile
              Info
            </a>
          </li>
          <li>
            <a>
              <TableIcon name="map-pin-outline" className="opacity-50" />{" "}
              Addresses
              <span className="daisy-badge border-0">16</span>
            </a>
          </li>
          <li>
            <a>
              <TableIcon name="credit-card-outline" className="opacity-50" />{" "}
              Payment Methods
              <span className="daisy-badge border-0">4</span>
            </a>
          </li>
        </ul>
      }
    >
      {children}
    </SidebarLayout>
  );
}
