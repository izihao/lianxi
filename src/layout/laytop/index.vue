<template>
    <el-header class="layout-header">
        <div class="layout-header-index">
            <div class="layout-header-expand-icon">
                <svgicon :icon="store.collapse ? 'Expand' : 'Fold'" @click="dj"></svgicon>

                <el-breadcrumb separator="/">
                    <el-breadcrumb-item v-for="(item, index) in list" :key="index">
                        <svgicon :icon="item.meta.icon"></svgicon>
                        {{ item.meta.title }}
                    </el-breadcrumb-item>
                </el-breadcrumb>

            </div>
            <div class="layout-header-user">
                <div class="layout-header-user-icon">
                    <svgicon icon="FullScreen"></svgicon>
                </div>
                <div class="layout-header-user-icon">
                    <el-switch />
                </div>
                <el-dropdown @command="handleCommand">
                    <span class="el-dropdown-link">
                        <el-avatar :size="30"
                            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
                        <span class="username">张三</span>

                        <el-icon class="el-icon--right"><arrow-down /></el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item command="a">Action 1</el-dropdown-item>
                            <el-dropdown-item command="b">Action 2</el-dropdown-item>
                            <el-dropdown-item command="c">Action 3</el-dropdown-item>
                            <el-dropdown-item command="d" disabled>Action 4</el-dropdown-item>
                            <el-dropdown-item command="e" divided>Action 5</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </el-header>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { uselayout } from '@/stores/layout'
const store = uselayout()
const dj = () => {
    store.collapse = !store.collapse
}
const list = ref<RouteRecordNormalized[]>([])
import { onBeforeRouteUpdate, useRouter, type RouteLocationNormalized, type RouteRecordNormalized, } from 'vue-router'
const router = useRouter()
onBeforeRouteUpdate((to) => {
    lyapi(to)
})
const lyapi = (to: RouteLocationNormalized) => {
    const ly = to.matched.filter(item => item.meta.title && item.meta.icon && item.meta)
    list.value = ly
}
const gokai = ref(false)
const handleCommand = () => {
    alert("123");
};
</script>




<style lang="scss" scoped>
.laytop {
    background-color: red;
    width: 100%;
    height: 100px;
}
</style>