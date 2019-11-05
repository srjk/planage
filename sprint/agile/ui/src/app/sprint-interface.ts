export interface ProductInterface {
  productId?: string;
  productName?: string;
  sprints?: SprintInterface[];
}
export interface SprintInterface {
  sprintId?: string;
  productId?: string;
  sprintname?: string;
  userstory?: UserStoryInterface[];
}

export interface UserStoryInterface {
  userstoryId?: string;
  userstoryName?: string;
  task?: [
    {
      taskId?: string;
      taskName: string;
      taskAssignedTo: string;
      taskCategory: string;
      taskSize: string;
    }
  ];
  noOfCompletedTask: number
}
