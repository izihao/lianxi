import request from "@/utils/request";

export const aaa=()=>{
    return request("/plist",'get')
}