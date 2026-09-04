import type { DayInfo } from "@/types/dateUtils.types";

export const DayOnCalender = (day: DayInfo) => {
  return (
    <div className="day-cell">
      <div className="text-[15px] text-graphite-soft">{day.dayNumber}</div>
      <div className="flex flex-wrap gap-0.75">
        <span className="w-2.25 h-2.25 rounded-2xl bg-red-600"></span>
      </div>
    </div>
  );
};
