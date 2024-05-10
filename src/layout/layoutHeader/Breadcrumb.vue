<script lang="ts" setup>
// 1. 点击收缩图标 图标进行切花吧
// 2. 图标能够控制菜单的展开与收起

// 确定: 展开  状态
// header 状态
// aside 状态

import { useLayoutConfig } from "@/stores/layoutConfig";
import { onMounted, ref } from "vue";
import {
  onBeforeRouteUpdate,
  useRoute,
  useRouter,
  type RouteLocationNormalized,
  type RouteRecordNormalized,
} from "vue-router";
const route = useRoute();
const router = useRouter();

// 创建一个变量,保存面包屑导航的数据
const breadcrumbList = ref<RouteRecordNormalized[]>();
// 路由更新时触发的方法
onBeforeRouteUpdate((to) => {
  getBreadCrumd(to);
});

// 定义一个方法, 使用这个方法获取路由跳转的信息
const getBreadCrumd = (to: RouteLocationNormalized) => {
  const matched = to.matched.filter(
    (item) => item.meta && item.meta.title && item.meta.icon
  );
  breadcrumbList.value = matched;
};

onMounted(() => {
  getBreadCrumd(route);
});

// 点击面包屑跳转的方法
const handleLink = (_route: RouteRecordNormalized) => {
  const { path, redirect } = _route;

  if (redirect) router.push(redirect as string);
  else router.push(path);
};

// 获取pinia里面菜单展开与收起的状态
const store = useLayoutConfig();

// 点击展开/收起图标切换 控制菜单的展开与收起
const handleChangeCollapse = () => {
  store.isCollapse = !store.isCollapse;
};
</script>
<template>
  <div class="layout-header-breadcrumd">
    <!-- 收缩图标 -->
    <svg-icon
      class="layout-header-expand-icon"
      size="18"
      :icon="store.isCollapse ? 'Expand' : 'Fold'"
      @click="handleChangeCollapse"
    >
    </svg-icon>

    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
        <span
          v-if="index === breadcrumbList!.length - 1"
          class="flex flex-center"
        >
          <svg-icon :icon="item.meta.icon"></svg-icon>
          {{ item.meta.title }}
        </span>

        <a @click.prevent="handleLink(item)" v-else class="flex flex-center">
          <svg-icon :icon="item.meta.icon"></svg-icon>
          {{ item.meta.title }}
        </a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style scoped lang="scss">
// .el-breadcrumb__item {
//   span {
//     display: flex;
//     align-items: center;
//   }
// }
</style>
