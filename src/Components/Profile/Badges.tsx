import { BadgeCard } from "./BadgeCard";
import Data from "@/data/staticItems.json";

export const Badges = () => {
  return (
    <div className="animate-[card-entry_0.5s_ease-out_both] panel wobble-b">
      <div className="grid grid-cols-[repeat(5,1fr)] gap-4">
        {Data.Badges.map((badge) => (
          <BadgeCard {...badge} />
        ))}
      </div>

      <div className="text-[13px] leading-normal mt-3.5 rotate-[-0.4deg]">
        ↖ solid outline = earned, dashed &amp; faded = still locked
      </div>
    </div>
  );
};
