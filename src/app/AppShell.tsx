import { Outlet, NavLink } from "react-router";
import logo from "@/assets/logo.svg";

export const AppShell = () => {
  return (
    <div className="h-dvh flex flex-row flex-wrap">
      <aside className="sidebar flex flex-col w-max p-9 border-r-[2.5px] border-r-graphite">
        <div className="flex">
          <img src={logo} alt="Habit Tracker" className="h-10 w-10 mr-2" />
          <h1 className="font-kalam text-[30px] font-bold m-0 mb-8">Habitly</h1>
        </div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Today
        </NavLink>
        <NavLink
          to="/habits"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          All Habits
        </NavLink>
        <NavLink
          to="/stats"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Stats
        </NavLink>
        <NavLink
          to="/Calender"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Calender
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Profile
        </NavLink>
      </aside>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};
