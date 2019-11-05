package in.stackroute.planage.sprint.sprintPlanning.controller;

import in.stackroute.planage.sprint.configuration.Receiver;
import in.stackroute.planage.sprint.sprintPlanning.model.User;
import in.stackroute.planage.sprint.sprintPlanning.service.IUser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private IUser service;
    private static final Logger log = LoggerFactory.getLogger(User.class);

    HashMap<String,Object> responseEntity;

    @GetMapping(path = "/users")
    public ResponseEntity<HashMap<String,Object>> getUser() {
        List<User> users = service.getUser();
        responseEntity = new HashMap<>();
        responseEntity.put("result", users);
        responseEntity.put("msg", "Success!");
        responseEntity.put("error", "false");
        return new ResponseEntity<>(responseEntity, HttpStatus.OK);
    }

    @PostMapping(path = "/users")
    public ResponseEntity<HashMap<String,Object>> addUser(@RequestBody User user) {
        List<User> users = service.getUser();
        responseEntity = new HashMap<>();
        responseEntity.put("result", users);
        responseEntity.put("msg", "Success!");
        responseEntity.put("error", "false");
        return new ResponseEntity<>(responseEntity, HttpStatus.OK);
    }

}
