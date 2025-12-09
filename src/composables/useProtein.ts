import { ref, watch } from 'vue';

const STORAGE_KEY = 'dailyProtein';

export const useProtein = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  const dailyProtein = ref<string>(saved ?? '');

  watch(
    dailyProtein,
    (val) => {
      if (val && val.trim() !== '') {
        localStorage.setItem(STORAGE_KEY, val);
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    },
    { immediate: true },
  );

  const setDailyProtein = (value: string) => {
    dailyProtein.value = value;
  };

  const resetDailyProtein = () => {
    dailyProtein.value = '';
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    dailyProtein,
    setDailyProtein,
    resetDailyProtein,
  };
};
