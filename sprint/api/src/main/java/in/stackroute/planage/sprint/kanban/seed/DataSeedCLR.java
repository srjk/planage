//package in.stackroute.planage.sprint.kanban.seed;
//
//import in.stackroute.planage.sprint.kanban.model.Column;
//import in.stackroute.planage.sprint.kanban.model.SprintBoard;
//import in.stackroute.planage.sprint.kanban.model.Task;
//import in.stackroute.planage.sprint.kanban.repository.SprintBoardRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.context.annotation.PropertySource;
//import org.springframework.stereotype.Component;
//
//import java.util.ArrayList;
//import java.util.List;
//
//
//@PropertySource("classpath:application.properties")
//@Component
//public class DataSeedCLR implements CommandLineRunner{
//
//    @Autowired
//    private SprintBoardRepository sprintBoardRepository;
//
//
//    @Override
//    public void run(String... args) throws Exception {
//        Column columnOne = new Column();
//        columnOne.setColumnName("Column One");
//        Column columnTwo = new Column();
//        columnTwo.setColumnName("Column Two");
//        Column columnThree = new Column();
//        columnThree.setColumnName("Column Two");
//
//        Task taskOne = new Task();
//        taskOne.setTaskName("Task One");
//        Task taskTwo = new Task();
//        taskTwo.setTaskName("Task Two");
//        Task taskThree= new Task();
//        taskThree.setTaskName("Task One");
//        Task taskFour = new Task();
//        taskFour.setTaskName("Task Two");
//        List<Column> columns= new ArrayList<>();
//        columns.add(columnOne);
//        columns.add(columnTwo);
//        columns.add(columnThree);
//
//        List<Task>tasks=new ArrayList<>();
//        tasks.add(taskOne);
//        tasks.add(taskTwo);
//        tasks.add(taskThree);
//        tasks.add(taskFour);
//
//        columnOne.setTasks(tasks);
//
//        SprintBoard sprintBoard= new SprintBoard();
//        sprintBoard.setColumn(columns);
//
//        sprintBoardRepository.save(sprintBoard);
//    }
//}