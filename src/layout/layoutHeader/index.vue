<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const Breadcrumb = defineAsyncComponent(() => import("./Breadcrumb.vue"));
const UserDropdown = defineAsyncComponent(() => import("./UserDropdown.vue"));
</script>

<template>
  <el-header class="layout-header">
    <div class="layout-header-index">
      <!-- 面包屑  left 菜单展开与收起的图表 以及 面包屑导航-->
      <Breadcrumb></Breadcrumb>
      <!-- 右侧下拉菜单 right 全屏 主题切换 菜单下拉 -->
      <UserDropdown></UserDropdown>
    </div>
  </el-header>
</template>

<style scoped lang="scss"></style>
