<script setup lang="ts">
import { useProtein } from '../composables/useProtein.ts';

const { dailyProtein } = useProtein();
</script>

<template>
  <van-field
    v-model="dailyProtein"
    label="Норма белка"
    placeholder="Введите граммы"
    type="number"
    input-align="right"
    suffix="г"
  />
</template>

<style scoped></style>
