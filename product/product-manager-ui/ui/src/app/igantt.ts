export interface Gantt {
    id?:string;
    productName?:string;
    productId?:string;
    sprint?:Sprint[];
    
}

interface Sprint{
    id?:String;
    status?:boolean;
    userStory?:UserStory[];
}

interface UserStory{
    id?:String;
    userStoryName?:string;
    startDate?:Date;
    endDate?:Date;
    duration?:number;
    percentComplete?:number;
    dependency?:Dependency[];

}
 
interface Dependency{
    id?:string;
    userStoryName?:string;
    userStoryId?:string;
}