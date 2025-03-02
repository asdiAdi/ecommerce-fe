"use client";
import TableIcon from "@/components/core/TableIcon";
import { cx } from "@/utils/common";
import useCategoryStore from "@/stores/categoryStore";
import Link from "next/link";

export default function DropdownCategory(props: { className?: string }) {
  const categories = useCategoryStore((state) => state.categories);

  return (
    <div
      className={cx("daisy-dropdown rounded-lg hover:bg-base-300", [
        props.className,
      ])}
    >
      <div tabIndex={0} role="button">
        <TableIcon
          name="category-outlined"
          className="daisy-btn daisy-btn-square h-fit w-fit border-none"
        />
      </div>

      <ul
        tabIndex={0}
        className="daisy-dropdown-content z-1 mt-1 w-52 rounded-box bg-base-300 p-2 shadow-2xl"
      >
        {categories.map(({ name, subcategories }) => {
          return (
            <li
              key={`dropdown-category-${name}`}
              className="daisy-dropdown-hover daisy-dropdown daisy-dropdown-right flex flex-col rounded-lg hover:bg-base-300"
            >
              <div
                tabIndex={0}
                role="button"
                className="flex cursor-pointer items-center justify-between p-2"
              >
                {/*TODO: support clicking parent category, outputs all products on its subcategory*/}
                {name} <TableIcon name="chevron-right" size="xs" />
              </div>
              <ul className="daisy-dropdown-content z-1 mt-1 w-52 rounded-box bg-base-300 p-2 shadow-xl">
                {subcategories?.map((subCategory) => (
                  <li
                    key={`dropdown-sub-category-${subCategory.name}`}
                    className="cursor-pointer p-2"
                  >
                    <Link
                      href={{
                        pathname: "/",
                        query: { category_name: subCategory.name },
                      }}
                    >
                      {subCategory.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
