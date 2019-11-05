//package in.stackroute.planage.sprint.sprintPlanning.seed;
//
//import in.stackroute.planage.sprint.sprintPlanning.model.Sprint;
//import in.stackroute.planage.sprint.sprintPlanning.model.Task;
//import in.stackroute.planage.sprint.sprintPlanning.model.Userstory;
//import in.stackroute.planage.sprint.sprintPlanning.repository.SprintRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.context.annotation.PropertySource;
//import org.springframework.stereotype.Component;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@PropertySource("classpath:application.properties")
//@Component
//public class DataSeed implements CommandLineRunner {
//    @Autowired
//    private SprintRepository sprintRepository;
//
//    @Override
//    public void run(String... args) throws Exception {
//
//        List<Task> task = new ArrayList<>();
//        List<Userstory> userstories =new ArrayList<>();
//
////        Task task1 =new Task();
////        task1.setTaskId("1");
////        task1.setTaskName("Task 1");
////        task1.setTaskAssignedTo("Person 1");
////        task1.setTaskCategory("Must");
////        task1.setTaskSize("Small");
////        task.add(task1);
//
//        Userstory userstory1=new Userstory();
//        userstory1.setUserstoryId("1");
//        userstory1.setUserstoryName("Userstory 1");
//        userstory1.setTask(task);
//
//        Userstory userstory2=new Userstory();
//        userstory2.setUserstoryId("2");
//        userstory2.setUserstoryName("Userstory 2");
//        userstory2.setTask(task);
//
//        Userstory userstory3=new Userstory();
//        userstory3.setUserstoryId("3");
//        userstory3.setUserstoryName("Userstory 3");
//        userstory3.setTask(task);
//
//        userstories.add(userstory1);
//        userstories.add(userstory2);
//        userstories.add(userstory3);
//
//
//        Sprint sprint1 =new Sprint();
//        sprint1.setProductId("1");
//        sprint1.setSprintId("1");
//        sprint1.setSprintName("Sprint 1");
//        sprint1.setUserstory(userstories);
//
//        Sprint sprint2 =new Sprint();
//        sprint2.setProductId("1");
//        sprint2.setSprintId("2");
//        sprint2.setSprintName("Sprint 2");
//        sprint2.setUserstory(userstories);
//
//        Sprint sprint3 =new Sprint();
//        sprint3.setProductId("1");
//        sprint3.setSprintId("3");
//        sprint3.setSprintName("Sprint 3");
//        sprint3.setUserstory(userstories);
//
//        Sprint sprint4 =new Sprint();
//        sprint4.setProductId("1");
//        sprint4.setSprintId("4");
//        sprint4.setSprintName("Sprint 4");
//        sprint4.setUserstory(userstories);
//
//        Sprint sprint5 =new Sprint();
//        sprint5.setProductId("2");
//        sprint5.setSprintId("5");
//        sprint5.setSprintName("Sprint One");
//        sprint5.setUserstory(userstories);
//
//        Sprint sprint6 =new Sprint();
//        sprint6.setProductId("2");
//        sprint6.setSprintId("6");
//        sprint6.setSprintName("Sprint Two");
//        sprint6.setUserstory(userstories);
//
//        Sprint sprint7 =new Sprint();
//        sprint7.setProductId("2");
//        sprint7.setSprintId("7");
//        sprint7.setSprintName("Sprint Three");
//        sprint7.setUserstory(userstories);
//
//        Sprint sprint8=new Sprint();
//        sprint8.setProductId("2");
//        sprint8.setSprintId("8");
//        sprint8.setSprintName("Sprint Four");
//        sprint8.setUserstory(userstories);
//
//        sprintRepository.save(sprint1);
//        sprintRepository.save(sprint2);
//        sprintRepository.save(sprint3);
//        sprintRepository.save(sprint4);
//        sprintRepository.save(sprint5);
//        sprintRepository.save(sprint6);
//        sprintRepository.save(sprint7);
//        sprintRepository.save(sprint8);
//
//
//
//
//
//
//
//    }
//}
