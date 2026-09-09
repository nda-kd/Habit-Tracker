export interface CalendarDayItem {
  dayNumber: number;
  dayOfWeek: string;
  dayOfWeekShort: string;
  dateObj: Date;
  isoDate: string;
  isToday: boolean;
  firstDayIndex: number;
}

export interface ClanderContextValue {
  selectedDay: CalendarDayItem;
  setSelectedDay: (day: CalendarDayItem) => void;
}

export interface ModalContextValue {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}
