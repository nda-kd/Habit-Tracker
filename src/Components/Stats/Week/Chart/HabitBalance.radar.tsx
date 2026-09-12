import React, { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { type ApexOptions } from "apexcharts";

interface LifeArea {
  category: string;
  score: number;
}

const lifeAreasData: LifeArea[] = [
  { category: "Health", score: 90 },
  { category: "Fitness", score: 85 },
  { category: "Mind", score: 60 },
  { category: "Productivity", score: 80 },
  { category: "Personal Growth", score: 75 },
  { category: "Finance", score: 10 },
  { category: "Lifestyle", score: 65 },
  { category: "Relationships", score: 58 },
];

export const HabitBalance: React.FC = () => {
  const series = useMemo(
    () => [
      {
        name: "Score",
        data: lifeAreasData.map((d) => d.score),
      },
    ],
    [],
  );

  const options: ApexOptions = useMemo(
    () => ({
      chart: {
        type: "radar",
        height: 380,
        toolbar: { show: false },
        background: "transparent",
        fontFamily: "'Patrick Hand', cursive, sans-serif",
      },
      colors: ["var(--pen-blue)"],
      stroke: {
        width: 3,
      },
      fill: {
        opacity: 0.25,
      },
      markers: {
        size: 5,
        hover: { size: 7 },
      },
      title: {
        text: "Habit balance",
        align: "left",
        margin: 0,
        style: {
          fontSize: "18px",
          fontWeight: "600",
          fontFamily: "kalam",
          color: "var(--graphite)",
        },
      },
      subtitle: {
        text: "How balanced your habits are",
        align: "left",
        margin: -6,
        style: {
          fontSize: "15px",
          fontFamily: "patrick hand",
          color: "var(--color-graphite-soft)",
        },
      },
      plotOptions: {
        radar: {
          polygons: {
            strokeColors: "var(--paper-line)",
            connectorColors: "var(--paper-line)",
            fill: {
              colors: ["transparent"],
            },
          },
        },
      },
      xaxis: {
        categories: lifeAreasData.map((d) => d.category),
        labels: {
          style: {
            colors: Array(8).fill("var(--graphite-soft)"),
            fontSize: "15px",
            fontWeight: 500,
            fontFamily: "'Patrick Hand', cursive, sans-serif",
          },
        },
      },
      yaxis: {
        show: false,
        min: 0,
        max: 100,
        stepSize: 20,
      },
      tooltip: {
        theme: "dark",
        style: {
          fontSize: "14px",
          fontFamily: "'Patrick Hand', cursive, sans-serif",
        },
        y: {
          formatter: (val: number) => `${val}%`,
        },
      },
    }),
    [],
  );

  return (
    <div className="chart-section">
      <ReactApexChart
        options={options}
        series={series}
        type="radar"
        height={380}
      />

      <div className="text-[12px] mt-1.5 w-full text-center">
        how consistently you're covering each life area - <br /> Fitness and
        Sleep are your softest spots this month
      </div>
    </div>
  );
};

export default HabitBalance;
