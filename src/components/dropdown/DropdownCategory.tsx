"use client";
import TableIcon from "@/components/core/TableIcon";
import { CATEGORIES, CATEGORY_KEYS, COMBINED_CATEGORIES } from "@/constants";
import { cx } from "@/utils/common";
import { SubCategoryKey } from "@/types/constants";

export default function DropdownCategory(props: { className?: string }) {
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
        className="mt-1 daisy-dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl"
      >
        {CATEGORY_KEYS.map((key) => {
          const subKeys = Object.keys(
            COMBINED_CATEGORIES[key],
          ) as SubCategoryKey[];

          return (
            <li
              key={`dropdown-category-${key}`}
              className="daisy-dropdown daisy-dropdown-right daisy-dropdown-hover rounded-lg hover:bg-base-300 flex flex-col"
            >
              <div
                tabIndex={0}
                role="button"
                className="cursor-pointer p-2 flex justify-between items-center"
              >
                {CATEGORIES[key]} <TableIcon name="chevron-right" size="xs" />
              </div>
              <ul className="mt-1 daisy-dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-xl">
                {subKeys.map((subKey) => (
                  <li
                    key={`dropdown-sub-category-${subKey}`}
                    className="cursor-pointer p-2"
                  >
                    {COMBINED_CATEGORIES[key][subKey]}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}

        {/*{THEMES.map((theme) => (*/}
        {/*  <li key={`dropdown-${theme}`}>*/}
        {/*    <input*/}
        {/*      type="radio"*/}
        {/*      name="daisy-theme-dropdown"*/}
        {/*      className="daisy-theme-controller daisy-btn daisy-btn-sm w-full daisy-btn-ghost justify-start capitalize"*/}
        {/*      aria-label={theme}*/}
        {/*      value={theme}*/}
        {/*      checked={theme === currentTheme}*/}
        {/*      onClick={() => {*/}
        {/*        setTheme(theme);*/}
        {/*      }}*/}
        {/*      readOnly*/}
        {/*    />*/}
        {/*  </li>*/}
        {/*))}*/}
      </ul>
    </div>
  );
}
