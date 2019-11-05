export interface Products {
    id?:string;
    productName?:string;
    description?:string;
    client?:string;
    deadline?:Date;
    productManagerEmail?:String;
    teams?:Team[];   
}

export interface Team{
    memberId?:string;
    userId?:string;
    memberName?:string;
    memberEmail?:String;
    result?
}