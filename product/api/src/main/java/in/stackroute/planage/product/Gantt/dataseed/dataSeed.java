// package in.stackroute.planage.product.Gantt.dataseed;

// import in.stackroute.planage.product.Gantt.Model.Dependency;
// import in.stackroute.planage.product.Gantt.Model.Gantt;
// import in.stackroute.planage.product.Gantt.Model.Sprint;
// import in.stackroute.planage.product.Gantt.Model.UserStory;
// import in.stackroute.planage.product.Gantt.repository.GanttRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.CommandLineRunner;
// import org.springframework.context.annotation.PropertySource;
// import org.springframework.stereotype.Component;

// import java.util.ArrayList;
// import java.util.Date;

// @PropertySource("classpath:application.properties")
// @Component
// public class dataSeed implements CommandLineRunner {
//    @Autowired
//    GanttRepository ganttRepository;

//    @Override
//    public void run(String... args) throws Exception {
//        Gantt gantt = new Gantt();
//        gantt.setProductId("5daab8c269515b00012e9f8f");
//        gantt.setProductName("Naman Shrimali");


//        Sprint sprint = new Sprint();
//        sprint.setId("1");


//        ArrayList<Sprint> sprintArrayList = new ArrayList<>();
//        sprintArrayList.add(sprint);

//        UserStory userStory = new UserStory();
//        userStory.setId("1");
//        userStory.setUserStoryName("user story 1");
//        userStory.setStartDate(new Date(2015,2,1));
//        userStory.setEndDate(new Date(2015,2,7));
//        userStory.setStatus(false);
//        userStory.setDuration(7);

//        UserStory userStory1 = new UserStory();
//        userStory1.setId("2");
//        userStory1.setUserStoryName("user story 2");
//        userStory1.setStartDate(new Date(2015,2,7));
//        userStory1.setEndDate(new Date(2015,2,14));
//        userStory1.setStatus(false);
//        userStory1.setDuration(7);

//        ArrayList<UserStory> userStoryArrayList = new ArrayList<>();
//        userStoryArrayList.add(userStory);
//        userStoryArrayList.add(userStory1);


//        Dependency dependency = new Dependency();
//        dependency.setUserStoryId("1");

//        ArrayList<Dependency> dependencyArrayList = new ArrayList<>();
//        dependencyArrayList.add(dependency);

//        userStory1.setDependency(dependencyArrayList);
//        sprint.setUserStory(userStoryArrayList);
//        gantt.setSprint(sprintArrayList);


//        ganttRepository.save(gantt);
//    }
// }
