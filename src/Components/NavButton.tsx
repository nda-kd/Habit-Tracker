import type { ReactNode } from "react";
import { NavLink } from "react-router";

export interface ButtonProps {
  to: string;
  label: string;
  icon: ReactNode;
  end: boolean;
}

export const NavButton = ({ to, label, icon, end }: ButtonProps) => {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
    >
      <span className="ic">{icon}</span>
      {label}
    </NavLink>
  );
};
