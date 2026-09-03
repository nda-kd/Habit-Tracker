import { useRef, useState, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { NavButton } from "@/Components/NavButton";
import logo from "@/assets/logo.svg";
import { ThemeToggler } from "./ThemeToggler";

const NAVITEMS = [
  { to: "/", label: "Today", icon: "⌂", end: true },
  { to: "/habits", label: " All Habits", icon: "▦", end: false },
  { to: "/stats", label: "Stats", icon: "◔", end: false },
  { to: "/calender", label: "Calender", icon: "🗓", end: false },
  { to: "/profile", label: "Profile", icon: "☺", end: false },
] as const;

export const AppShell = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const [pillStyle, setPillStyle] = useState<{ top: number; height: number }>();
  const location = useLocation();

  useLayoutEffect(() => {
    const activeEl = listRef.current?.querySelector(
      ".nav-item.active",
    ) as HTMLElement;
    if (activeEl) {
      setPillStyle({
        top: activeEl.offsetTop,
        height: activeEl.offsetHeight,
      });
    }
  }, [location.pathname]);

  return (
    <>
      <div className="fixed left-55 top-0 bottom-0 w-0.5 bg-pen-red opacity-25"></div>
      <div className="grid grid-cols-[220px_1fr] min-h-screen">
        <aside className="sidebar flex flex-col py-8 px-5 border-r-[2.5px] border-r-graphite">
          <div className="flex items-start">
            <img src={logo} alt="Habit Tracker" className="h-8 w-8 mr-3" />
            <h1 className="font-kalam text-[26px] font-extrabold m-0 mb-8">
              Habitly
            </h1>
          </div>
          <div className="relative" ref={listRef}>
            {pillStyle && (
              <div
                className="nav-pill"
                style={{
                  transform: `translateY(${pillStyle.top}px)`,
                  height: pillStyle.height,
                }}
              />
            )}
            {NAVITEMS.map((item) => (
              <NavButton key={item.to} {...item} />
            ))}
          </div>
          <hr className="border-0 border-t-[1.5px] border-dashed my-5 opacity-60 border-graphite-soft" />
          <button className="hover:bg-pen-red/75 hover:text-paper hover:border-paper cursor-pointer border-[2.5px] border-dashed border-pen-red rounded-xl text-pen-red text-center p-2.75 text-[17px] font-kalam font-bold filter:url(#wobble)">
            New Habit
          </button>
          <ThemeToggler />
        </aside>
        <main className="relative max-w-275 pt-8 px-11 pb-16">
          <Outlet />
        </main>
      </div>
    </>
  );
};
