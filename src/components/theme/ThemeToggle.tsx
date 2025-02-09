"use client";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import TableIcon from "@/components/base/TableIcon";

interface ThemeToggleProps extends ComponentPropsWithoutRef<"button"> {
  theme?: "dark" | "light";
}

export default function ThemeToggle(props: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // add img to avoid layout shift
  if (!mounted) return null;

  return (
    <TableIcon
      name={theme === "light" ? "sun" : "moon"}
      size="lg"
      onClick={() =>
        setTheme(props.theme ?? (theme === "dark" ? "light" : "dark"))
      }
    />
  );
}
