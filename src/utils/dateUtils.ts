import type { DayInfo, TodayInfo, MonthFormat } from "../types/dateUtils.types";

// 1. month name
export const getMonthName = (
  date: Date = new Date(),
  locale: string = "en-US",
  format: MonthFormat = "long",
): string => {
  return date.toLocaleDateString(locale, { month: format });
};

// 2. All days in a target month
export const getTotalDaysInMonth = (date: Date = new Date()): number => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

// 3. today
export const getTodayInfo = (locale: string = "en-US"): TodayInfo => {
  const today = new Date();
  return {
    dateObj: today,
    dayNumber: today.getDate(),
    monthIndex: today.getMonth(),
    monthName: getMonthName(today, locale),
    year: today.getFullYear(),
    dayOfWeek: today.toLocaleDateString(locale, { weekday: "long" }),
    formatted: today.toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
};

// 4. all days in any month
export const getMonthDays = (
  targetDate: Date = new Date(),
  locale: string = "en-US",
): DayInfo[] => {
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth();
  const totalDays = getTotalDaysInMonth(targetDate);

  const today = new Date();
  const isCurrentMonth =
    today.getFullYear() === year && today.getMonth() === month;

  const days: DayInfo[] = [];

  for (let day = 1; day <= totalDays; day++) {
    const currentDate = new Date(year, month, day);

    days.push({
      dayNumber: day,
      dayOfWeek: currentDate.toLocaleDateString(locale, { weekday: "long" }),
      dayOfWeekShort: currentDate.toLocaleDateString(locale, {
        weekday: "short",
      }),
      dateObj: currentDate,
      isoDate: currentDate.toISOString().split("T")[0],
      isToday: isCurrentMonth && today.getDate() === day,
      firstDayIndex: currentDate.getDay(),
    });
  }

  return days;
};
