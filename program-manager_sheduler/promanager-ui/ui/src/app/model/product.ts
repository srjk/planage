export interface ProductInterface {
    id: string;
    productName: string;
    createdAt: Date;
    durationWeek: number;
    durationDays: number;
    durationHours: number;
    assignee: number;
    agenda: Array<string>;
    programs: Array<Program>;
    predefinedTask: Array<PredefinedTaskInterface>;
}

export interface Program {
    id: string;
    text: string;
    startDate: Date;
    endDate: Date;
    assignee: Array<AsigneeEmployee>;
    color: string;
}
export interface AsigneeEmployee {
    id: string;
    text: string;
    email: string;

}

export interface Employee {
    text: string;
    id: string;
}
export interface Assignee {
    id: string;
    text: string;
    programId: string;
    programName: string;
    startDate: Date;
    endDate: Date;
    email: string;

}
export interface Session {
    text: string;
    id: string;
    programId: string;
    startDate: Date;
    endDate: Date;
}

export interface TaskInterface {
    taskName: string;
    taskId: string;
    productId: string;
    programId: string;
    dueDate: Date;
    status: boolean;
}

export interface PredefinedTaskInterface {
    id: string;
    programId: string;
    taskName: string;
}


