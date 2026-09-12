import { useState } from "react";
import type { Data } from "@/types/stats.type";
import { StatsCard } from "../StatsCard";
import { CompletionTrend } from "./Charts/CompletionTrend";
import HabitBreakdown from "./Charts/HabitBreakdown";
import HabitConsistency from "./Charts/HabitConsistency";
import DailyConsistencyHeatmap from "./Charts/DailyConsistency";

export const MonthPanel = () => {
  const [cardComplitionMonth] = useState<Data>({
    label: "Complition",
    value: "82%",
    meta: "↑ 8% vs last week",
    chartValue: 82,
  });
  const [cardComplitedMonth] = useState<Data>({
    label: "Complited",
    value: "33 / 42",
    meta: "9 remaining",
    chartValue: 0,
  });
  const [cardStreakMonth] = useState<Data>({
    label: "Current streak",
    value: "🔥 6",
    meta: "Best this week",
    chartValue: 0,
  });

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
        <StatsCard data={cardComplitionMonth} />
        <StatsCard data={cardComplitedMonth} />
        <StatsCard data={cardStreakMonth} />
      </div>
      <div className="charts-grid">
        <CompletionTrend />
        <HabitBreakdown />
      </div>
      <div className="charts-grid">
        <DailyConsistencyHeatmap />
        <HabitConsistency />
      </div>
    </div>
  );
};
