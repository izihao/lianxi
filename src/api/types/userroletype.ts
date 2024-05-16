export type ApifoxModel = {
    code: number;
    data: Data;
    message: string;
    [property: string]: any;
}

export type Data = {
    records: Record[];
    total: number;
    [property: string]: any;
}

export type Record = {
    createTime: string;
    id: number;
    remark: string;
    roleCode: string;
    roleName: string;
    status: boolean;
    updateTime: string;
    [property: string]: any;
}