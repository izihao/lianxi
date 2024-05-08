<template>
    <el-container>
        <el-aside class="layout-aside" :class="store.collapse ? 'layout-aside-menu-60' : 'layout-aside-menu-200'">
            <layzuo></layzuo>
        </el-aside>
        <el-container direction="vertical">
            <laytop></laytop>
            <layyou></layyou>

        </el-container>
    </el-container>



</template>

<script lang="ts" setup>
import { ref, reactive, defineAsyncComponent, } from "vue";
const layyou = defineAsyncComponent(() => import('./layyou/index.vue'))
const laytop = defineAsyncComponent(() => import('./laytop/index.vue'))
const layzuo = defineAsyncComponent(() => import('./layzuo/index.vue'))
import { useRouter } from 'vue-router'
const router = useRouter()
import { uselayout } from '@/stores/layout'
const store = uselayout()
</script>

<style lang="scss" scoped>
.el-container {
    height: 100vh;
}
</style>