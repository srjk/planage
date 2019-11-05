export interface User {
    id:string,
    userName:string,
    userEmail:string,
    productList: UserProduct[]
}

export interface UserProduct {
    productName?: string,
    productId?: string,
    client?:string
}