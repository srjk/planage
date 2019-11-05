//package in.stackroute.planage.sprint.sprintPlanning.service.Impl;
//
//import in.stackroute.planage.sprint.sprintPlanning.model.Sprint;
//import in.stackroute.planage.sprint.sprintPlanning.model.Task;
//import in.stackroute.planage.sprint.sprintPlanning.model.Userstory;
//import in.stackroute.planage.sprint.sprintPlanning.repository.SprintRepository;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import java.util.List;
//import java.util.Optional;
//
//import static org.junit.Assert.assertEquals;
//import static org.mockito.Mockito.*;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//
//public class SprintServiceTest {
//
//    List list;
//
//
//
//    Task task;
//    List<Userstory> uslist;
//    @Autowired
//    private SprintService sprintService;
//
//    @MockBean
//    private SprintRepository sprintRepository;
//
////    @Test
////    public void getUserstory() {
////        when(sprintRepository.findBySprintIdAndProductId("sprintId", "productId")).thenReturn((sprint));
////        assertEquals(list,sprintService.getUserstory("sprintId", "productId"));
////    }
////
////    @Test
////    public void deleteUserstory() {
////        when(sprintRepository.findBySprintIdAndProductId("productId", "sprintId")).thenReturn(java.util.Optional.ofNullable((sprint)));
////        assertEquals(list,sprintService.deleteUserstory("productId","sprintId", "userstoryId"));
////    }
//
//    @Test
//    public void addTask() {
//        Optional<Sprint> sprint= Optional.of(new Sprint("1", "1", "sprint", uslist));
//         when(sprintRepository.findBySprintIdAndProductId("productId", "sprintId")).thenReturn((sprint));
//        assertEquals(list, sprintService.addTasks("productId", "sprintId", "userstoryId", task));
//    }
//
////    @Test
////    public void deleteTask() {
////        when(sprintRepository.findBySprintIdAndProductId("productId", "sprintId")).thenReturn(java.util.Optional.ofNullable((sprint)));
////        assertEquals(list,sprintService.deleteTask("productId", "sprintId", "userstoryId", "taskId"));
////    }
//
//}