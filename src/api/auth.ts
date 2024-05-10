import request from "@/utils/request";
import type {
  LoginParamsType,
  responseLoginType,
  responseUserInfoType,
} from "./types/authType";

/**
 * 登录接口
 * @param loginParams
 * @returns
 */
export const login = (loginParams: LoginParamsType) => {
  return request<responseLoginType>("/auth/token", "POST", loginParams);
};

/**
 * 获取用户信息接口
 * @returns
 */
export const userInfo = () => {
  return request<responseUserInfoType>("/system/menu/user", "GET");
};

/**
 * 退出登录接口
 */
export const logout = () => {
  return request("/auth/logout", "POST");
};
