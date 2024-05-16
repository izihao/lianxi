export type searchParams = {
    keyword?: string
}
export type ResponseMenuListType = {
    children: DatumChild[];
    code: string;
    component: null | string;
    createTime: string;
    id: string;
    meta: DatumMeta;
    name: string;
    parentId: null;
    path: string;
    redirect: null | string;
    remark: string;
    sort: number;
    type: string;
    updateTime: string;
}
export type DatumChild = {
    children: ChildChild[];
    code: string;
    component: string;
    createTime: string;
    id: string;
    meta: FluffyMeta;
    name: string;
    parentId: string;
    path: string;
    redirect: null;
    remark: string;
    sort: number;
    type: string;
    updateTime: string;
}

export type ChildChild = {
    children: string[];
    code: string;
    createTime: string;
    id: string;
    meta: PurpleMeta;
    name: null;
    parentId: string;
    path: null;
    redirect: null;
    remark: string;
    sort: number;
    type: string;
    updateTime: string;
}

export type PurpleMeta = {
    cache: boolean;
    hidden: boolean;
    icon: null;
    title: string;
}

export type FluffyMeta = {
    cache: boolean;
    hidden: boolean;
    icon: string;
    title: string;
}

export type DatumMeta = {
    cache: boolean;
    hidden: boolean;
    icon: string;
    linkTo: string;
    title: string;
}
