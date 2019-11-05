export interface UserstoryInterface {
  splice(index: any, arg1: number);
  map(arg0: (obj: any, i: any) => any);
  userstoryId?: string;
  userstoryName?: string;
  task: [
    {
      taskId?: string;
      taskName: string;
      taskAssignedTo: string;
      taskCategory: string;
      taskSize: string;
    }
  ];
}
