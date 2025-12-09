<script setup lang="ts">
import ProteinTracker from './components/ProteinTracker.vue';
</script>

<template>
  <van-config-provider theme="dark">
    <protein-tracker />
  </van-config-provider>
</template>

<style>
.van-theme-dark body {
  color: #f5f5f5;
  background-color: #202124;
}
</style>