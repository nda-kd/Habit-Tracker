import React, { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { ChartTitle } from "../../ChartTitle";

export interface HabitProgressItem {
  label: string;
  percentage: number;
}

interface HabitConsistencyProps {
  data?: HabitProgressItem[];
}

const DEFAULT_HABITS: HabitProgressItem[] = [
  { label: "Meditation", percentage: 96 },
  { label: "Reading", percentage: 89 },
  { label: "Exercise", percentage: 82 },
  { label: "Water", percentage: 74 },
  { label: "Journaling", percentage: 61 },
];

const HabitConsistency: React.FC<HabitConsistencyProps> = ({
  data = DEFAULT_HABITS,
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="chart-section p-6 rounded-2xl space-y-6"
      style={{ width: "100%", fontFamily: "inherit", textAlign: "left" }}
    >
      <ChartTitle title="Habit consistency" meta="Ranked by completion rate" />
      <div
        style={{
          display: "flex",
          // justifyContent: "center",
          flexDirection: "column",
          gap: "25px",
          paddingTop: "50px",
          height: "100%",
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              display: "grid",
              gridTemplateColumns: "95px 1fr 45px",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span
              style={{
                color: "var(--graphite, #ffffff)",
                fontSize: "15px",
                fontWeight: 700,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "flex",
                alignItems: "center",
                height: "12px",
                lineHeight: "12px",
              }}
            >
              {item.label}
            </span>
            <div
              style={{
                width: "100%",
                height: "12px",
                backgroundColor: isDark ? "#1e293b" : "#f1f5f9",
                borderRadius: "999px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: loaded ? `${item.percentage}%` : "0%",
                  height: "100%",
                  backgroundColor: "var(--color-pen-blue, #6366f1)",
                  borderRadius: "999px",
                  transition: "width 1s cubic-bezier(0.4, 0, 0.2, 1)",
                  transitionDelay: `${index * 80}ms`,
                }}
              />
            </div>
            <span
              style={{
                color: "var(--graphite, #ffffff)",
                fontSize: "15px",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                height: "12px",
                lineHeight: "12px",
              }}
            >
              {item.percentage}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabitConsistency;
