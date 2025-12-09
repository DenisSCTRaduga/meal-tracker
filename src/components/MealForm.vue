<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import type { Meal } from '../types/meal.ts';

const emit = defineEmits<{
  (e: 'submit', data: Meal): void;
}>();

const mealName = ref('');
const mealProtein = ref();

const submit = () => {
  if (!mealName.value.trim()) return;

  emit('submit', {
    label: mealName.value.trim(),
    protein: mealProtein.value,
  });

  mealName.value = '';
  mealProtein.value = '';
};
</script>

<template>
  <div class="meal-sidebar">
    <h3 class="title">Новый прием пищи</h3>

    <van-field
      v-model="mealName"
      label="Блюдо"
      placeholder="Например: 2 яйца"
    />

    <van-field
      v-model="mealProtein"
      type="number"
      label="Кол-во белка"
      placeholder="0"
    />

    <van-button type="success" block class="submit" @click="submit">
      Добавить
    </van-button>
  </div>
</template>

<style scoped>
.meal-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 24px 1rem 24px;
}
</style>
