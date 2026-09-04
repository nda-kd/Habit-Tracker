import type { habitListProps } from "@/types/habit";

export const CalenderDaySheet = ({ myData }: habitListProps) => {
  return <div>{myData[0].habit}</div>;
};
