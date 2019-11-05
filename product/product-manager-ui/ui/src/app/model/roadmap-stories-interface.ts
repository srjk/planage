export interface RoadMapStories {
    id?: string;
    userStoryName: string;
    tshirtSize?: string;
    dependencies?: [
        {
            id: number;
            story_name: string;
        }
    ];
    percentCompleted?: string;
    startDate?: Date;
    endDate?: Date;
    selected?: boolean;
}
