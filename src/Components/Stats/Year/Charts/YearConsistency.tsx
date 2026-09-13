import React, { useState, useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import { ChartTitle } from "../../ChartTitle";

export interface YearDay {
  date: string;
  value: number;
}

interface YearConsistencyProps {
  data?: YearDay[];
  title?: string;
  subtitle?: string;
}

const MONTHS = [
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
];

const YearConsistency: React.FC<YearConsistencyProps> = ({
  data,
  title,
  subtitle,
}) => {
  const [animated, setAnimated] = useState(false);
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

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const daysData = useMemo(() => {
    if (data && data.length > 0) return data;

    return Array.from({ length: 364 }, (_, index) => ({
      date: `Day ${index + 1}`,
      value: (index * 7 + 3) % 11 < 2 ? 0 : (index * 13 + 2) % 5,
    }));
  }, [data]);

  const getTileClassesAndInfo = (value: number) => {
    if (value === 0) {
      return {
        classes: "border-[1px] border-[#6b665c] bg-transparent",
        label: "No activity recorded",
        hex: "#6b665c",
      };
    }

    const colorMap: Record<
      number,
      { classes: string; label: string; hex: string }
    > = {
      1: {
        classes: "border-[1.5px] border-[#2c2c2c] bg-[#f8eebe]",
        label: "Low completion",
        hex: "#f8eebe",
      },
      2: {
        classes: "border-[1.5px] border-[#2c2c2c] bg-[#f3e192]",
        label: "Medium completion",
        hex: "#f3e192",
      },
      3: {
        classes: "border-[1.5px] border-[#2c2c2c] bg-[#ebd068]",
        label: "High completion",
        hex: "#ebd068",
      },
      4: {
        classes: "border-[1.5px] border-[#2c2c2c] bg-[#3b5998] text-white",
        label: "Full completion",
        hex: "#3b5998",
      },
    };

    return (
      colorMap[value] ?? {
        classes: "border-[1.5px] border-[#2c2c2c] bg-[#f8eebe]",
        label: "Low completion",
        hex: "#f8eebe",
      }
    );
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    dateStr: string,
    value: number,
  ) => {
    const { label, hex } = getTileClassesAndInfo(value);

    setTooltip({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      title: dateStr,
      label: label,
      color: hex,
    });
  };

  return (
    <div
      className="overflow-x-auto
        [&::-webkit-scrollbar]:h-2.5
      [&::-webkit-scrollbar-track]:bg-white/25
        [&::-webkit-scrollbar-track]:border
        [&::-webkit-scrollbar-track]:border-graphite
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-highlight
        [&::-webkit-scrollbar-thumb]:border
        [&::-webkit-scrollbar-thumb]:border-graphite
         [&::-webkit-scrollbar-thumb]:rounded-full
        p-6 rounded-2xl space-y-4
        font-sans w-full
        border-2 border-graphite-soft border-solid"
    >
      <>
        <ChartTitle
          title="Year consistency"
          meta="Every square represents one day"
        />
        <svg className="hidden">
          <filter id="wobbly-filter-year">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="1.8"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </svg>
        {(title || subtitle) && (
          <div>
            {title && <h3 className="m-0 text-xl font-bold">{title}</h3>}
            {subtitle && <p className="m-0 text-sm opacity-75">{subtitle}</p>}
          </div>
        )}
        <div className="inline-block min-w-max pb-2">
          <div className="grid grid-cols-12 gap-2 text-xs font-semibold text-graphite mb-2 pl-0.5">
            {MONTHS.map((month) => (
              <div key={month}>{month}</div>
            ))}
          </div>
          <div className="grid grid-rows-7 grid-flow-col gap-1 filter-[url(#wobbly-filter-year)]">
            {daysData.map((item, index) => {
              const { classes } = getTileClassesAndInfo(item.value);
              const colIndex = Math.floor(index / 7);

              return (
                <div
                  key={index}
                  onMouseMove={(e) => handleMouseMove(e, item.date, item.value)}
                  onMouseLeave={() =>
                    setTooltip((prev) => ({ ...prev, visible: false }))
                  }
                  className={`w-3.5 h-3.5 rounded-sm box-border transition-all duration-300 ease-out cursor-pointer hover:scale-125 hover:z-10 ${
                    animated
                      ? "scale-100 opacity-100 translate-y-0"
                      : "scale-50 opacity-0 -translate-y-1"
                  } ${classes}`}
                  style={{
                    transitionDelay: `${colIndex * 15}ms`,
                  }}
                />
              );
            })}
          </div>
          <div className="flex items-center gap-2 mt-4 text-xs font-medium filter-[url(#wobbly-filter-year)] text-graphite">
            <span>less</span>
            <div className="w-3.5 h-3.5 rounded-[3px] border-[1.5px] border-[#6b665c]" />
            <div className="w-3.5 h-3.5 rounded-[3px] border-[1.5px] border-[#2c2c2c] bg-[#f8eebe]" />
            <div className="w-3.5 h-3.5 rounded-[3px] border-[1.5px] border-[#2c2c2c] bg-[#f3e192]" />
            <div className="w-3.5 h-3.5 rounded-[3px] border-[1.5px] border-[#2c2c2c] bg-[#ebd068]" />
            <div className="w-3.5 h-3.5 rounded-[3px] border-[1.5px] border-[#2c2c2c] bg-[#3b5998]" />
            <span>more</span>
          </div>
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
      </>
    </div>
  );
};

export default YearConsistency;
