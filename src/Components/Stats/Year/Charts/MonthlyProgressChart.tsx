import React from "react";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { useTheme } from "@/hooks/useTheme";

export const MonthlyProgressChart: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const chartOptions: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      background: "transparent",
    },
    // Set chart theme mode to fix dark mode tooltip styling
    theme: {
      mode: isDarkMode ? "dark" : "light",
    },
    title: {
      text: "Monthly progress",
      align: "left",
      style: {
        fontSize: "18px",
        fontWeight: "700",
        fontFamily: "kalam",
        color: "var(--graphite)",
      },
    },
    subtitle: {
      text: "Average completion by month",
      align: "left",
      style: {
        fontSize: "14px",
        fontFamily: "patrick hand",
        color: "var(--graphite-soft)",
      },
    },
    colors: ["var(--pen-blue)"],
    plotOptions: {
      bar: {
        columnWidth: "80%",
        borderRadius: 6,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: {
        show: true,
        color: "var(--graphite)",
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "var(--graphite)",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      theme: isDarkMode ? "dark" : "light",
    },
  };

  const chartSeries = [
    {
      name: "Completion",
      data: [50, 58, 62, 57, 68, 63, 70, 66, 82, 86, 79, 90],
    },
  ];

  return (
    <div className="p-4 border-2 border-solid border-graphite-soft rounded-2xl">
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={350}
      />
    </div>
  );
};
