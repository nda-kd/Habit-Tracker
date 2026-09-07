export interface DayStatus {
  id?: number;
  day: string;
  streak?: string;
  done: boolean | null;
}

export interface HabitItem {
  id: number;
  habit: string;
  icon: string;
  category: string;
  streak: number;
  rate: string;
  lastTwoWeeks: boolean[];
  week: DayStatus[];
}

export interface habitData {
  myData: HabitItem[];
  today: number;
}

export interface habitListProps {
  myData: HabitItem[];
}

export interface HabitFiltersTypes {
  id: string;
  cat: string;
  icon: string;
  color: string;
}
