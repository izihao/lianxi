import request from '@/utils/request'
import type { ApifoxModel } from '../types/userroletype'


// 获取用户角色
export type userlist = {
    /**
     * 页码
     */
    current: number;
    /**
     * 角色名称
     */
    name: string;
    /**
     * 条数
     */
    size: number;
}
export const getuserrole = (userlist: userlist) => {
    return request<ApifoxModel>('/system/role/search', 'post', userlist)
}

export type adduser = {
    /**
     * 备注
     */
    remark: string;
    /**
     * 角色编码
     */
    roleCode: string;
    /**
     * 角色名称
     */
    roleName: string;
    /**
     * 角色状态
     */
    status: boolean;
}
// 添加
export const adduser = (adduser: adduser) => {
    return request('/system/role', 'post', adduser)
}
// 修改
export type putuser = {
    status: boolean
    roleName: string
    roleCode: string
    remark: string
    id?: number,
    createTime?: string
    updateTime?: string
}
export const putuser = (putuser: putuser) => {
    return request('/system/role', 'put', putuser)
}
export type deluser = {
    /**
     * 角色id
     */
    id: string;
}
export const deluser = (deluser: deluser) => {
    return request(`/system/role/${deluser.id}`, 'delete')
}

