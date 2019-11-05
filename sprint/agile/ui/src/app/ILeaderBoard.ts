export interface ILeaderBoard {
    productId: string;
    sprintId: string;
    List: Array<ITeamMember>;

}

interface ITeamMember {
    taskAssignedTo: string;
    taskMust: string;
    taskTry: string;
    taskstretch: string;

}
