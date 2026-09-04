import type { MonthHeaderProps } from "@/types/Calender.type";
import { getMonthName } from "@/utils/dateUtils";
import { useState } from "react";

export const MonthHeader = ({
  currentDate: externalDate,
  onDateChange,
}: MonthHeaderProps) => {
  const [internalDate, setInternalDate] = useState(new Date());

  const activeDate = externalDate ?? internalDate;

  const handlePrevMonth = () => {
    const newDate = new Date(
      activeDate.getFullYear(),
      activeDate.getMonth() - 1,
      1,
    );
    if (onDateChange) onDateChange(newDate);
    else setInternalDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(
      activeDate.getFullYear(),
      activeDate.getMonth() + 1,
      1,
    );
    if (onDateChange) onDateChange(newDate);
    else setInternalDate(newDate);
  };

  const monthName = getMonthName(activeDate);
  const year = activeDate.getFullYear();

  return (
    <div className="flex items-center gap-3.5">
      <div className="arrow" onClick={handlePrevMonth}>
        ‹
      </div>
      <div className="label min-w-33.75 font-kalam font-bold text-[19px] min-w[150px] text-center">
        {monthName} {year}
      </div>
      <div className="arrow" onClick={handleNextMonth}>
        ›
      </div>
    </div>
  );
};
