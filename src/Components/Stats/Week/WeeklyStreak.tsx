import React, { useEffect, useState } from "react";
import { ChartTitle } from "../ChartTitle";

interface DayStreak {
  day: string;
  completed: boolean;
}

interface WeeklyStreakProps {
  currentStreakDays?: number;
  bestDay?: string;
  bestStreakDays?: number;
  improvementPercentage?: number;
  weekData?: DayStreak[];
}

const defaultWeekData: DayStreak[] = [
  { day: "Mon", completed: true },
  { day: "Tue", completed: true },
  { day: "Wed", completed: true },
  { day: "Thu", completed: true },
  { day: "Fri", completed: true },
  { day: "Sat", completed: true },
  { day: "Sun", completed: false },
];

export const WeeklyStreak: React.FC<WeeklyStreakProps> = ({
  currentStreakDays = 6,
  bestDay = "Saturday",
  bestStreakDays = 6,
  improvementPercentage = 8,
  weekData = defaultWeekData,
}) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const completedCount = weekData.filter((d) => d.completed).length;
  const fillPercentage = Math.min(
    100,
    Math.max(0, ((completedCount - 1) / (weekData.length - 1)) * 100),
  );

  return (
    <div className="chart-section p-6 rounded-2xl space-y-6">
      <div className="flex justify-between items-start">
        <ChartTitle title="Weekly streak" meta="Keep the chain going" />
        <span
          className="px-3 py-1 rounded-lg text-xs font-semibold transition-all duration-500 transform"
          style={{
            backgroundColor: "var(--paper-line)",
            color: "var(--graphite)",
            opacity: animated ? 1 : 0,
            transform: animated ? "translateY(0)" : "translateY(-6px)",
          }}
        >
          {currentStreakDays} days
        </span>
      </div>

      <div className="relative py-4">
        <div
          className="absolute top-1/2 left-4 right-4 h-0.5 -translate-y-3 z-0"
          style={{ backgroundColor: "var(--paper-line)" }}
        />

        <div
          className="absolute top-1/2 left-4 h-0.5 -translate-y-3 z-0 transition-all duration-1000 ease-out"
          style={{
            backgroundColor: "var(--pen-blue)",
            width: animated ? `calc(${fillPercentage}% - 1rem)` : "0%",
          }}
        />

        <div className="relative z-10 flex justify-between items-center">
          {weekData.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)"
                style={{
                  backgroundColor: "var(--paper)",
                  border: `2px solid ${
                    item.completed ? "var(--pen-blue)" : "var(--paper-line)"
                  }`,
                  color: item.completed
                    ? "var(--pen-blue)"
                    : "var(--graphite-soft)",
                  opacity: animated ? 1 : 0,
                  transform: animated ? "scale(1)" : "scale(0.3)",
                  transitionDelay: `${index * 90}ms`,
                  boxShadow:
                    item.completed && animated
                      ? "0 0 12px rgba(59, 91, 140, 0.25)"
                      : "none",
                }}
              >
                {item.completed ? "✓" : "—"}
              </div>

              <span
                className="text-xs font-medium transition-opacity duration-300"
                style={{
                  color: "var(--graphite-soft)",
                  opacity: animated ? 1 : 0,
                  transitionDelay: `${index * 90 + 200}ms`,
                }}
              >
                {item.day}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3 pt-2">
        <div
          className="flex items-center px-4 py-3 rounded-xl text-sm transition-all duration-500 ease-out"
          style={{
            backgroundColor: "var(--paper-line)",
            opacity: animated ? 1 : 0,
            transform: animated ? "translateY(0)" : "translateY(12px)",
            transitionDelay: "600ms",
          }}
        >
          <span className="mr-3 text-base">🏆</span>
          <span style={{ color: "var(--graphite-soft)" }}>
            Best day:{" "}
            <strong style={{ color: "var(--graphite)" }}>{bestDay}</strong>
          </span>
        </div>

        <div
          className="flex items-center px-4 py-3 rounded-xl text-sm transition-all duration-500 ease-out"
          style={{
            backgroundColor: "var(--paper-line)",
            opacity: animated ? 1 : 0,
            transform: animated ? "translateY(0)" : "translateY(12px)",
            transitionDelay: "720ms",
          }}
        >
          <span className="mr-3 text-base">🔥</span>
          <span style={{ color: "var(--graphite-soft)" }}>
            Best streak:{" "}
            <strong style={{ color: "var(--graphite)" }}>
              {bestStreakDays} consecutive days
            </strong>
          </span>
        </div>

        <div
          className="flex items-center px-4 py-3 rounded-xl text-sm transition-all duration-500 ease-out"
          style={{
            backgroundColor: "var(--paper-line)",
            opacity: animated ? 1 : 0,
            transform: animated ? "translateY(0)" : "translateY(12px)",
            transitionDelay: "840ms",
          }}
        >
          <span className="mr-3 text-base">📈</span>
          <span style={{ color: "var(--graphite-soft)" }}>
            Improvement:{" "}
            <strong style={{ color: "var(--graphite)" }}>
              +{improvementPercentage}% from last week
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeeklyStreak;
