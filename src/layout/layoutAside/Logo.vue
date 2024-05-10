<script setup lang="ts">
import { useLayoutConfig } from "@/stores/layoutConfig";
const store = useLayoutConfig();
</script>

<template>
  <!-- logo -->
  <div class="layout-logo">
    <img
      class="layout-logo-img"
      src="http://vue3.mengxuegu.com/assets/logo-8ba32897.png"
      alt="logo"
    />
    <span v-if="!store.isCollapse">积云-Vue3全家桶项目</span>
  </div>
</template>

<style scoped lang="scss"></style>
