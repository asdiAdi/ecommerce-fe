import SidebarContent, { SidebarContentProps } from "./SidebarContent";
import { THEMES } from "@/constants";
import { useTheme } from "next-themes";
import { cx } from "@/utils/common";

export default function SidebarAccount(props: SidebarContentProps) {
  const { theme: currentTheme, setTheme } = useTheme();
  const { className, ...rest } = props;

  return (
    <SidebarContent className={cx("daisy-menu", className)} {...rest}>
      {THEMES.map((theme) => (
        <li key={`sidebar-${theme}`}>
          <input
            type="radio"
            className="daisy-theme-controller daisy-btn daisy-btn-md w-full daisy-btn-ghost justify-start capitalize"
            aria-label={theme}
            value={theme}
            checked={theme === currentTheme}
            onClick={() => {
              setTheme(theme);
            }}
            readOnly
          />
        </li>
      ))}
    </SidebarContent>
  );
}
