import { ReactNode } from "react";
import { THEMES } from "@/constants";
import { useTheme } from "next-themes";
import SidebarLayout from "@/components/sidebar/SidebarLayout";
import { useSidebar } from "@/components/sidebar/SidebarProvider";

export default function SidebarTheme(props: { children: ReactNode }) {
  const { theme: currentTheme, setTheme } = useTheme();
  const { isOpen, toggle } = useSidebar();
  const { children } = props;

  return (
    <SidebarLayout
      isOpen={isOpen === "theme"}
      toggle={() => toggle("theme")}
      position="right"
      side={
        <ul className="daisy-menu w-full p-4">
          {THEMES.map((theme) => (
            <li
              key={`sidebar-${theme}`}
              className="flex flex-row justify-between"
            >
              <input
                type="radio"
                className="daisy-theme-controller daisy-btn w-2/5 justify-start daisy-btn-md capitalize daisy-btn-ghost"
                aria-label={theme}
                value={theme}
                checked={theme === currentTheme}
                onClick={() => {
                  setTheme(theme);
                }}
                readOnly
              />

              <div
                className="right-0 my-1 flex w-[calc(60%-20px)] gap-0 p-0"
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
      }
    >
      {children}
    </SidebarLayout>
  );
}
