export interface Iburndownchart {

    productId: string;
    sprintId: string;
    List: Array<ITaskCompletion>;

}

interface ITaskCompletion {
    completeDate: string;
    taskMust: string;
    taskTry: string;
    taskstretch: string;

}



