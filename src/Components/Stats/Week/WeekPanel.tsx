import { useState } from "react";
import type { Data } from "@/types/stats.type";
import { StatsCard } from "../StatsCard";
import { DailyCompletion } from "./Chart/DailyCompletion.vbar";
import { HabitBalance } from "./Chart/HabitBalance.radar";
import { YourHabits } from "./Chart/YourHabits.hbar";
import { WeeklyStreak } from "./WeeklyStreak";

export const WeekPanel = () => {
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
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
        <StatsCard data={cardComplitionData} />
        <StatsCard data={cardComplitedData} />
        <StatsCard data={cardStreakData} />
      </div>
      <div className="charts-grid">
        <DailyCompletion />
        <YourHabits />
      </div>
      <div className="charts-grid">
        <HabitBalance />
        <WeeklyStreak />
      </div>
    </div>
  );
};
