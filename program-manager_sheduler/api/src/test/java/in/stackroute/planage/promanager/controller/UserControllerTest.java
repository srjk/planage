//package in.stackroute.plange.promanager.controller;
//
//import in.stackroute.plange.promanager.model.User;
//import in.stackroute.plange.promanager.service.UserService;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.mockito.MockitoAnnotations;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.MediaType;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.MockMvcBuilder;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//
//import static org.mockito.Mockito.times;
//import static org.mockito.Mockito.verify;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import static org.junit.Assert.*;
//import static org.mockito.Mockito.when;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//@RunWith(SpringRunner.class)
//@WebMvcTest(UserController.class)
//public class UserControllerTest {
//
//  @Autowired
//  private MockMvc mockMvc;
//  @MockBean
//  private UserService userService;
//
//  @Before
//  public void setUp() throws Exception {
//    MockitoAnnotations.initMocks(this);
//  }
//
//  @Test
//  public void getAllUser() throws Exception {
//    User userone = new User("1","shubham kabra","shubham.kabra@gmail.com");
//    User usertwo = new User("2","ravi","ravi@gmail.com");
//    User userThree = new User("3","sanju","sanju@gmail.com");
//    List<User> user = new ArrayList<>();
//    user.add(userone);
//    user.add(usertwo);
//    user.add(userThree);
//    when(userService.getAllUser()).thenReturn(user);
//
//    this.mockMvc.perform(get("/assignee").contentType("application/json")).;
//
//  }
//
//
//
//  @Test
//  public void saveUser() {
//  }
//}