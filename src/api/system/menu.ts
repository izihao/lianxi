import request from '@/utils/request'
import type { ResponseMenuListType, searchParams } from '@/api/types/menuType'
import type {ApifoxModel} from '@/api/system/selectType'

export const getmenus = (searchParams: searchParams) => {
    return request<ResponseMenuListType>('system/menu/search', 'post', searchParams)
}

export const delMenu=( id:string|number)=>{
    return request<ResponseMenuListType>(`system/menu/${id}`, 'delete')
}

export const selectMenu=() =>{
    return request<ApifoxModel>('system/menu/select','get')
}