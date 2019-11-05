package in.stackroute.planage.sprint.statistics.service.Impl;
import in.stackroute.planage.sprint.kanban.model.Column;
import in.stackroute.planage.sprint.kanban.model.FreezeSprint;
import in.stackroute.planage.sprint.kanban.model.SprintBoard;
import in.stackroute.planage.sprint.kanban.model.Task;
//import in.stackroute.planage.sprint.statistics.Repository.StatisticsRepository;
import in.stackroute.planage.sprint.statistics.Repository.VelocityChartRepository;
import in.stackroute.planage.sprint.statistics.model.*;

import in.stackroute.planage.sprint.statistics.service.IVelocityChart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class VelocityChartService implements IVelocityChart {

    @Autowired
    private VelocityChartRepository velocityChartRepository;

    private VelocityChart velocityChart;

    int taskCommitted=0,taskCompleted=0;
    String sprintId="";
    String sprintName="";

    @Override
    public void getKanbanBoardData(int taskCount,String productId, String sprintId,String sprintName, String productName,List<Task> task) {
//        velocityChart = new VelocityChart();
//        velocityChart.setProductId(productId);
//        velocityChart.setProductName(productName);
        taskCommitted= taskCount;
        System.out.println("tcdhgfcjgvhj"+taskCommitted);
        for (Task taskList : task) {
            taskCompleted++;
        }
        System.out.println(taskCompleted);
        VelocityChart velocityChart = velocityChartRepository.findByProductId(productId);
        if (velocityChart == null){
            velocityChart = new VelocityChart();
        velocityChart.setProductId(productId);
        velocityChart.setProductName(productName);
        }
        SprintStats sprintStats = new SprintStats(sprintId, sprintName, taskCommitted, taskCompleted);
        List<SprintStats> statsData = velocityChart.getSprintStats();
        if(statsData== null){
            statsData = new ArrayList<>();
        }
        statsData.add(sprintStats);
        velocityChart.setSprintStats(statsData);
        velocityChartRepository.save(velocityChart);
        taskCommitted=0;
        taskCompleted=0;
    }

    @Override
    public VelocityChart enterChartData(VelocityChart velocitychart) {

        return velocityChartRepository.save(velocitychart);
    }

    @Override
    public VelocityChart updateProductById(String productId, SprintStats sprint) {
        VelocityChart chart = velocityChartRepository.findByProductId(productId);
        List<SprintStats> sprintList;
        sprintList =chart.getSprintStats();
        sprintList.add(sprint);
        chart.setSprintStats(sprintList);
        return velocityChartRepository.save(chart);

    }

    @Override
    public VelocityChart getProductById(String productId) {
        VelocityChart velocityChart = velocityChartRepository.findByProductId(productId);
        return velocityChart;

    }


}
