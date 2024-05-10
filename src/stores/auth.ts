import { defineStore } from "pinia";
import { ref } from "vue";
import type { StateType } from "@/types/login";
import { Local } from "@/utils/storage";
import { login, logout, userInfo } from "@/api/auth";
import type { MenuList, UserInfo } from "@/api/types/authType";

// pinia 选项式api写法 组合式api写法
export const useAuthStore = defineStore(
  "auth",
  () => {
    // 令牌
    const token = ref<string>();
    // 用户信息
    const user = ref<UserInfo>();
    // 菜单数据
    const menuList = ref<MenuList[]>([]);
    // 按钮权限数据
    const buttonList = ref<string[]>([]);

    // 存储token
    const setToken = (value: string) => {
      token.value = value;
    };

    // 删除token
    const removeToken = () => {
      token.value = "";
    };

    // 存储账号与密码
    const setRememberPwd = (state: StateType) => {
      if (state.isRemember) {
        Local.set("username", state.loginForm.username);
        Local.set("password", state.loginForm.password);
        Local.set("isRemember", state.isRemember);
      } else {
        Local.remove("username");
        Local.remove("password");
        Local.remove("isRemember");
      }
    };

    // 登录操作
    const userLogin = async (state: StateType) => {
      try {
        //  调用登录接口
        const res = await login(state.loginForm);
        // 存储token
        setToken(res.data.access_token);
        // 将登录成功的结果返回出去
        return res;
      } catch (err) {
        console.log(err);
      }
    };

    // 获取用户信息
    const getUserInfo = async () => {
      try {
        const res = await userInfo();
        user.value = res.data.userInfo;
        menuList.value = res.data.menuList;
        buttonList.value = res.data.buttonList;
        return res;
      } catch (err) {
        console.log(err);
      }
    };

    // 退出登录
    const userLogout = async () => {
      try {
        const res = await logout();

        resetUserState();

        // 强制刷新
        window.location.reload();

        return res;
      } catch (err) {
        console.log(err);
      }
    };

    // 重置用户状态
    const resetUserState = () => {
      token.value = "";
      user.value = null;
      menuList.value = [];
      buttonList.value = [];
    };

    return {
      token,
      setToken,
      removeToken,
      setRememberPwd,
      userLogin,
      getUserInfo,
      user,
      menuList,
      buttonList,
      userLogout,
    };
  },
  {
    persist: true,
  }
);
