import React, { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { useTheme } from "@/hooks/useTheme";

export const CompletionTrend: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const series = useMemo(
    () => [
      {
        name: "Completion",
        data: [
          18, 24, 22, 28, 30, 28, 38, 35, 42, 40, 56, 52, 58, 62, 59, 68, 65,
          74, 72, 78, 80, 77, 85, 88, 86,
        ],
      },
    ],
    [],
  );

  const primaryColor = "var(--color-pen-blue)";

  const chartOptions = useMemo<ApexOptions>(() => {
    return {
      chart: {
        type: "area",
        height: 280,
        toolbar: { show: false },
        sparkline: { enabled: false },
        background: "transparent",
      },
      theme: {
        mode: isDark ? "dark" : "light",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: isDark ? 0.35 : 0.25,
          opacityTo: isDark ? 0.02 : 0.05,
          stops: [0, 90, 100],
          colorStops: [
            {
              offset: 0,
              color: primaryColor,
              opacity: isDark ? 0.4 : 0.25,
            },
            {
              offset: 100,
              color: primaryColor,
              opacity: 0,
            },
          ],
        },
      },
      dataLabels: { enabled: false },
      title: {
        text: "Completion trend",
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
        text: "Your progress throughout September",
        align: "left",
        margin: -6,
        style: {
          fontSize: "15px",
          fontFamily: "patrick hand",
          color: "var(--color-graphite-soft)",
        },
      },
      xaxis: {
        type: "category",
        categories: [
          "Sep 1",
          "",
          "",
          "",
          "",
          "",
          "Sep 7",
          "",
          "",
          "",
          "",
          "",
          "Sep 14",
          "",
          "",
          "",
          "",
          "",
          "Sep 21",
          "",
          "",
          "",
          "",
          "",
          "Sep 30",
        ],
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
          style: {
            colors: "var(--color-graphite-soft)",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        show: false,
      },
      grid: {
        show: false,
      },
      colors: ["var(--color-pen-blue)"],

      stroke: {
        curve: "smooth",
        width: 3.5,
        colors: ["var(--color-pen-blue)"],
      },
      markers: {
        colors: ["var(--color-pen-blue)"],
      },
      tooltip: {
        theme: isDark ? "dark" : "light",
        marker: {
          show: true,
        },
      },
    };
  }, [isDark]);

  return (
    <div className="chart-section p-6 rounded-2xl space-y-6">
      <ReactApexChart
        options={chartOptions}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
};
