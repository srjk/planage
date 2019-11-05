export interface Isprint {
   product_id: string;
   product_name: string;
   sprint_id: string;
   sprint_name: string;
   list: IList[];
}
export interface IList {
   list_id: number;
   list_name: string;
   task: Itask[];
}
export interface Itask {
   task_id: number;
   task_name: string;
   task_assigned_to: string;
   task_tshirt_size: string;
   task_category: string;
}


//  export const INITIAL_STATE: Isprint = {
//    product_id = '';
//    product_name ='';
//    sprint_id = '';
//    sprint_name = '';
//    list = [];

// }
