import { useCalendar } from "@/Context/CalenderContext";

export const CalenderDaySheet = () => {
  const { selectedDay } = useCalendar();

  const formattedDate = selectedDay?.dateObj
    ? selectedDay.dateObj.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        // year: "2-digit",
      })
    : "";

  console.log("::", formattedDate, ":", selectedDay);

  return (
    <div className="animate-[card-entry_0.4s_ease-out_both] max-h-fit border-[2.5px] border-solid border-graphite rounded-2xl px-5.5 py-5 bg-[rgba(255,255,255,.22)] filter-[url(#wobble2)]">
      <div className="detail-date font-bold font-kalam text-[22px] mb-0.5">
        {formattedDate}
      </div>
      <div>Description: Coming Soon...</div>
    </div>
  );
};
