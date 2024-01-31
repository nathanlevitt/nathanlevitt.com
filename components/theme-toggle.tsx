"use client";

import { Icons } from "@/components/icons";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  return (
    <button
      className="flex items-center p-1.5 bg-white border rounded-full select-none dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Icons.sun className="w-4 h-4 text-yellow-500" />
      ) : (
        <Icons.moon className="w-4 h-4 text-neutral-200" />
      )}
    </button>
  );
}
