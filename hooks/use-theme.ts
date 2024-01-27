import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const isNight =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState<Theme>(
    typeof window !== "undefined"
      ? (window.localStorage.getItem("theme") as Theme) ??
          (isNight ? "dark" : "light")
      : "light"
  );

  useEffect(() => {
    console.log("theme", theme);

    const root = window.document.documentElement;

    root.classList.remove(theme === "light" ? "dark" : "light");
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [theme, setTheme] as const;
}
