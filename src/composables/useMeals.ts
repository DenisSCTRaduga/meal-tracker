import { ref } from 'vue';
import type { Meal } from '../types/meal.ts';
import { LSMeals } from '../services/storage.ts';

export const useMeals = () => {
  const meals = ref<Meal[]>(LSMeals._get());

  const addMeal = (data: Meal) => {
    meals.value.push({ protein: data.protein || 1, label: data.label });
    LSMeals._set(meals.value);
  }

  const deleteMeal = (index: number) => {
    meals.value.splice(index, 1);
    LSMeals._set(meals.value);
  }

  return { meals, addMeal, deleteMeal };
}