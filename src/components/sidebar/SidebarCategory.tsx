import SidebarContent, {
  SidebarContentProps,
} from "@/components/sidebar/SidebarContent";
import { CATEGORIES, CATEGORY_KEYS, COMBINED_CATEGORIES } from "@/constants";
import { cx } from "@/utils/common";
import { SubCategoryKey } from "@/types/constants";

export default function SidebarCategory(props: SidebarContentProps) {
  const { className, ...rest } = props;
  return (
    <SidebarContent
      className={cx("daisy-join daisy-join-vertical bg-base-100", className)}
      {...rest}
    >
      <ul>
        {CATEGORY_KEYS.map((key) => {
          const subKeys = Object.keys(
            COMBINED_CATEGORIES[key],
          ) as SubCategoryKey[];

          return (
            <li
              key={`sidebar-category-${key}`}
              className="daisy-collapse daisy-collapse-arrow daisy-join-item border-base-300 border"
            >
              <input type="checkbox" />

              <div className="daisy-collapse-title font-semibold">
                {CATEGORIES[key]}
              </div>
              <ul className="daisy-collapse-content text-sm">
                {subKeys.map((subKey) => (
                  <li
                    key={`sidebar-sub-category-${subKey}`}
                    className="text-lg pl-2 cursor-pointer"
                  >
                    <a>{COMBINED_CATEGORIES[key][subKey]}</a>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </SidebarContent>
  );
}
