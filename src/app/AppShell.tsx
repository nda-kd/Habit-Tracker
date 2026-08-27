import { Outlet, NavLink } from "react-router";

export const AppShell = () => {
  return (
    <div className="shel">
      <aside className="sidebar">
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
