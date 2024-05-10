/**
 *
 *  token
 *      有
 *          进入login, 回到原来的页面
 *          不是登录页面, 直接next
 *
 *              判断有没有用户信息
 *
 *                  没有
 *                      尝试获取
 *                          获取到
 *                              next()
 *                          不能获取到
 *                              next("/login")
 *                  有
 *                      next
 *      没有
 *        进入login 可以进入
 *
 *        进入的是非login  跳转到login
 *
 */

import router from "./router";
import { useAuthStore } from "./stores/auth";
const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  const store = useAuthStore();
  const token = store.token;

  if (token) {
    if (to.path === "/login") {
      return next({ path: from.path });
    } else {
      if (!store.user?.username || store.menuList.length <= 0) {
        const res = await store.getUserInfo();
        if (res?.data?.userInfo!.username) {
          return next();
        } else {
          return next("/login");
        }
      } else {
        return next();
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      return next();
    } else {
      next("/login");
    }
  }
});
