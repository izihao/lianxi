import { defineStore } from "pinia";
import { ref } from "vue";

export const useLayoutConfig = defineStore("layoutConfig", () => {
  // false 为展开 true 收起
  const isCollapse = ref(false);

  return {
    isCollapse,
  };
});
