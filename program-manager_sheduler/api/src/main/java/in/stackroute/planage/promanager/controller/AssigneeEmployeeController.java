package in.stackroute.planage.promanager.controller;

import java.util.List;


import in.stackroute.planage.promanager.model.Assignee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import in.stackroute.planage.promanager.service.AssigneeEmployeeService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class AssigneeEmployeeController {

  @Autowired
  AssigneeEmployeeService assigneeEmployeeService;

  @GetMapping("/employee/{email}")
  public ResponseEntity<List<Assignee>> getEmployee(@PathVariable("email") String email) {
    return ResponseEntity.ok(assigneeEmployeeService.getEmployee(email));
  }

  @GetMapping("/employee")
  public ResponseEntity<List<Assignee>> getEmployees() {
    return ResponseEntity.ok(assigneeEmployeeService.getAllEmployee());
  }


  @PostMapping("/employee")
  public ResponseEntity<Assignee> Add(@RequestBody Assignee assignee) {
    return ResponseEntity.ok(assigneeEmployeeService.saveAssignee(assignee));
  }

  @DeleteMapping("/assignee")
  public ResponseEntity<?> deleteAssignee(@RequestBody Assignee assignee) {
    return ResponseEntity.ok(assigneeEmployeeService.deleteAssignees(assignee));
  }



}
