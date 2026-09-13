import { useState } from "react";
import YearConsistency from "./Charts/YearConsistency";
import type { Data } from "@/types/stats.type";
import { StatsCard } from "../StatsCard";
import { MonthlyProgressChart } from "./Charts/MonthlyProgressChart";
import { YourYear } from "./YourYear";

export const YearPanel = () => {
  const [cardComplitionData] = useState<Data>({
    label: "Complition",
    value: "82%",
    meta: "↑ 8% vs last week",
    chartValue: 82,
  });
  const [cardComplitedData] = useState<Data>({
    label: "Complited",
    value: "33 / 42",
    meta: "9 remaining",
    chartValue: 0,
  });
  const [cardStreakData] = useState<Data>({
    label: "Current streak",
    value: "🔥 6",
    meta: "Best this week",
    chartValue: 0,
  });

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
        <StatsCard data={cardComplitionData} />
        <StatsCard data={cardComplitedData} />
        <StatsCard data={cardStreakData} />
      </div>
      <div className="grid mb-4.5 rounded-2xl space-y-6 max-w-full">
        <YearConsistency />
      </div>
      <div className="charts-grid">
        <MonthlyProgressChart />
        <YourYear />
      </div>
    </>
  );
};
