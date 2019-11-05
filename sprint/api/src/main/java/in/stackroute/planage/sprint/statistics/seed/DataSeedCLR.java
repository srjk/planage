//package in.stackroute.planage.sprint.statistics.seed;
//
//
//import in.stackroute.planage.sprint.statistics.Repository.StatisticsRepository;
//import in.stackroute.planage.sprint.statistics.model.ColumnList;
//import in.stackroute.planage.sprint.statistics.model.SprintsBoard;
//import in.stackroute.planage.sprint.statistics.model.Task;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.context.annotation.PropertySource;
//import org.springframework.stereotype.Component;
//
//
//import java.text.DateFormat;
//import java.text.SimpleDateFormat;
//import java.util.ArrayList;
//import java.util.Date;
//import java.util.List;
//
//@PropertySource("classpath:application.properties")
//@Component
//public class DataSeedCLR implements CommandLineRunner {
//    @Autowired
//    private StatisticsRepository statisticsRepository;
// DateFormat df = new SimpleDateFormat("dd/MM/yy");
//        Date dateobj =new Date();
//
//    @Override
//    public void run(String... args) throws Exception {
//        List<ColumnList> columnList = new ArrayList<>();
//        List<Task> task1 = new ArrayList<>();
//
//        Task taskOne = new Task();
//        taskOne.setTaskId("1");
//        taskOne.setTaskCategory("Must");
//        taskOne.setTaskName("Task1");
//        taskOne.setTaskAssignedTo("Apurva");
//        taskOne.setTaskTshirtSize("Medium");
//       // taskOne.setCompletedAt("28-08-2019");
//        task1.add(taskOne);
//
//        Task taskTwo = new Task();
//        taskTwo.setTaskId("2");
//        taskTwo.setTaskCategory("Must");
//        taskTwo.setTaskName("Task2");
//        taskTwo.setTaskAssignedTo("Riya");
//        taskTwo.setTaskTshirtSize("Medium");
//       // taskOne.setCompletedAt("28-08-2019");
//        task1.add(taskTwo);
//
//        ColumnList columnOne = new ColumnList();
//        columnOne.setListId("1");
//        columnOne.setListName("ToDo");
//        columnOne.setTask(task1);
//
//        List<Task> task2 = new ArrayList<>();
//
//        Task taskThree = new Task();
//        taskThree.setTaskId("3");
//        taskThree.setTaskCategory("Try");
//        taskThree.setTaskName("Task3");
//        taskThree.setTaskAssignedTo("Rishu");
//        taskThree.setTaskTshirtSize("High");
//      //  taskThree.setCompletedAt("28-08-2019");
//        task2.add(taskThree);
//
//        Task taskFour = new Task();
//        taskFour.setTaskId("4");
//        taskFour.setTaskCategory("Stretch");
//        taskFour.setTaskName("Task4");
//        taskFour.setTaskAssignedTo("Ayush");
//        taskFour.setTaskTshirtSize("Low");
//       // taskFour.setCompletedAt("28-08-2019");
//        task2.add(taskFour);
//
//
//        ColumnList columnTwo = new ColumnList();
//        columnTwo.setListId("2");
//        columnTwo.setListName("Work In Progress");
//        columnTwo.setTask(task2);
//
//        List<Task> task3 = new ArrayList<>();
//        Task taskFive = new Task();
//        taskFive.setTaskId("5");
//        taskFive.setTaskCategory("Must");
//        taskFive.setTaskName("Task5");
//        taskFive.setTaskAssignedTo("Riya");
//        taskFive.setTaskTshirtSize("Medium");
//       // taskFive.setCompletedAt("28-08-2019");
//        task3.add(taskFive);
//
//        Task taskSix = new Task();
//        taskSix.setTaskId("6");
//        taskSix.setTaskCategory("Try");
//        taskSix.setTaskName("Task6");
//        taskSix.setTaskAssignedTo("Rishu");
//        taskSix.setTaskTshirtSize("Medium");
//       // taskSix.setCompletedAt("28-08-2019");
//        task3.add(taskSix);
//
//        ColumnList columnThree = new ColumnList();
//        columnThree.setListId("3");
//        columnThree.setListName("Review");
//        columnThree.setTask(task3);
//
//        List<Task> task4 = new ArrayList<>();
//
//        Task taskSeven = new Task();
//        taskSeven.setTaskId("7");
//        taskSeven.setTaskCategory("Try");
//        taskSeven.setTaskName("Task7");
//        taskSeven.setTaskAssignedTo("Apurva");
//        taskSeven.setTaskTshirtSize("Low");
//        taskSeven.setCompletedAt(dateobj);
//        task4.add(taskSeven);
//
//        Task taskEight = new Task();
//        taskEight.setTaskId("8");
//        taskEight.setTaskCategory("Stretch");
//        taskEight.setTaskName("Task8");
//        taskEight.setTaskAssignedTo("Riya");
//        taskEight.setTaskTshirtSize("Medium");
//        taskEight.setCompletedAt(dateobj);
//        task4.add(taskEight);
//
//        Task taskNine = new Task();
//        taskNine.setTaskId("9");
//        taskNine.setTaskCategory("Must");
//        taskNine.setTaskName("Task9");
//        taskNine.setTaskAssignedTo("Rishu");
//        taskNine.setTaskTshirtSize("Medium");
//        taskNine.setCompletedAt(dateobj);
//        task4.add(taskNine);
//
//        Task taskTen = new Task();
//        taskTen.setTaskId("10");
//        taskTen.setTaskCategory("Stretch");
//        taskTen.setTaskName("Task10");
//        taskTen.setTaskAssignedTo("Riya");
//        taskTen.setTaskTshirtSize("High");
//        taskTen.setCompletedAt(dateobj);
//        task4.add(taskTen);
//
//        Task taskEleven = new Task();
//        taskEleven.setTaskId("11");
//        taskEleven.setTaskCategory("Must");
//        taskEleven.setTaskName("Task2");
//        taskEleven.setTaskAssignedTo("Ayush");
//        taskEleven.setTaskTshirtSize("High");
//        taskEleven.setCompletedAt(dateobj);
//        task4.add(taskEleven);
//
//        Task taskTwelve = new Task();
//        taskTwelve.setTaskId("12");
//        taskTwelve.setTaskCategory("Try");
//        taskTwelve.setTaskName("Task12");
//        taskTwelve.setTaskAssignedTo("Riya");
//        taskTwelve.setTaskTshirtSize("Low");
//        taskTwelve.setCompletedAt(dateobj);
//        task4.add(taskTwelve);
//
//        ColumnList columnFour = new ColumnList();
//        columnFour.setListId("4");
//        columnFour.setListName("Done");
//        columnFour.setTask(task4);
//
//        columnList.add(columnOne);
//        columnList.add(columnTwo);
//        columnList.add(columnThree);
//        columnList.add(columnFour);
//        SprintsBoard sprintBoard = new SprintsBoard("1","ABC","1","sprint1",dateobj,dateobj);
//        sprintBoard.setColumnList(columnList);
//        statisticsRepository.save(sprintBoard);
//
//
//    }
//}
//
