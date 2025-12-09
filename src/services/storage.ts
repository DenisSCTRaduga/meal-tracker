import type { Meal } from '../types/meal.ts';

export const MEALS_LS_TOKEN = "meals";
export const MEALS_LS_DATE_TOKEN = "meals_last_update";

export const LSMeals = {
  _set: (meals: Meal[]): void => {
    localStorage.setItem(MEALS_LS_TOKEN, JSON.stringify(meals));
    const today = new Date().toISOString().slice(0, 10);
    localStorage.setItem(MEALS_LS_DATE_TOKEN, today);
  },

  _get: (): Meal[] => {
    const savedDate = localStorage.getItem(MEALS_LS_DATE_TOKEN);
    const today = new Date().toISOString().slice(0, 10);

    if (savedDate !== today) {
      localStorage.removeItem(MEALS_LS_TOKEN);
      localStorage.setItem(MEALS_LS_DATE_TOKEN, today);
      return [];
    }

    const itemsRaw = localStorage.getItem(MEALS_LS_TOKEN);
    return itemsRaw ? JSON.parse(itemsRaw) : [];
  },

  _clear: (): void => {
    localStorage.removeItem(MEALS_LS_TOKEN);
    localStorage.removeItem(MEALS_LS_DATE_TOKEN);
  },
};
