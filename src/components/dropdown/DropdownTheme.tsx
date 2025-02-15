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
        className="daisy-dropdown-content z-1 mt-1 max-h-60 w-60 overflow-y-scroll rounded-box bg-base-300 p-2 shadow-2xl"
      >
        {THEMES.map((theme) => (
          <li
            key={`dropdown-${theme}`}
            className="flex flex-row justify-between"
          >
            <input
              type="radio"
              name="daisy-theme-dropdown"
              className="daisy-theme-controller daisy-btn w-1/2 justify-start daisy-btn-sm capitalize daisy-btn-ghost"
              aria-label={theme}
              value={theme}
              checked={theme === currentTheme}
              onClick={() => {
                setTheme(theme);
              }}
              readOnly
            />

            <div
              className="right-0 my-1 flex w-[calc(50%-10px)] cursor-pointer gap-0 p-0"
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
