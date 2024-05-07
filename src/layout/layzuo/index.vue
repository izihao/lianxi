<template>
    <div class="zuo">
        <img src="http://vue3.mengxuegu.com/assets/logo-8ba32897.png" alt="">
        <span>
            积云-vue3全家桶项目
        </span>

    </div>
    <div class="box">
        <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" text-color="#fff"
            router :default-active="$route.path" :default-openeds="['/system']">
            <el-menu-item index="/home">
                <el-icon><icon-menu /></el-icon>
                <span>首页</span>
            </el-menu-item>
            <el-sub-menu index="/system">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>系统管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/system/menu">菜单管理</el-menu-item>
                    <el-menu-item index="/system/role">角色管理</el-menu-item>
                    <el-menu-item index="/system/user">用户管理</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="/goods">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>商品管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/goods/list">商品列表</el-menu-item>
                    <el-menu-item index="/goods/category">商品分类</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-menu-item index="/mengxuegu/mengxuegu">
                <el-icon><icon-menu /></el-icon>
                <span>梦学古官网</span>
            </el-menu-item>
            <el-menu-item index="/401/401">
                <el-icon><icon-menu /></el-icon>
                <span>401页面</span>
            </el-menu-item>
        </el-menu>
    </div>

</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";

</script>

<style lang="scss">
.zuo {
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: skyblue;
    height: 50px;
    align-items: center;
    justify-content: center;

    img {
        width: 26px;
        height: 26px;
    }

    .span {
        display: inline-block;
        margin-left: 5px;
        font-size: 16px;

    }
}
</style>