"use client";

import { Icons } from "@/components/icons";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="flex items-center justify-center w-[30px] h-[30px] bg-white border rounded-full select-none dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
      onClick={() => {
        const isDark =
          (theme === "system" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches) ||
          theme === "dark";
        setTheme(isDark ? "light" : "dark");
      }}
      aria-label="Toggle theme"
      suppressHydrationWarning
    >
      <Icons.sun className="block w-4 h-4 text-yellow-500 dark:hidden" />
      <Icons.moon className="hidden w-4 h-4 text-neutral-200 dark:block" />
    </button>
  );
}
