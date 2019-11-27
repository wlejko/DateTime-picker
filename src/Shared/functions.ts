import { months } from "./arrays";

export function getNameOfMonth(index: number) {
  return months[index];
}

export function getWeeksForMonth(month: number, year: number) {
  const firstDayOfMonth = new Date(year, month, 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  let currentWeek: (Date | null)[] = [];
  const weeks: (Date | null)[][] = [];

  let currentDate = firstDayOfMonth;

  for (let i = 0; i < firstDayOfWeek; i++) {
    currentWeek.push(null);
  }

  weeks.push(currentWeek);

  while (currentDate.getMonth() === month) {
    if (currentWeek.length === 7) {
      currentWeek = [];
      weeks.push(currentWeek);
    }
    currentWeek.push(currentDate);
    currentDate = new Date(year, month, currentDate.getDate() + 1);
  }

  while (currentWeek.length < 7) {
    currentWeek.push(null);
  }

  return weeks;
}
