import { createContext, useContext } from "react";
import type { ClanderContextValue } from "@/types/contex.type";

export const CalenderContext = createContext<ClanderContextValue | null>(null);

export const useCalendar = () => {
  const context = useContext(CalenderContext);
  if (!context) {
    throw new Error("useCalendar must be used within a ClanderProvider");
  }
  return context;
};
