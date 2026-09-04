import { useState } from "react";
import { CalenderMonthSheet } from "@/Components/Calender/CalenderMonthSheet";
import { CalenderDaySheet } from "@/Components/Calender/CalenderDaySheet";
import Data from "@/data/staticItems.json";
// import { getMonthName } from "../utils/dateUtils";
import { Title } from "@/Components/Title";
import { MonthHeader } from "@/Components/Calender/MonthHeader";
import { getMonthDays } from "../utils/dateUtils";

export const CalenderPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfMonth = getMonthDays(currentDate);
  const firstDayIndex = daysOfMonth[0]?.firstDayIndex ?? 0;
  return (
    <>
      <header className="outlet-header">
        <Title label="Calendar" description="tap a day to see what you did" />
        <MonthHeader currentDate={currentDate} onDateChange={setCurrentDate} />
      </header>
      <div className="">
        <CalenderMonthSheet
          monthDays={daysOfMonth}
          firstDayIndex={firstDayIndex}
        />
        <CalenderDaySheet myData={Data.habitData} />
      </div>
    </>
  );
};
