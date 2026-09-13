import { MonthPanel } from "@/Components/Stats/Month/MonthPanel";
import { WeekPanel } from "@/Components/Stats/Week/WeekPanel";
import { YearPanel } from "@/Components/Stats/Year/YearPanel";
import { Title } from "@/Components/Title";
import type { RangeTab } from "@/types/stats.type";
import { useLayoutEffect, useRef, useState } from "react";

export const StatsPage = () => {
  const [range, setRange] = useState<RangeTab>("year");
  const [titleDescription, setTitleDescription] =
    useState<string>("testing...");
  const trackRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const RANGE_TAB = ["week", "month", "year"] as const;

  useLayoutEffect(() => {
    function movePill() {
      const activeEl = trackRef.current?.querySelector(
        `[data-value="${range}"]`,
      ) as HTMLElement;

      if (activeEl && pillRef.current) {
        pillRef.current.style.width = `${activeEl.offsetWidth}px`;
        pillRef.current.style.transform = `translateX(${activeEl.offsetLeft}px)`;
      }
    }

    movePill();

    document.fonts.ready.then(movePill);
  }, [range]);

  const changeRangeHandler = (tab: RangeTab) => {
    setRange(tab);
    setTitleDescription(tab);
  };

  return (
    <>
      <header className="outlet-header">
        <Title label="Stats" description={titleDescription} />
        <div
          className="relative flex border-[2.5px] border-solid border-graphite rounded-[17px] p-1.25 bg-[rgba(255,255,255,0.2)]"
          ref={trackRef}
        >
          <div className="range-pill" ref={pillRef} />
          {RANGE_TAB.map((tab, index) => (
            <div
              key={index}
              className={`[transition:color_0.45s_ease,font-weight_0.45s_ease] whitespace-nowrap relative z-50 px-4.5 py-1.75 text-[14px] rounded-[19px] cursor-pointer select-none ${range === tab ? "font-Kalam font-bold italic" : ""}`}
              data-value={tab}
              onClick={() => changeRangeHandler(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </div>
          ))}
        </div>
      </header>
      {range === "week" && <WeekPanel />}
      {range === "month" && <MonthPanel />}
      {range === "year" && <YearPanel />}
    </>
  );
};
