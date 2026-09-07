import { useState, type ReactNode } from "react";
import type { CalendarDayItem } from "@/types/contex.type";
import { CalenderContext } from "./CalenderContext";
import { getMonthDays } from "@/utils/dateUtils";

export const ClanderProvider = ({ children }: { children: ReactNode }) => {
  const currentMonthDays = getMonthDays(new Date());
  const todayItem =
    currentMonthDays.find((day) => day.isToday) || currentMonthDays[0] || null;

  const [selectedDay, setSelectedDay] = useState<CalendarDayItem>(todayItem);

  return (
    <CalenderContext.Provider value={{ selectedDay, setSelectedDay }}>
      {children}
    </CalenderContext.Provider>
  );
};
