import { TaskInterface } from './task-interface';

export interface ColumnInterface {
    id: string;
    columnName: string;
    task: TaskInterface[];
}
