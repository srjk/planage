export interface UserStoryInterface {
    id?: string;
    productId: string;
    epicId: string;
    userStoryName: string;
    description?: string;
    tshirtSize?: string;
    dependencies?: [
        {
            id: number;
            story_name: string;
        }
    ];
    priorityLevel?: number;
    unavailable?: boolean;
    percentCompleted?: string;
    startDate?: Date;
    endDate?: Date;
}
