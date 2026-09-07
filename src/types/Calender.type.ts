import type { DayInfo } from "./dateUtils.type";

export interface MonthHeaderProps {
  currentDate: Date;
  onDateChange: (newDate: Date) => void;
}

export interface CalenderMonthSheetProps {
  monthDays: DayInfo[];
  firstDayIndex: number;
}
