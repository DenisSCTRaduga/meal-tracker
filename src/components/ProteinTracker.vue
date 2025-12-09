<script setup lang="ts">
import { ref, computed } from 'vue';
import HeaderComponent from './HeaderComponent.vue';
import MealForm from './MealForm.vue';
import { useProtein } from '../composables/useProtein.ts';
import { useMeals } from '../composables/useMeals.ts';
import type { Meal } from '../types/meal.ts';

const { dailyProtein } = useProtein();
const { meals, deleteMeal, addMeal } = useMeals();
const isShowForm = ref(false);

const eatenProtein = computed(() => meals.value.reduce((a: number, b: Meal) => a + Number(b.protein || 0), 0));

const remainingProtein = computed(() => {
  const daily = parseFloat(dailyProtein.value);
  if (isNaN(daily)) return 0;

  return Math.max(daily - eatenProtein.value, 0);
})

const proteinProgress = computed(() => {
  const daily = parseInt(dailyProtein.value);
  if (!daily || daily <= 0) return 0;

  const percent = (eatenProtein.value / daily) * 100;
  return Math.min(100, Math.max(0, Math.round(percent)));
});

const addMealHandler = (meal: Meal) => {
  addMeal(meal);
  isShowForm.value = false;
}
</script>

<template>
  <header-component />

  <div class="container">
    <div class="my-4">
      <div class="flex info justify-between mb-4">
        <div>Съедено: {{ eatenProtein }} г</div>
        <div>Осталось: {{ remainingProtein }} г</div>
      </div>
      <van-progress v-if="dailyProtein" :percentage="proteinProgress" />
    </div>

    <van-button block type="primary" class="mb-2" @click="isShowForm = true">
      Добавить прием пищи
    </van-button>

    <van-popup v-model:show="isShowForm" position="top">
      <meal-form @submit="addMealHandler" />
    </van-popup>

    <van-list>
      <van-cell v-for="(meal, i) in meals" :key="i" :title="meal.label" :label="meal.protein">
        <template #extra>
          <van-icon name="cross" @click="deleteMeal(i)" />
        </template>
      </van-cell>
    </van-list>
  </div>
</template>

<style scoped>
.container {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info {
  margin-bottom: 20px;
}

.my-4 {
  margin: 16px 0;
}

.mb-2 {
  margin-bottom: 8px;
}

.flex {
  display: flex;
  justify-content: space-between;
}
</style>
