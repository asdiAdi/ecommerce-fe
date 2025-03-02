import { ReactNode } from "react";
import { cx } from "@/utils/common";
import SidebarLayout from "@/components/sidebar/SidebarLayout";
import { useSidebar } from "@/components/sidebar/SidebarProvider";
import useCategoryStore from "@/stores/categoryStore";
import Link from "next/link";

export default function SidebarCategory(props: { children: ReactNode }) {
  const { children } = props;

  const { isOpen, toggle } = useSidebar();
  const categories = useCategoryStore((state) => state.categories);

  return (
    <SidebarLayout
      isOpen={isOpen === "category"}
      toggle={() => toggle("category")}
      className={cx("daisy-join-vertical daisy-join bg-base-100")}
      side={
        <ul className="daisy-menu h-full w-full">
          {categories.map(({ name, subcategories }) => {
            return (
              <li key={`sidebar-category-${name}`}>
                <details open>
                  <summary>{name}</summary>
                  <ul>
                    {subcategories?.map((subCategory) => (
                      <li key={`sidebar-sub-category-${subCategory.name}`}>
                        <Link
                          href={{
                            pathname: "/",
                            query: { category_name: subCategory.name },
                          }}
                          onClick={() => toggle(null)}
                        >
                          {subCategory.name}
                        </Link>
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
