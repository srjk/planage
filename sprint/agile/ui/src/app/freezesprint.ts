export interface Ifreezesprint {
    sprint_id: number;
    sprint_name: string;
    list: Array<IList>;



}
interface IList {
    list_id: number;
    list_name: string;
    task: Array<Itask>;
}

interface Itask {
    task_id: number;
    task_name: string;
    task_assigned_to: string;
    task_tshirt_size: string;
    task_category: string;
}
