import type { DayInfo } from "@/types/dateUtils.type";
import { useCalendar } from "@/Context/CalenderContext";

export const CalenderCell = (day: DayInfo) => {
  const { selectedDay, setSelectedDay } = useCalendar();

  const isSelected = selectedDay?.isoDate === day.isoDate;

  return (
    <div
      className={`animate-[card-entry_0.7s_ease-out_both] day-cell cursor-pointer p-2 rounded ${
        isSelected ? "selected" : ""
      }`}
      onClick={() => setSelectedDay(day)}
    >
      <div className="text-[15px] text-graphite-soft">{day.dayNumber}</div>
      <div className="flex flex-wrap gap-0.75">
        <span className="w-2.25 h-2.25 rounded-2xl bg-red-600"></span>
      </div>
    </div>
  );
};
