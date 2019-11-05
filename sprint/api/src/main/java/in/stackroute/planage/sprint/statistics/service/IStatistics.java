package in.stackroute.planage.sprint.statistics.service;

import in.stackroute.planage.sprint.kanban.model.Task;
import in.stackroute.planage.sprint.statistics.model.BurnDownChart;
import in.stackroute.planage.sprint.statistics.model.SprintsBoard;
import in.stackroute.planage.sprint.statistics.model.TaskCompletion;

import java.util.Date;
import java.util.List;

public interface IStatistics {

    public void getAllList(String productId, String sprintId, Date startDate, Date endDate, int totalMustTask, int totalTryTask, int totalStretchTask, List<Task>task);
    public BurnDownChart getDataForCharts(String productId, String sprintId);
    public BurnDownChart updateChart(String productId, TaskCompletion taskCompletion);
}