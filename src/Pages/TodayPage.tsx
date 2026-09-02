import { useState } from "react";
import { KPICard } from "@/Components/Todaypage/KPICard";
import { WeekOverView } from "@/Components/Todaypage/WeekOverView";
import { TodayHabitItem } from "@/Components/Todaypage/TodayHabitItem";
import { SectionLabel } from "@/Components/SectionLabel";
import staticsData from "@/data/staticItems.json";
import ThisWeek from "@/data/staticItems.json";

export const TodayPage = () => {
  const [searchItem, setSearchItem] = useState<string>("");
  const date = new Date();
  const Today = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const dayIndex = date.getDay();
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  };

  return (
    <div className="max-w-275 pt-8 px-11 pb-16">
      <header className="outlet-header">
        <div className="h-min">
          <h1>Today</h1>
          <span>
            {/* {Today.split(",")[0]} , {Today.split(",")[1]} */}
            {Today}
          </span>
        </div>
        <input
          className="bg-[rgb(255,255,255)]/30 border-2 border-graphite rounded-[20px] text-[16px] text-graphite-soft py-2 px-6 filter-[url(#wobble2)]"
          type="text"
          value={searchItem}
          placeholder="search habits..."
          onChange={(e) => searchHandler(e)}
        />
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {staticsData.KPIs.map((kpi, index) => (
          <KPICard key={kpi.id} index={index} {...kpi} />
        ))}
      </div>
      <SectionLabel label="This week" />
      <WeekOverView today={dayIndex} thisWeek={ThisWeek.WeeklyReport} />
      <SectionLabel label=" Today's habits" />
      <TodayHabitItem today={dayIndex} thisWeek={ThisWeek.WeeklyReport} />
    </div>
  );
};
