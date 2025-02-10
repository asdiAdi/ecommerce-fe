"use client";
import { ComponentPropsWithoutRef } from "react";
import { useTheme } from "next-themes";
import { Themes } from "@/types/constants";
import SwapIcons from "@/components/core/SwapIcons";

interface ToggleThemeProps extends ComponentPropsWithoutRef<"button"> {
  theme?: Themes;
}

export default function ToggleTheme(props: ToggleThemeProps) {
  const { theme, setTheme } = useTheme();

  return (
    <SwapIcons
      className="rounded-lg hover:bg-base-300"
      nameOff="sun"
      nameOn="moon"
      swap="rotate"
      inputProps={{
        className: "theme-controller",
        value: theme,
        onClick: () =>
          setTheme(props.theme ?? (theme === "dark" ? "light" : "dark")),
      }}
    />
  );
}
