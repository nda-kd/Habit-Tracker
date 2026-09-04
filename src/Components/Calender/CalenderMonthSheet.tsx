import { DayOnCalender } from "./DayOnCalender";
import { getMonthDays } from "@/utils/dateUtils";
import Data from "@/data/staticItems.json";
import type { CalenderMonthSheetProps } from "@/types/Calender.type";

export const CalenderMonthSheet = ({
  monthDays,
  firstDayIndex,
}: CalenderMonthSheetProps) => {
  return (
    <div className="panel wobble-a">
      <div className="habit-legend flex flex-wrap gap-3 mb-4.5 text-[14px]">
        <div className="flex items-center gap-1.5">
          {Data.habitData.map((filt) => (
            <>
              <span
                key={filt.id}
                style={{ backgroundColor: `${filt.color}` }}
                className="w-2.75 h-2.75 rounded-[50%] border-[1.5px] border-solid border-graphite"
              ></span>
              {filt.habit}
            </>
          ))}
        </div>
      </div>
      <div className="cal-weekdays grid grid-cols-[repeat(7,1fr)] text-[14px] text-center pb-2 border-b-[1.5px_dashed_var(--graphite-soft)] mb-2">
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>

      <div className="cal-grid grid grid-cols-[repeat(7,1fr)] auto-rows-21.5 gap-2">
        {getMonthDays()[0].firstDayIndex &&
          Array.from({ length: firstDayIndex }).map((_, i) => (
            <div key={i} className="day-cell empty"></div>
          ))}
        {monthDays.map((item) => (
          <DayOnCalender key={item.dayNumber} {...item} />
        ))}
      </div>
    </div>
  );
};
