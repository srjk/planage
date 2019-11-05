import { PriorityStoryInterface } from './priority-story-interface';

export interface EpicDataInterface {
            epicID: string;
            epicName: string;
            prioritizedUserStories: PriorityStoryInterface[];
}
