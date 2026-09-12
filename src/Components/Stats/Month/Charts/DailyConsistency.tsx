import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export interface CalendarDay {
  dateNumber: number | null;
  value: number;
}

interface CalendarHeatmapProps {
  data?: CalendarDay[];
  title?: string;
  subtitle?: string;
}

const DEFAULT_DAYS: CalendarDay[] = [
  { dateNumber: null, value: 0 },
  { dateNumber: null, value: 0 },
  { dateNumber: 1, value: 2 },
  { dateNumber: 2, value: 4 },
  { dateNumber: 3, value: 2 },
  { dateNumber: 4, value: 1 },
  { dateNumber: 5, value: 2 },
  { dateNumber: 6, value: 4 },
  { dateNumber: 7, value: 2 },
  { dateNumber: 8, value: 2 },
  { dateNumber: 9, value: 1 },
  { dateNumber: 10, value: 4 },
  { dateNumber: 11, value: 2 },
  { dateNumber: 12, value: 2 },
  { dateNumber: 13, value: 1 },
  { dateNumber: 14, value: 4 },
  { dateNumber: 15, value: 4 },
  { dateNumber: 16, value: 2 },
  { dateNumber: 17, value: 1 },
  { dateNumber: 18, value: 2 },
  { dateNumber: 19, value: 4 },
  { dateNumber: 20, value: 2 },
  { dateNumber: 21, value: 4 },
  { dateNumber: 22, value: 2 },
  { dateNumber: 23, value: 1 },
  { dateNumber: 24, value: 2 },
  { dateNumber: 25, value: 4 },
  { dateNumber: 26, value: 4 },
  { dateNumber: 27, value: 0 },
  { dateNumber: 28, value: 0 },
  { dateNumber: 29, value: 0 },
  { dateNumber: 30, value: 0 },
  { dateNumber: 31, value: 0 },
  { dateNumber: null, value: -1 },
  { dateNumber: null, value: -1 },
];

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

const ExactHandDrawnHeatmap: React.FC<CalendarHeatmapProps> = ({
  data = DEFAULT_DAYS,
  title = "Completion trend",
  subtitle = "Your progress throughout September",
}) => {
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    x: number;
    y: number;
    title: string;
    label: string;
    color: string;
  }>({
    visible: false,
    x: 0,
    y: 0,
    title: "",
    label: "",
    color: "",
  });

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const getTileClassesAndInfo = (item: CalendarDay) => {
    if (item.value === -1) {
      return {
        classes: "opacity-0 pointer-events-none",
        label: "",
        hex: "#000000",
      };
    }

    if (item.value === 0) {
      return {
        classes:
          "border-2 border-dashed border-[#a0a0a0] bg-transparent text-[#b0b0b0]",
        label: "No activity recorded",
        hex: "#a0a0a0",
      };
    }

    const colorMap: Record<
      number,
      { classes: string; label: string; hex: string }
    > = {
      1: {
        classes: "border-2 border-[#282828] bg-[#f3ebd3] text-[#635848]",
        label: "Low completion",
        hex: "#f3ebd3",
      },
      2: {
        classes:
          "border-2 border-[#282828] bg-[var(--highlight)] text-[#52442e]",
        label: "Medium completion",
        hex: "var(--highlight)",
      },
      3: {
        classes: "border-2 border-[#282828] bg-[#e5bf50] text-[#423621]",
        label: "High completion",
        hex: "#e5bf50",
      },
      4: {
        classes: "border-2 border-[#282828] bg-[var(--pen-blue)] text-white",
        label: "Full completion",
        hex: "var(--pen-blue)",
      },
    };

    return (
      colorMap[item.value] ?? {
        classes: "border-2 border-[#282828] bg-[#f3ebd3] text-[#635848]",
        label: "Low completion",
        hex: "#f3ebd3",
      }
    );
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    item: CalendarDay,
  ) => {
    if (item.value === -1) return;
    const { label, hex } = getTileClassesAndInfo(item);

    setTooltip({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      title: item.dateNumber ? `Sept ${item.dateNumber}` : "Activity",
      label: label,
      color: hex,
    });
  };

  return (
    <div className="chart-section p-6 rounded-2xl space-y-6 text-[#282828]">
      <svg className="hidden">
        <filter id="wobbly-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.03"
            numOctaves="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="2.5"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      <div>
        {title && <h3 className="m-0 mb-0.5 text-xl font-bold">{title}</h3>}
        {subtitle && <p className="m-0 mb-4 text-sm opacity-75">{subtitle}</p>}
      </div>
      <div className="grid grid-cols-7 gap-2 text-center font-bold text-[15px] mb-2">
        {WEEKDAYS.map((day, idx) => (
          <div key={idx}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2 filter-[url(#wobbly-filter)]">
        {data.map((item, index) => {
          const { classes } = getTileClassesAndInfo(item);
          const isInteractive = item.value !== -1;

          return (
            <div
              key={index}
              onMouseMove={(e) => handleMouseMove(e, item)}
              onMouseLeave={() =>
                setTooltip((prev) => ({ ...prev, visible: false }))
              }
              className={`aspect-square rounded-[10px] flex items-center justify-center text-[15px] font-semibold box-border transition-all duration-200 ease-out ${
                isInteractive
                  ? "cursor-pointer hover:scale-110 hover:z-10"
                  : "cursor-default"
              } ${
                animated && isInteractive
                  ? "scale-100 opacity-100"
                  : "scale-0 opacity-0"
              } ${classes}`}
              style={{
                transitionDelay: `${index * 18}ms`,
              }}
            >
              {item.dateNumber ?? ""}
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-2 mt-4 text-sm filter-[url(#wobbly-filter)]">
        <span>less</span>
        <div className="w-4.5 h-4.5 rounded-[5px] border-2 border-dashed border-[#a0a0a0]" />
        <div className="w-4.5 h-4.5 rounded-[5px] border-2 border-[#282828] bg-[#f3ebd3]" />
        <div className="w-4.5 h-4.5 rounded-[5px] border-2 border-[#282828] bg-[--highlight]" />
        <div className="w-4.5 h-4.5 rounded-[5px] border-2 border-[#282828] bg-[#e5bf50]" />
        <div className="w-4.5 h-4.5 rounded-[5px] border-2 border-[#282828] bg-(--pen-blue)" />
        <span>more</span>
      </div>
      {typeof document !== "undefined" &&
        tooltip.visible &&
        ReactDOM.createPortal(
          <div
            className="fixed z-99999 pointer-events-none -translate-x-1/2 -translate-y-full pb-3"
            style={{
              left: `${tooltip.x}px`,
              top: `${tooltip.y}px`,
            }}
          >
            <div className="bg-[#282828] text-white rounded-md shadow-xl border border-gray-700 overflow-hidden text-xs min-w-30">
              <div className="px-3 py-1.5 bg-[#333333] border-b border-gray-700 font-semibold text-gray-200">
                {tooltip.title}
              </div>
              <div className="px-3 py-2 flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full inline-block shrink-0"
                  style={{ backgroundColor: tooltip.color }}
                />
                <span className="font-medium text-gray-300">
                  {tooltip.label}
                </span>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};

export default ExactHandDrawnHeatmap;
