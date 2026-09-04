import { useState } from "react";
import { KPICard } from "@/Components/Todaypage/KPICard";
import { WeekOverView } from "@/Components/Todaypage/WeekOverView";
import { TodayHabitItem } from "@/Components/Todaypage/TodayHabitItem";
import { SectionLabel } from "@/Components/SectionLabel";
import { Title } from "@/Components/Title";
import { getTodayInfo } from "@/utils/dateUtils";
import staticsData from "@/data/staticItems.json";
import ThisWeek from "@/data/staticItems.json";

export const TodayPage = () => {
  const [searchItem, setSearchItem] = useState<string>("");

  const TodaysInfo = getTodayInfo();
  const date = new Date();
  const Today =
    TodaysInfo.dayOfWeek +
    ", " +
    TodaysInfo.monthName +
    " " +
    TodaysInfo.dayNumber;
  const dayIndex = date.getDay();

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  };

  return (
    <>
      <header className="outlet-header">
        <Title label="Today" description={Today} />
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
      <WeekOverView today={dayIndex} myData={ThisWeek.habitData} />
      <SectionLabel label=" Today's habits" />
      <TodayHabitItem today={dayIndex} myData={ThisWeek.habitData} />
    </>
  );
};
