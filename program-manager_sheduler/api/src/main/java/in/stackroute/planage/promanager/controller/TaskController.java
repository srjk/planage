package in.stackroute.planage.promanager.controller;

import in.stackroute.planage.promanager.model.PredefinedTask;
import in.stackroute.planage.promanager.model.Task;
import in.stackroute.planage.promanager.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class TaskController {

  @Autowired
  public TaskService taskSercice;

  HashMap<String, Object> responseObject;

  @PostMapping("/products/{productId}/tasks")
  public ResponseEntity<HashMap<String, Object>> addTasks(@PathVariable("productId") String productId, @RequestBody PredefinedTask predefinedTask) {
    Task task = taskSercice.addTasks(productId, predefinedTask);
    responseObject = new HashMap<>();
    responseObject.put("result", task);
    responseObject.put("msg", "Success!");
    responseObject.put("error", "False");
    return new ResponseEntity<>(responseObject, HttpStatus.OK);
  }
  @PostMapping("/tasks/{programId}")
  public ResponseEntity<?> postProgramTasks(@PathVariable("programId") String taskId, @RequestBody Task tasks)
  {  Task task1=new Task();
  task1.setProgramId(taskId);
  task1.setTaskName(tasks.getTaskName());


    Task task =taskSercice.saveTask(task1);
    return ResponseEntity.ok(task);
  }
  @GetMapping("/tasks/{id}")
  public ResponseEntity<HashMap<String, Object>> getTask(@PathVariable("id") String programId) {
    System.out.println("+++++++++++++++++++++"+programId);
    List<Task> task = taskSercice.getAllTasks(programId);
    responseObject = new HashMap<>();
    responseObject.put("result", task);
    responseObject.put("msg", "Success!");
    responseObject.put("error", "false");
    return new ResponseEntity<>(responseObject, HttpStatus.OK);
  }
  @PutMapping("/tasks/{taskId}")
  public ResponseEntity<?> updateTasks(@PathVariable("taskId") String taskId, @RequestBody Task tasks)
  {
   Task task =taskSercice.updateTask(taskId,tasks);
    return ResponseEntity.ok(task);
  }

  @PutMapping("/tasks/{programId}/releasetasks")
  public ResponseEntity<HashMap<String, Object>> updateTask(@PathVariable("programId") String programId, @RequestBody List<Task> tasks) {
    System.out.println("++++++++++++++++++++++HIT API+++++++++++++++++++++++++");
    List<Task> task = taskSercice.releaseTasks(programId, tasks);
    responseObject = new HashMap<>();
    responseObject.put("result", task);
    responseObject.put("msg", "Success!");
    responseObject.put("error", "False");
    return new ResponseEntity<>(responseObject, HttpStatus.OK);
  }
}

