import SidebarContent, { SidebarContentProps } from "./SidebarContent";
import { THEMES } from "@/constants";
import { useTheme } from "next-themes";
import { cx } from "@/utils/common";

export default function SidebarTheme(props: SidebarContentProps) {
  const { theme: currentTheme, setTheme } = useTheme();
  const { className, ...rest } = props;

  return (
    <SidebarContent className={cx("daisy-menu", className)} {...rest}>
      {THEMES.map((theme) => (
        <li key={`sidebar-${theme}`} className="flex flex-row justify-between">
          <input
            type="radio"
            className="daisy-theme-controller daisy-btn daisy-btn-md w-2/5 daisy-btn-ghost justify-start capitalize"
            aria-label={theme}
            value={theme}
            checked={theme === currentTheme}
            onClick={() => {
              setTheme(theme);
            }}
            readOnly
          />

          <div
            className="right-0 p-0 w-[calc(60%-20px)] my-1 flex gap-0"
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
    </SidebarContent>
  );
}
