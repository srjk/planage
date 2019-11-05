import { ColumnInterface } from './column-interface';


export interface SprintBoardInterface {
    sprintId: string;
    productId: string;
    productName: string;
    sprintName: string;
    column: ColumnInterface[];
}

