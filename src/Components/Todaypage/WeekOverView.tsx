import type { habitData } from "@/types/habit";

const WEEK = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export const WeekOverView = ({ myData }: habitData) => {
  return (
    <div className="animate-[card-entry_0.4s_ease-out_both] panel wobble-a border-[2.5px] border-solid border-graphite)] rounded-2xl px-5.5 py-5 bg-white/22 mb-8">
      <div className="grid-header grid grid-cols-[1.6fr_repeat(7,36px)] text-[14px] text-graphite-soft pb-2.5 border-b-[1.5px] border-dashed border-graphite-soft mb-1.5 text-center">
        <span>Habit</span>
        {WEEK.map((day, index) => (
          <span key={index}>{day}</span>
        ))}
      </div>

      {myData.map((habit) => (
        <div
          key={habit.id}
          className="habit-row grid grid-cols-[1.6fr_repeat(7,36px)] items-center text-[18px] py-3 border-b border-dotted border-[#b8b2a0]"
        >
          <div className="flex items-center gap-2">
            {habit.icon} {habit.habit}
          </div>
          {habit.week.map((week) => (
            <div
              key={week.day}
              className={`cell ${week.done ? "done" : "blank"}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
