<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useFullscreen, useDark } from "@vueuse/core";
const router = useRouter();

import { useAuthStore } from "@/stores/auth";
const store = useAuthStore();

// isFullscreen 全屏状态 false 非  true 全屏
const { isFullscreen, toggle } = useFullscreen();

// 切换全屏
const handleToggleFullScreen = () => {
  toggle();
};

// 初始化主题切换方法
const isDark = useDark({
  valueDark: "dark",
  valueLight: "",
  initialValue: "dark",
});

// 退出登录
const logout = async () => {
  try {
    await store.userLogout();
    // 退出
    // router.push("/login");
  } catch (err) {
    console.log(err);
  }
};

// 点击下拉菜单项触发的事件
// const handleCommand = (command: string | number) => {
//   console.log(command);

//   switch (command) {
//     case "index":
//       router.push("/");
//       break;
//     case "401":
//       router.push("/401");
//       break;
//   }
// };
</script>
<template>
  <div class="layout-header-user">
    <!-- 全屏 -->
    <div class="layout-header-user-icon">
      <svg-icon
        @click="handleToggleFullScreen"
        :icon="isFullscreen ? 'Aim' : 'FullScreen'"
      ></svg-icon>
    </div>
    <!-- 主题切换 -->
    <div class="layout-header-user-icon">
      <el-switch
        v-model="isDark"
        active-icon="moon"
        inline-prompt
        inactive-icon="sunny"
      ></el-switch>
    </div>
    <!-- 下拉菜单 -->
    <el-dropdown>
      <span class="el-dropdown-link" v-if="store.user">
        <el-avatar :size="30" :src="store.user?.imageUrl" />

        <span class="username">{{ store.user?.username }}</span>

        <el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="$router.push('/')">首页</el-dropdown-item>
          <el-dropdown-item @click="$router.push('/401')">401</el-dropdown-item>
          <el-dropdown-item @click="$router.push('/404')">404</el-dropdown-item>
          <el-dropdown-item @click="logout" divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped lang="scss"></style>
