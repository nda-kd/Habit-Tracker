import type { WeekOverViewProps } from "@/types/habit";

export const TodayHabitItem = ({ today, thisWeek }: WeekOverViewProps) => {
  return (
    <div className="flex flex-col gap-3 mb-8">
      {thisWeek.map((habit) => (
        <div
          key={habit.id}
          className="animate-[card-entry_0.4s_ease-out_both] habit-item grid grid-cols-[40px_1fr_120px_36px] items-center gap-4 border-2 border-solid border-graphite rounded-xl px-4 py-3 bg-white/25"
        >
          <div className="text-[20px] border-2 border-solid border-graphite rounded-full w-9.5 h-9.5 flex items-center justify-center bg-[#fff8e8]">
            {habit.icon}
          </div>
          <div>
            <div className="text-[19px]">{habit.habit}</div>
            <div className="text-[13px] text-graphite-soft">
              Description: coming soon ...
            </div>
          </div>
          <div className="mini-bars flex items-end gap-[3px] h-[30px]">
            {habit.week.map((day) => (
              <div
                key={day.id}
                className={`bar ${day.id === today ? "today" : ""}`}
                style={{
                  height:
                    typeof day.streak === "number"
                      ? `${day.streak}`
                      : day.streak,
                }}
              ></div>
            ))}
          </div>
          {habit.week
            .filter((item) => item.id === today)
            .map((week) => (
              <div
                key={week.id}
                className={`check-circle ${week.done ? "on" : ""}`}
              ></div>
            ))}
        </div>
      ))}
    </div>
  );
};
