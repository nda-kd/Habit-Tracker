import { type ApexOptions } from "apexcharts";
import { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { ChartTitle } from "../../ChartTitle";
import { getTodayInfo } from "@/utils/dateUtils";

export const DailyCompletion = () => {
  const chartData = [5, 3, 9, 6, 2, 4, 7];

  const todayIndex = useMemo(() => getTodayInfo().dateObj.getDay(), []);

  const maxYValue = useMemo(() => {
    const maxVal = Math.max(...chartData, 0);
    return maxVal === 0 ? 10 : maxVal + 2;
  }, [chartData]);

  const series = [
    {
      name: "Completion",
      data: chartData,
    },
  ];

  const options: ApexOptions = useMemo(
    () => ({
      colors: [
        ({ dataPointIndex }: { dataPointIndex: number }) =>
          dataPointIndex === todayIndex
            ? "var(--highlight)"
            : "var(--pen-blue)",
      ],
      chart: {
        height: 320,
        type: "bar",
        toolbar: { show: false },
        background: "transparent",
      },
      grid: {
        show: false,
        borderColor: "var(--paper-line)",
        strokeDashArray: 0,
        xaxis: { lines: { show: false } },
        yaxis: { lines: { show: true } },
      },
      plotOptions: {
        bar: {
          borderRadius: 6,
          borderRadiusApplication: "end",
          columnWidth: "45%",
          distributed: true,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: (val: number) => `${val}`,
        offsetY: -20,
        style: {
          fontSize: "12px",
          fontWeight: 600,
          colors: ["var(--graphite)"],
        },
      },
      xaxis: {
        categories: ["S", "M", "T", "W", "T", "F", "S"],
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
          offsetY: 4,
          style: {
            colors: "var(--graphite)",
            fontSize: "14px",
            fontWeight: 600,
          },
        },
      },
      yaxis: {
        show: false,
        min: 0,
        max: maxYValue,
      },
      legend: { show: false },
      tooltip: {
        theme: "dark",
        y: { formatter: (val: number) => `${val}` },
      },
    }),
    [todayIndex, maxYValue],
  );

  return (
    <div className="chart-section">
      <ChartTitle title="Daily completion" meta="Consistency this week" />
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={320}
      />
      <div className="text-[13px] leading-normal mt-3 rotate-[-0.4deg]">
        ↖ Tuesday are your strongest day — weekends slip the most
      </div>
    </div>
  );
};

export default DailyCompletion;
