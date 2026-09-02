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
  week: DayStatus[];
}

export interface WeekOverViewProps {
  thisWeek: HabitItem[];
  today: number;
}
