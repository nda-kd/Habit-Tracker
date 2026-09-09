import React, { useEffect, useState } from "react";
import { ChartTitle } from "../../ChartTitle";

interface HabitItem {
  id: string;
  name: string;
  percentage: number;
  color: string;
}

const habitsData: HabitItem[] = [
  { id: "1", name: "Meditation", percentage: 100, color: "#10B981" },
  { id: "2", name: "Reading", percentage: 86, color: "#6366F1" },
  { id: "3", name: "Exercise", percentage: 71, color: "#F59E0B" },
  { id: "4", name: "Water", percentage: 57, color: "#6366F1" },
];

export const YourHabits: React.FC = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="chart-section p-4">
      <ChartTitle title="Your habits" meta="Consistency this week" />

      <div className="mt-6 space-y-6">
        {habitsData.map((habit) => (
          <div key={habit.id} className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="font-bold" style={{ color: "var(--graphite)" }}>
                {habit.name}
              </span>
              <span
                className="font-medium"
                style={{ color: "var(--graphite-soft)" }}
              >
                {habit.percentage}%
              </span>
            </div>

            <div
              className="w-full h-2.5 rounded-full overflow-hidden"
              style={{ backgroundColor: "var(--paper-line)" }}
            >
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: hasLoaded ? `${habit.percentage}%` : "0%",
                  backgroundColor: habit.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourHabits;
