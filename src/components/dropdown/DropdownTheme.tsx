"use client";
import { useTheme } from "next-themes";
import TableIcon from "@/components/core/TableIcon";
import { THEMES } from "@/constants";
import { cx } from "@/utils/common";

export default function DropdownTheme(props: { className?: string }) {
  const { theme: currentTheme, setTheme } = useTheme();

  return (
    <div
      className={cx("daisy-dropdown rounded-lg hover:bg-base-300", [
        props.className,
      ])}
    >
      <div
        tabIndex={0}
        role="button"
        className="daisy-btn daisy-btn-square h-fit w-fit border-none"
      >
        <TableIcon name="brush" />
      </div>

      <ul
        tabIndex={0}
        className="mt-1 daisy-dropdown-content bg-base-300 rounded-box z-1 w-60 p-2 shadow-2xl max-h-60 overflow-y-scroll"
      >
        {THEMES.map((theme) => (
          <li
            key={`dropdown-${theme}`}
            className="flex flex-row justify-between"
          >
            <input
              type="radio"
              name="daisy-theme-dropdown"
              className="daisy-theme-controller daisy-btn daisy-btn-sm w-1/2 daisy-btn-ghost justify-start capitalize"
              aria-label={theme}
              value={theme}
              checked={theme === currentTheme}
              onClick={() => {
                setTheme(theme);
              }}
              readOnly
            />

            <div
              className="right-0 p-0 w-[calc(50%-10px)] my-1 flex gap-0 cursor-pointer"
              data-theme={theme}
              onClick={() => {
                setTheme(theme);
              }}
            >
              <div className="h-full w-1/4 bg-base-content" />
              <div className="h-full w-1/4 bg-primary" />
              <div className="h-full w-1/4 bg-secondary" />
              <div className="h-full w-1/4 bg-accent" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
