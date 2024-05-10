/**
 * 封装数据存储方法
 * @method set 设置永久缓存
 * @method get 获取永久缓存
 * @method remove 移除永久缓存
 * @method clear 移除全部永久缓存
 */

export const Local = {
  // 设置永久缓存
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value || ""));
  },
  // 获取永久缓存
  get(key: string) {
    let json = localStorage.getItem(key);
    return JSON.parse(json as string);
  },
  // 移除永久缓存
  remove(key: string) {
    localStorage.removeItem(key);
  },
  // 移除全部永久缓存
  clear() {
    localStorage.clear();
  },
};

/**
 * 封装数据存储方法
 * @method set 设置临时缓存
 * @method get 获取临时缓存
 * @method remove 移除临时缓存
 * @method clear 移除全部临时缓存
 */

export const Session = {
  // 设置临时缓存
  set(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value || ""));
  },
  // 获取临时缓存
  get(key: string) {
    let json = sessionStorage.getItem(key);
    return JSON.parse(json as string);
  },
  // 移除临时缓存
  remove(key: string) {
    sessionStorage.removeItem(key);
  },
  // 移除全部临时缓存
  clear() {
    sessionStorage.clear();
  },
};
