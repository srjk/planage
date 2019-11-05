package in.stackroute.planage.promanager.controller;

import in.stackroute.planage.promanager.authentication.model.User;
import in.stackroute.planage.promanager.authentication.service.UserService;
//import in.stackroute.planage.promanager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class UserController {

  @Autowired
  UserService userService;

  @GetMapping("/assignee")
  public List<User> getAllUser() {
    return userService.getAllUserByRole();
  }

  @PostMapping("/assignee")
  public User saveUser(@RequestBody User user) {
    return userService.saveUser(user);
  }


  //Authentication
  //get user details
  @GetMapping(path = "/users")
  public ResponseEntity<List<User>> getAllUsers() {
    List<User> users = userService.getAllUser();
  // responseObject = new HashMap<>();
  //   responseObject.put("result", users);
  //   responseObject.put("msg", "Success!");
  //   responseObject.put("error", "false");

    return new ResponseEntity<>(users, HttpStatus.OK);
  }

}
