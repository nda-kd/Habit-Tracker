export interface DayInfo {
  dayNumber: number;
  dayOfWeek: string;
  dayOfWeekShort: string;
  dateObj: Date;
  isoDate: string;
  isToday: boolean;
  firstDayIndex: number;
}

export interface TodayInfo {
  dateObj: Date;
  dayNumber: number;
  monthIndex: number;
  monthName: string;
  year: number;
  dayOfWeek: string;
  formatted: string;
}

export type MonthFormat = Intl.DateTimeFormatOptions["month"];
