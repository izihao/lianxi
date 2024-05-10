// 定义登录请求的参数类型
export type LoginParamsType = {
  password: string;
  username: string;
};
// 定义登录返回的数据类型
export type responseLoginType = {
  access_token: string;
};

// 定义用户信息接口返回的数据类型
export type responseUserInfoType = {
  /**
   * 按钮权限列表
   */
  buttonList: string[];
  /**
   * 菜单权限列表
   */
  menuList: MenuList[];
  /**
   * 用户信息
   */
  userInfo: UserInfo;
};

export type MenuList = {
  children: Child[];
  component: string;
  meta: MenuListMeta;
  name: string;
  path: string;
  redirect: null | string;
};

export type Child = {
  children: string[];
  component: string;
  meta: ChildMeta;
  name: string;
  path: string;
  redirect: null;
};

export type ChildMeta = {
  cache: boolean;
  hidden: boolean;
  icon: string;
  title: string;
};

export type MenuListMeta = {
  cache: boolean;
  hidden: boolean;
  icon: string;
  linkTo: string;
  title: string;
};

/**
 * 用户信息
 */
export type UserInfo = {
  /**
   * 图像地址
   */
  imageUrl: string;
  /**
   * 昵称
   */
  nickName: string;
  /**
   * 用户名
   */
  username: string;
} | null;
