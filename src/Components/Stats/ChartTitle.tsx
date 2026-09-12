import type { ChartTitleprops } from "@/types/stats.type";

export const ChartTitle = ({ title, meta }: ChartTitleprops) => {
  return (
    <div className="flex flex-col">
      <div className="font-['Kalam',cursive] font-bold text-[17px] mt-0 mx-0 -mb-1 flex items-center gap-2.5">
        {title}
      </div>
      <p className="text-[15px] text-graphite-soft">{meta}</p>
    </div>
  );
};
