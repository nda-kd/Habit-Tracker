import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  return (localStorage.getItem("theme") as Theme) ?? "light";
}

let currentTheme: Theme = getInitialTheme();
const listeners = new Set<() => void>();

function applyTheme(theme: Theme) {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  listeners.forEach((listener) => listener());
}

applyTheme(currentTheme);

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot() {
  return currentTheme;
}

export const useTheme = () => {
  const theme = useSyncExternalStore(subscribe, getSnapshot);

  return {
    theme,
    setTheme: (t: Theme) => applyTheme(t),
    toggleTheme: () => applyTheme(theme === "light" ? "dark" : "light"),
  };
};
