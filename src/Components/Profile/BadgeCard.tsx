import type { BadgeCardProps } from "@/types/Profile.type";

export const BadgeCard = (badge: BadgeCardProps) => {
  const hue = (badge.id * 137.5) % 360;
  return (
    <div
      className={`badge  ${badge.isEarned && "animate-[card-entry_0.9s_ease-out_both] earned"}`}
    >
      <div
        style={{ backgroundColor: `hsl(${hue}deg, 70%, 50%, 0.2)` }}
        className="w-12.5 h-12.5 mt-0 mx-auto mb-2 border-[2.5px] border-solid border-graphite rounded-[50%] flex items-center justify-center text-[24px]"
      >
        {badge.icon}
      </div>
      <div className="text-[14px] font-['Kalam',cursive] font-bold">
        {badge.name}
      </div>
      <div className="text-[11px] mt-0.5 text-graphite-soft">
        {badge.isEarned ? "earned" + badge.earnDate : "Locked"}
      </div>
    </div>
  );
};
