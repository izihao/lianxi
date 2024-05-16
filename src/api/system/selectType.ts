export type ApifoxModel = {
    code:    number;
    data:    Datum[];
    message: string;
    [property: string]: any;
}

export type Datum = {
    children: Child[];
    id:       string;
    parentId: null;
    title:    string;
    [property: string]: any;
}

export type Child = {
    children: string[];
    id:       string;
    parentId: string;
    title:    string;
    [property: string]: any;
}