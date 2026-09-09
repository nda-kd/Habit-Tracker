import type { statsCardProps } from "@/types/stats.type";

export const StatsCard = ({ data }: statsCardProps) => {
  return (
    <div className="animate-[card-entry_0.4s_ease-out_both] flex-1 flex items-center justify-between bg-white/25 border-2 border-solid border-graphite rounded-[14px] px-4 py-3">
      <div>
        <p className="text-[16px] mb-1 text-graphite-soft">{data.label}</p>
        <p className="text-[27px] font-extrabold tracking-[-1px]">
          {data.value}
        </p>
        <p className="text-[13px] mt-1 text-pen-red font-bold">{data.meta}</p>
      </div>
      <div>
        {data.chartValue > 0 && (
          <div
            className={`after:content-[''] after:absolute after:inset-2 after:rounded-full after:bg-white w-18 h-18 rounded-[50%] bg-[conic-gradient(var(--pen-blue)_0_82%,#aab1c2_82%_100%)] grid place-items-center relative`}
          >
            <strong className="relative text-[15px] text-gray-900 z-30">{`${data.chartValue}%`}</strong>
          </div>
        )}
      </div>
    </div>
  );
};
