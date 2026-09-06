import { KPICard } from "./Todaypage/KPICard";
import staticsData from "@/data/staticItems.json";

export const KPIsReports = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {staticsData.KPIs.map((kpi, index) => (
        <KPICard key={kpi.id} index={index} {...kpi} />
      ))}
    </div>
  );
};
