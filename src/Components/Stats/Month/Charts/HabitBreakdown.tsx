import React, { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { useTheme } from "@/hooks/useTheme";

type ChartType = React.ComponentProps<typeof ReactApexChart>["type"];

export interface HabitSubcategory {
  name: string;
  value: number;
}

export interface HabitCategory {
  id: string;
  name: string;
  value: number;
  subcategories?: HabitSubcategory[];
}

interface HabitSunburstChartProps {
  categories?: HabitCategory[];
}

const DEFAULT_HABITS: HabitCategory[] = [
  {
    id: "health",
    name: "Health",
    value: 30,
    subcategories: [
      { name: "Hydration", value: 10 },
      { name: "Sleep", value: 12 },
      { name: "Nutrition", value: 8 },
    ],
  },
  {
    id: "fitness",
    name: "Fitness",
    value: 25,
    subcategories: [
      { name: "Cardio", value: 10 },
      { name: "Strength", value: 10 },
      { name: "Mobility", value: 5 },
    ],
  },
  {
    id: "mindfulness",
    name: "Mindfulness",
    value: 20,
    subcategories: [
      { name: "Meditation", value: 12 },
      { name: "Journaling", value: 8 },
    ],
  },
  {
    id: "learning",
    name: "Learning",
    value: 18,
    subcategories: [
      { name: "Reading", value: 10 },
      { name: "Courses", value: 8 },
    ],
  },
  {
    id: "productivity",
    name: "Productivity",
    value: 22,
    subcategories: [
      { name: "Deep Work", value: 14 },
      { name: "Planning", value: 8 },
    ],
  },
  {
    id: "social",
    name: "Social",
    value: 15,
    subcategories: [
      { name: "Family", value: 8 },
      { name: "Friends", value: 7 },
    ],
  },
  {
    id: "finance",
    name: "Finance",
    value: 12,
    subcategories: [
      { name: "Budgeting", value: 6 },
      { name: "Investing", value: 6 },
    ],
  },
  {
    id: "creativity",
    name: "Creativity",
    value: 14,
    subcategories: [
      { name: "Writing", value: 8 },
      { name: "Design", value: 6 },
    ],
  },
];

const HabitBreakdown: React.FC<HabitSunburstChartProps> = ({
  categories = DEFAULT_HABITS,
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const habitColors = useMemo(
    () => [
      "var(--cat-health)",
      "var(--cat-fitness)",
      "var(--cat-mindfulness)",
      "var(--cat-productivity)",
      "var(--cat-finance)",
      "var(--cat-relationships)",
      "var(--cat-growth)",
      "var(--cat-lifestyle)",
    ],
    [],
  );

  const { mainSeries, drilldownSeries } = useMemo(() => {
    const parentData = categories.map((cat) => ({
      x: cat.name,
      y: cat.value,
      drilldown:
        cat.subcategories && cat.subcategories.length > 0 ? cat.id : undefined,
    }));

    const drilldowns = categories
      .filter((cat) => cat.subcategories && cat.subcategories.length > 0)
      .map((cat) => ({
        id: cat.id,
        name: `${cat.name} Breakdown`,
        data: cat.subcategories!.map((sub) => ({
          x: sub.name,
          y: sub.value,
        })),
      }));

    return {
      mainSeries: [{ name: "Habit Tracker", data: parentData }],
      drilldownSeries: drilldowns,
    };
  }, [categories]);

  const chartOptions = useMemo<ApexOptions>(() => {
    return {
      chart: {
        type: "sunburst" as unknown as ChartType,
        height: 350,
        fontFamily: "inherit",
        background: "transparent",
      },
      plotOptions: {
        sunburst: {
          innerSize: "35%",
        },
      },
      theme: {
        mode: isDark ? "dark" : "light",
      },
      colors: habitColors,
      stroke: {
        width: 1,
        colors: [isDark ? "#111827" : "#ffffff"],
      },
      title: {
        text: "Habit breakdown",
        align: "left",
        margin: 2,
        style: {
          fontSize: "18px",
          fontWeight: "600",
          color: "var(--graphite)",
        },
      },
      subtitle: {
        text: "Breakdown of daily habit completion by category",
        align: "left",
        margin: 0,
        style: {
          fontSize: "13px",
          color: "var(--graphite)",
        },
      },
      legend: {
        position: "bottom",
        fontFamily: "inherit",
        labels: {
          colors: isDark ? "#9ca3af" : "#4b5563",
        },
      },
      tooltip: {
        theme: isDark ? "dark" : "light",
      },
      drilldown: {
        series: drilldownSeries,
      },
    };
  }, [isDark, habitColors, drilldownSeries]);

  return (
    <div className="chart-section p-6 rounded-2xl space-y-6" id="chart">
      <ReactApexChart
        options={chartOptions}
        series={mainSeries}
        type={"sunburst" as unknown as ChartType}
        height={350}
      />
    </div>
  );
};

export default HabitBreakdown;
