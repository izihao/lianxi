<template>
    <div class="zuo">
        <img src="http://vue3.mengxuegu.com/assets/logo-8ba32897.png" alt="">
        <span v-show="!store.collapse">
            积云-vue3全家桶项目
        </span>

    </div>
    <div class="box">
        <el-menu :collapse="store.collapse" active-text-color="#ffd04b" background-color="transparent"
            class="el-menu-vertical-demo" text-color="#fff" router :default-active="$route.path"
            :default-openeds="['/system']">
            <el-menu-item index="/home">
                <el-icon>
                    <HomeFilled />
                </el-icon>
                <span>首页</span>
            </el-menu-item>
            <el-sub-menu index="/system">
                <template #title>
                    <el-icon>
                        <Setting />
                    </el-icon>
                    <span>系统管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/system/menu">
                        <svgicon icon="Menu"></svgicon>
                        菜单管理
                    </el-menu-item>
                    <el-menu-item index="/system/role">
                        <svgicon icon="IceCream"></svgicon>
                        角色管理
                    </el-menu-item>
                    <el-menu-item index="/system/user">
                        <svgicon icon="User"></svgicon>
                        用户管理
                    </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="/goods">
                <template #title>
                    <el-icon>
                        <ShoppingBag />
                    </el-icon>
                    <span>商品管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/goods/list">
                        <svgicon icon="GoodsFilled"></svgicon>
                        商品列表
                    </el-menu-item>
                    <el-menu-item index="/goods/category">
                        <svgicon icon="Operation"></svgicon>
                        商品分类
                    </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-menu-item index="/mengxuegu/mengxuegu">
                <el-icon>
                    <Link />
                </el-icon>
                <span>梦学古官网</span>
            </el-menu-item>
            <el-menu-item index="/401/401">
                <el-icon>
                    <Warning />
                </el-icon>
                <span>401页面</span>
            </el-menu-item>
        </el-menu>
    </div>

</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { uselayout } from '@/stores/layout'
const store = uselayout()
</script>

<style lang="scss">
.zuo {
    width: 100%;
    height: 100vh;
    display: flex;
    // background-color: skyblue;
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