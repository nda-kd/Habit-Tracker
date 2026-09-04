import type { DayInfo } from "./dateUtils.types";

export interface MonthHeaderProps {
  currentDate: Date;
  onDateChange: (newDate: Date) => void;
}

export interface CalenderMonthSheetProps {
  monthDays: DayInfo[];
  firstDayIndex: number;
}
