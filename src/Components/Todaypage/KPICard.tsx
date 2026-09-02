interface KpiCardProps {
  id: number;
  label: string;
  value: number | string;
  key?: number;
  index?: number; // Added to handle staggered animation delay
}

export const KPICard = ({ label, value, index = 0 }: KpiCardProps) => {
  return (
    <div
      style={{ animationDelay: `${index * 80}ms` }}
      className="animate-[card-entry_0.4s_ease-out_both] flex-1 flex flex-col items-center justify-center bg-white/25 border-[2.5px] border-solid border-graphite rounded-[14px] px-4 py-5"
    >
      <span
        className={`${
          label === "day streak" ? "text-pen-red" : "text-pen-blue"
        } font-kalam text-3xl font-bold leading-[1.1]`}
      >
        {value}
      </span>
      {label}
    </div>
  );
};
