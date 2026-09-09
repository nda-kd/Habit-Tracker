export type RangeTab = "week" | "month" | "year";

export interface Data {
  label: string;
  value: string | number;
  meta: string;
  chartValue: number;
}

export interface statsCardProps {
  data: Data;
}

export interface ChartTitleprops {
  title: string;
  meta: string;
}
