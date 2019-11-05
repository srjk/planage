package in.stackroute.planage.sprint.statistics.service;


import in.stackroute.planage.sprint.kanban.model.FreezeSprint;
//import in.stackroute.planage.sprint.kanban.model.SprintBoard;
import in.stackroute.planage.sprint.kanban.model.Task;
import in.stackroute.planage.sprint.statistics.model.SprintStats;
//import in.stackroute.planage.sprint.statistics.model.SprintsBoard;
import in.stackroute.planage.sprint.statistics.model.VelocityChart;

import java.util.List;

public interface IVelocityChart {

    public void getKanbanBoardData(int taskCount, String productId, String sprintId, String sprintName, String productName, List<Task> task);
    public VelocityChart enterChartData(VelocityChart velocitychart);
    public VelocityChart updateProductById(String productId, SprintStats sprintStats);
    public VelocityChart getProductById(String productId);


}
