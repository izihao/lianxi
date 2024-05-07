import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse, type InternalAxiosRequestConfig, type Method } from "axios";

export const service: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000,
})

// 请求拦截
service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config;
    }, (error: AxiosError) => {
        return Promise.reject(error);
    }
)
// 相应拦截
service.interceptors.response.use(
    (response: AxiosResponse) => {
        return response.data;
    }, (error: AxiosError) => {
        return Promise.reject(error);
    }
)
type Datatype<T = any> = {
    code: number;
    msg: string;
    data: T;
}
const request = <T=any> (url: string, method: Method = 'get', data?: object, options?:AxiosRequestConfig) => {
   return service.request<T,Datatype<T>>({
        url,
        method,
        [method == "get"?"params":"data"]:data,
        ...options
    })
}
export const get = <T=any> (url: string,data?:object) => {
    return request<T>(url, 'get',data)    
}
export const post = <T=any> (url: string,data?:object) => {
    return request<T>(url, 'post',data)    
}
export const put = <T=any> (url: string,data?:object) => {
    return request<T>(url, 'put',data)    
}
export const del = <T=any> (url: string,data?:object) => {
    return request<T>(url, 'delete',data)    
}

export default request;