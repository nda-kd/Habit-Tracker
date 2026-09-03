import { HabitBar } from "./HabitBar";
import type { habitListProps } from "@/types/habit";
import Data from "@/data/staticItems.json";

export const HabitLists = ({ myData }: habitListProps) => {
  return (
    Data.habitData.length !== 0 && (
      <>
        <div className="list-head grid grid-cols-[42px_1.6fr_100px_140px_90px_70px_70px] gap-3 px-4 pb-2 text-[13px] text-graphite-soft border-b-[1.5px] border-dashed border-graphite-soft mb-2 text-center">
          <span></span>
          <span>Habit</span>
          <span>Frequency</span>
          <span>Last 14 days</span>
          <span>Streak</span>
          <span>Rate</span>
          <span>Edit</span>
        </div>
        <div className="flex flex-col gap-3 mb-7.5">
          {myData.map((hab) => (
            <HabitBar key={hab.id} {...hab} />
          ))}
        </div>
      </>
    )
  );
};
