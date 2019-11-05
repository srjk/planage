import { PriorityStoryInterface } from '../model/priority-story-interface';

export interface SprintInterface {
    sprintId?: string;
    sprintName?: string;
    productId?: string;
    userStories: PriorityStoryInterface[];
}
