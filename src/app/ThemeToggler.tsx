import { useRef, useLayoutEffect } from "react";
import { useTheme } from "@/hooks/useTheme";

const THEME_OPTIONS = [
  { value: "light", label: "☀️ Light" },
  { value: "dark", label: "🌙 Dark" },
] as const;

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const trackRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const activeEl = trackRef.current?.querySelector(
      `[data-theme-value="${theme}"]`,
    ) as HTMLElement;
    if (activeEl && pillRef.current) {
      pillRef.current.style.width = `${activeEl.offsetWidth}px`;
      pillRef.current.style.transform = `translateX(${activeEl.offsetLeft - 3}px)`;
    }
  }, [theme]);

  const themeTogglerHandler = (value: "light" | "dark") => {
    if (document.startViewTransition) {
      document.startViewTransition(() => setTheme(value));
    } else {
      setTheme(value);
    }
  };

  return (
    <div
      ref={trackRef}
      className="relative flex items-center mt-10 border-2 border-solid border-graphite rounded-2xl p-0.75 text-[13px] transition-[border-color,background-color] duration-400 ease-in-out"
    >
      <div className="theme-pill" ref={pillRef} />
      {THEME_OPTIONS.map((option) => (
        <div
          key={option.value}
          onClick={() => themeTogglerHandler(option.value)}
          data-theme-value={option.value}
          className={`theme ${theme === option.value ? "active" : ""}`}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};
