import { useState } from "react";
import { CalenderMonthSheet } from "@/Components/Calender/CalenderMonthSheet";
import { CalenderDaySheet } from "@/Components/Calender/CalenderDaySheet";
import { Title } from "@/Components/Title";
import { MonthHeader } from "@/Components/Calender/MonthHeader";
import { getMonthDays } from "../utils/dateUtils";
import { ClanderProvider } from "@/Context/CalenderProvider";

export const CalenderPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfMonth = getMonthDays(currentDate);
  const firstDayIndex = daysOfMonth[0]?.firstDayIndex ?? 0;
  return (
    <ClanderProvider>
      <header className="outlet-header">
        <Title label="Calendar" description="tap a day to see what you did" />
        <MonthHeader currentDate={currentDate} onDateChange={setCurrentDate} />
      </header>
      <div className="grid grid-cols-[1fr_300px] gap-6">
        <CalenderMonthSheet
          monthDays={daysOfMonth}
          firstDayIndex={firstDayIndex}
        />
        <CalenderDaySheet />
      </div>
    </ClanderProvider>
  );
};
