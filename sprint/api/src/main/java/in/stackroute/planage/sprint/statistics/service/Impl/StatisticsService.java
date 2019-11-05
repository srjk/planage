package in.stackroute.planage.sprint.statistics.service.Impl;
import in.stackroute.planage.sprint.kanban.model.Task;
import in.stackroute.planage.sprint.statistics.Repository.BurnDownChartRepository;
import in.stackroute.planage.sprint.statistics.Repository.StatisticsRepository;
import in.stackroute.planage.sprint.statistics.model.BurnDownChart;
import in.stackroute.planage.sprint.statistics.model.SprintStats;
import in.stackroute.planage.sprint.statistics.model.TaskCompletion;
import in.stackroute.planage.sprint.statistics.service.IStatistics;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;


@Service
public class StatisticsService implements IStatistics {
    @Autowired
    private StatisticsRepository statisticsRepository;
    private static final Logger log = LoggerFactory.getLogger(SprintStats.class);

    @Autowired
    private BurnDownChartRepository burnDownChartRepository;
    private BurnDownChart burnDownChart;


    @Override
    public void getAllList(String productId, String sprintId, Date startDate, Date endDate, int totalMustTask, int totalTryTask, int totalStretchTask, List<Task> task) {
        System.out.println("$$$$$$"+productId);
        System.out.println(sprintId);
        BurnDownChart burnDownChart = burnDownChartRepository.findByProductIdAndSprintId(productId, sprintId);

        if(burnDownChart != null) {
            // when burn down chart is not null
            Task addedTask = task.get(0);
            //get taskCompletion
            List<TaskCompletion> completedStats = burnDownChart.getTaskCompletion();
            boolean found = false;
            int counter = 0;
                //iterate over taskCompletion
            for(TaskCompletion stat : completedStats) {
                if((stat.getCompleteDate()).toString().substring(0,10).equals((addedTask.getCompletedAt()).toString().substring(0,10))) {
                    found = true;
                    break;
                }
                counter++;
            }
            if(found== true) {
                TaskCompletion alreadyPresentStat = completedStats.get(counter);
                switch (task.get(0).getTaskCategory()) {
                    case "Must":
                        alreadyPresentStat.setTaskMust(alreadyPresentStat.getTaskMust()-1);
                        alreadyPresentStat.setTaskStretch(alreadyPresentStat.getTaskStretch());
                        alreadyPresentStat.setTaskTry(alreadyPresentStat.getTaskTry());
                        break;
                    case "Try":
                        alreadyPresentStat.setTaskTry(alreadyPresentStat.getTaskTry()-1);
                        alreadyPresentStat.setTaskMust(alreadyPresentStat.getTaskMust());
                        alreadyPresentStat.setTaskStretch(alreadyPresentStat.getTaskStretch());
                        break;
                    case "Stretch":
                        alreadyPresentStat.setTaskStretch(alreadyPresentStat.getTaskStretch()-1);
                        alreadyPresentStat.setTaskMust(alreadyPresentStat.getTaskMust());
                        alreadyPresentStat.setTaskTry(alreadyPresentStat.getTaskTry());
                        break;
                }
                completedStats.remove(counter);
                completedStats.add(counter, alreadyPresentStat);
            } else {
                TaskCompletion newStat = new TaskCompletion();
                newStat.setCompleteDate(addedTask.getCompletedAt());
                TaskCompletion lastCompleted =completedStats.get(completedStats.size()-1);
                switch(task.get(0).getTaskCategory()) {
                    case "Must" :
                        newStat.setTaskMust(lastCompleted.getTaskMust()-1);
                        newStat.setTaskStretch(lastCompleted.getTaskStretch());
                        newStat.setTaskTry(lastCompleted.getTaskTry());
                        break;
                    case "Try" :

                        newStat.setTaskMust(lastCompleted.getTaskMust());
                        newStat.setTaskStretch(lastCompleted.getTaskStretch());
                        newStat.setTaskTry(lastCompleted.getTaskTry()-1);
                        break;
                    case "Stretch":
                        newStat.setTaskMust(lastCompleted.getTaskMust());
                        newStat.setTaskStretch(lastCompleted.getTaskStretch()-1);
                        newStat.setTaskTry(lastCompleted.getTaskTry());
                        break;
                }
                completedStats.add(newStat);
                burnDownChart.setTaskCompletion(completedStats);
            }
                   burnDownChartRepository.save(burnDownChart);
                    // if dates matched, then update musts, try, stretch, when counter is 1

        } else {
            // when null
            BurnDownChart newBurnDownChart = new BurnDownChart();
            newBurnDownChart.setProductId(productId);
            newBurnDownChart.setSprintId(sprintId);
            newBurnDownChart.setStartDate(startDate);
            newBurnDownChart.setEndDate(endDate);
            newBurnDownChart.setTotalStretch(totalStretchTask);
            newBurnDownChart.setTotalTry(totalTryTask);
            newBurnDownChart.setTotalMust(totalMustTask);

            List<TaskCompletion> listOfCompletedTask = new ArrayList<>();
            for (Task completedTask : task) {
                TaskCompletion taskCompletion = new TaskCompletion();
                taskCompletion.setCompleteDate(completedTask.getCompletedAt());
                switch (completedTask.getTaskCategory()) {
                    case "Must":
                        taskCompletion.setTaskMust(newBurnDownChart.getTotalMust() -1);
                        taskCompletion.setTaskTry(newBurnDownChart.getTotalTry());
                        taskCompletion.setTaskStretch(newBurnDownChart.getTotalStretch());
                        break;
                    case "Try":

                        taskCompletion.setTaskMust(newBurnDownChart.getTotalMust());
                        taskCompletion.setTaskTry(newBurnDownChart.getTotalTry()-1);
                        taskCompletion.setTaskStretch(newBurnDownChart.getTotalStretch());
                        break;
                    case "Stretch":

                        taskCompletion.setTaskMust(newBurnDownChart.getTotalMust());
                        taskCompletion.setTaskTry(newBurnDownChart.getTotalTry());
                        taskCompletion.setTaskStretch(newBurnDownChart.getTotalStretch()-1);
                        break;
                }
                listOfCompletedTask.add(taskCompletion);
            }
            newBurnDownChart.setTaskCompletion(listOfCompletedTask);
            burnDownChartRepository.save(newBurnDownChart);
        }

        //  System.out.println("******" + sprintId);
//        System.out.println("PRODUCTID"+productId);
//        totalMust = totalMustTask;
//        totalTry = totalTryTask;
//        totalStretch = totalStretchTask;
//        int taskTry = 0, taskMust = 0, taskStretch = 0;
//
//        List<Date> l1 = new ArrayList<>();
//        List<String> dates = new ArrayList<>();
//        for (Task taskList : task) {
//            l1.add(taskList.getCompletedAt());
//            SimpleDateFormat dateFormat = new SimpleDateFormat();
//            System.out.println("DATE"+l1);
//        }
//        Set<Date> uniqueDate = new HashSet<>(l1);
//        System.out.println(uniqueDate);
//        for (Date unique : uniqueDate) {
//            for (Task taskList : task) {
//                if (taskList.getCompletedAt().equals(unique)) {
//                    if (taskList.getTaskCategory().contains("Must")) {
//                        taskMust++;
//                        System.out.println("++++++++++++++++++++"+taskList.getCompletedAt());
//
//                    } else if (taskList.getTaskCategory().contains("Try")) {
//                        taskTry++;
//                        System.out.println("++++++++++++++++++++"+taskList.getCompletedAt());
//
//                    } else {
//                        taskStretch++;
//                        System.out.println("++++++++++++++++++++"+taskList.getCompletedAt());
//
//                    }
//
//                }
//
//            }
//            BurnDownChart burnDownChart = burnDownChartRepository.findByProductIdAndSprintId(productId, sprintId);
//            if (burnDownChart == null) {
//                burnDownChart = new BurnDownChart();
//                burnDownChart.setProductId(productId);
//                burnDownChart.setSprintId(sprintId);
//                burnDownChart.setStartDate(startDate);
//                burnDownChart.setEndDate(endDate);
//                burnDownChart.setTotalMust(totalMustTask);
//                burnDownChart.setTotalTry(totalTryTask);
//                burnDownChart.setTotalStretch(totalStretchTask);
//
//            }
//            int updateMust = totalMust - taskMust;
//            totalMust = updateMust;
//            System.out.println(totalMust);
//            int updateTry = totalTry - taskTry;
//            totalTry = updateTry;
//            System.out.println(totalTry);
//            int updateStretch = totalStretch - taskStretch;
//            totalStretch = updateStretch;
//            System.out.println(totalStretch);
//            System.out.println(unique);
//            System.out.println(updateMust);
//            System.out.println(totalMust);
//            TaskCompletion taskCompletion = new TaskCompletion(unique, updateMust, updateTry, updateStretch);
//            List<TaskCompletion> taskCompletions = burnDownChart.getTaskCompletion();
//            if(taskCompletions == null){
//                taskCompletions = new ArrayList<>();
//            }
//            taskCompletions.add(taskCompletion);
//
//            burnDownChart.setTaskCompletion(taskCompletions);
//            taskMust = 0;
//            taskTry = 0;
//            taskStretch = 0;
//            burnDownChartRepository.save(burnDownChart);
//            System.out.println("************" + burnDownChart);
//
//        }
//

    }


    @Override
    public BurnDownChart getDataForCharts(String productId, String sprintId) {
        BurnDownChart burnDownChart = burnDownChartRepository.findByProductIdAndSprintId(productId, sprintId);
        return burnDownChart;
    }

    @Override
    public BurnDownChart updateChart(String productId, TaskCompletion taskCompletion) {
        BurnDownChart chart1 = burnDownChartRepository.findByProductId(productId);
        List<TaskCompletion> taskCompletions;
        taskCompletions = chart1.getTaskCompletion();
        taskCompletions.add(taskCompletion);
        chart1.setTaskCompletion(taskCompletions);
        return burnDownChartRepository.save(chart1);
    }


}