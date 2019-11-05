import { createSchema, Type } from 'ts-mongoose';
import * as mongoose from 'mongoose';
import { IBoardState } from '../../node_modules/proflo-sprint-lib/lib/board-interface';
import { IColumn } from '../../node_modules/proflo-sprint-lib/lib/column-interface';
import { ITask } from '../../node_modules/proflo-sprint-lib/lib/task-interface';
export const KanbanSchema = createSchema ({ 
    _id: String,
    sprintId: String,
    productId: String,
    productName: String,
    sprintName: String,
    status: String,
    columns: [{
        columnId: String,
        columnName: String,
        tasks: [{
            taskId: String,
            taskName: String,
            taskAssignedTo: String,
            taskTshirtSize: String,
            taskCategory: String,
            completedAt: Date,
            userstoryId: String,
            userstoryName: String
        }]
    }]
});

