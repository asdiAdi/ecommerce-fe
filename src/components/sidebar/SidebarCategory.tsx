import { ReactNode } from "react";
import { CATEGORIES, CATEGORY_KEYS, COMBINED_CATEGORIES } from "@/constants";
import { cx } from "@/utils/common";
import { SubCategoryKey } from "@/types/constants";
import SidebarLayout from "@/components/sidebar/SidebarLayout";
import { useSidebar } from "@/components/sidebar/SidebarProvider";

export default function SidebarCategory(props: { children: ReactNode }) {
  const { children } = props;

  const { isOpen, toggle } = useSidebar();

  return (
    <SidebarLayout
      isOpen={isOpen === "category"}
      toggle={() => toggle("category")}
      className={cx("daisy-join-vertical daisy-join bg-base-100")}
      side={
        <ul className="daisy-menu h-full w-full">
          {CATEGORY_KEYS.map((key) => {
            const subKeys = Object.keys(
              COMBINED_CATEGORIES[key],
            ) as SubCategoryKey[];
            return (
              <li key={`sidebar-category-${key}`}>
                <details open>
                  <summary>{CATEGORIES[key]}</summary>
                  <ul>
                    {subKeys.map((subKey) => (
                      <li key={`sidebar-sub-category-${subKey}`}>
                        <a>{COMBINED_CATEGORIES[key][subKey]}</a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            );
          })}
        </ul>
      }
    >
      {children}
    </SidebarLayout>
  );
}
