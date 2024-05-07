
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const dynamicRoutes:RouteRecordRaw[]=[
  {
    path:'/',
    name:'layout',
    component:()=>import('../layout/left.vue'),
    redirect:'/home',
    children:[
      {
        path:'/home',
        name:'home',
        component:()=>import('../views/index/index.vue'),
        meta:{
          title:'首页',
          icon:'muns',
          cache:false,
          hidden:false,
        }
      },
      {
        path:'/system',
        name:'system',
        redirect:'/system/menu',
        meta:{
          title:'系统管理',
          icon:'menu',
          cache:false,
          hidden:false,
        },
        children:[
          {
            path:'/system/menu',
            name:'menu',
            component:()=>import('../views/system/systemmenu.vue'),
            meta:{
              title:'菜单管理',
              icon:'menu',
              cache:false,
              hidden:false,
            }
          },
          {
            path:'/system/role',
            name:'role',
            component:()=>import('../views/system/systemrole.vue'),
            meta:{
              title:'角色管理',
              icon:'menu',
              cache:false,
              hidden:false,
            }
          },
          {
            path:'/system/user',
            name:'user',
            component:()=>import('../views/system/systemuser.vue'),
            meta:{
              title:'用户管理',
              icon:'menu',
              cache:false,
              hidden:false,
            }
          },
        ]
      },
      {
        path:'/goods',
        name:'goods',
        redirect:'/goods/list',
        meta:{
          title:'商品管理',
          icon:'menu',
          cache:false,
          hidden:false,
        },
        children:[
          {
            path:'/goods/list',
            name:'list',
            component:()=>import('../views/goods/goodslist.vue'),
            meta:{
              title:'商品列表',
              icon:'menu',
              cache:false,
              hidden:false,
            }
          },
          {
            path:'/goods/category',
            name:'category',
            component:()=>import('../views/goods/goodscategory.vue'),
            meta:{
              title:'商品分类',
              icon:'menu',
              cache:false,
              hidden:false,
            }
          }
        ]
      },
      {
        path:'/mengxuegu',
        name:'mengxuegu',
        redirect:'/mengxuegu/mengxuegu',
        meta:{
          title:'梦学谷',
          icon:'menu',
          cache:false,
          hidden:false,
        },
        children:[
          {
            path:'/mengxuegu/mengxuegu',
            name:'index',
            component:()=>import('../views/mengxuegu/mengxuegu.vue'),
            meta:{
              title:'梦学谷官网',
              icon:'menu',
              cache:true,
              hidden:true,
            }
          },
        ]
      },
      {
        path:'/401',
        name:'401',
        redirect:'/401/401',
        meta:{
          title:'关于',
          icon:'menu',
          cache:false,
          hidden:false,
        },
        children:[
          {
            path:'/401/401',
            name:'401',
            component:()=>import('../views/401/401.vue'),
            meta:{
              title:'401',
              icon:'menu',
              cache:true,
              hidden:true,
            }
          }
        ]
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: dynamicRoutes
})

export default router
