package in.stackroute.planage.sprint.statistics.service;


import in.stackroute.planage.sprint.kanban.model.FreezeSprint;
//import in.stackroute.planage.sprint.kanban.model.SprintBoard;
import in.stackroute.planage.sprint.kanban.model.Task;
import in.stackroute.planage.sprint.statistics.model.LeaderBoard;


import java.util.List;

public interface ILeaderBoard {
    public void getBoardData(String productId,String sprintId, List<Task> task);
    public LeaderBoard getDataForLeaderBoard(String productId, String sprintId);
}
