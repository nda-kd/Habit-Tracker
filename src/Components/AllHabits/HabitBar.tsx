import type { HabitItem } from "@/types/habit";
import Data from "@/data/staticItems.json";

export const HabitBar = (hab: HabitItem) => {
  return (
    <div className="animate-[card-entry_0.4s_ease-out_both] grid grid-cols-[42px_1.6fr_100px_140px_90px_70px_70px] items-center gap-3 border-2 border-graphite rounded-xl px-4 py-3 bg-white/25">
      <div className="text-[19px] border-2 border--graphite rounded-full w-9 h-9 flex items-center justify-center bg-[#fff8e8]">
        {hab.icon}
      </div>
      <div className="habit-main">
        <div className="name">{hab.habit}</div>
        <span
          style={{
            color: ` ${Data.habitFilters[Number(hab.category)].color}`,
            borderColor: ` ${Data.habitFilters[Number(hab.category)].color}`,
          }}
          className="tag inline-block text-[12px] border-[1.5px] border-dashed rounded-[10px] px-2.25 py-px mt-0.75"
        >
          {Data.habitFilters[Number(hab.category)]?.cat}
        </span>
      </div>
      <div className="text-[14px] text-graphite-soft text-center">Daily</div>
      <div className="heat flex gap-0.5">
        {hab.lastTwoWeeks.map((isDone, index) => (
          <span key={index} className={`dot ${isDone ? "on" : "miss"}`}></span>
        ))}
      </div>
      <div
        className={`streak-val ${!hab.lastTwoWeeks.some(Boolean) ? "emoji-grey" : ""}`}
      >
        🔥 {hab.streak}
      </div>
      <div className="font-kalam font-bold text-[17px] text-center">
        {hab.rate}
      </div>
      <div className="flex gap-2 justify-center">
        <div className="icon-btn">✎</div>
        <div className="icon-btn del">🗑</div>
      </div>
    </div>
  );
};
