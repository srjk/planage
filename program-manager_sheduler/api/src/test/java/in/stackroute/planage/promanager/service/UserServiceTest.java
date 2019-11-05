package in.stackroute.planage.promanager.service;

import in.stackroute.planage.promanager.authentication.model.User;
import in.stackroute.planage.promanager.authentication.repository.UserRepository;
import in.stackroute.planage.promanager.authentication.service.UserService;
import in.stackroute.planage.promanager.model.ProductCalender;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class UserServiceTest {
  @InjectMocks
  UserService userService;
  @Mock
  UserRepository userRepository;

  @Before
  public void init() {
    MockitoAnnotations.initMocks(this);
  }

  List<String> list;

  @Test
  public void getuser() {
    User userone = new User("1", "shubham kabra", "shubham.kabra@gmail.com", "assignee", list);
    when(userRepository.findByEmail("shubham.kabra@gmail.com")).thenReturn(userone);

    User usertwo = userService.getuser("shubham.kabra@gmail.com");
    assertEquals(userone, usertwo);
    assertEquals(userone.getEmail(), usertwo.getEmail());
    assertEquals(userone.getText(), usertwo.getText());

  }

  @Test
  public void getAllUser() {
    User userone = new User("1", "shubham kabra", "shubham.kabra@gmail.com", "assignee", list);
    User usertwo = new User("2", "ravi", "ravi@gmail.com", "assignee", list);
    User userThree = new User("3", "sanju", "sanju@gmail.com", "assignee", list);
    List<User> users = new ArrayList<>();
    users.add(userone);
    users.add(usertwo);
    users.add(userThree);
    when(userRepository.findAll()).thenReturn(users);
    List<User> userList = userService.getAllUser();
    assertEquals(3, userList.size());
    verify(userRepository, times(1)).findAll();

  }

  @Test
  public void saveUser() {
    User userone = new User("1", "shubham kabra", "shubham.kabra@gmail.com", "assignee", list);
    when(userRepository.save(userone)).thenReturn(userone);
    User user = userService.saveUser(userone);
    assertEquals(userone, user);
    assertEquals(userone.getText(), user.getText());
    assertEquals(userone.getEmail(), user.getEmail());
    verify(userRepository, times(1)).save(userone);
  }
}