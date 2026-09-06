export interface CalendarDayItem {
  dayNumber: number;
  dayOfWeek: string;
  dayOfWeekShort: string;
  dateObj: Date;
  isoDate: string;
  isToday: boolean;
  firstDayIndex: number;
}

// 2. Represents the Context shared state and updater function
export interface ClanderContextValue {
  selectedDay: CalendarDayItem;
  setSelectedDay: (day: CalendarDayItem) => void;
}
