package in.stackroute.planage.promanager.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import in.stackroute.planage.promanager.authentication.service.UserService;
import in.stackroute.planage.promanager.config.RabbitMQConfigModel;
import in.stackroute.planage.promanager.model.*;
import in.stackroute.planage.promanager.repository.TaskRepository;
import org.json.simple.parser.ParseException;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;



import in.stackroute.planage.promanager.model.PredefinedTask;
import in.stackroute.planage.promanager.model.TaskMessage;

import java.util.List;


@Component
public class Consumer {

  @Autowired
  UserService userService;

  @Autowired
  AssigneeEmployeeService assigneeEmployeeService;

  @Autowired
  TaskService taskService;

  @Autowired
  ParticipantService participantService;

  @Autowired
  TaskRepository taskRepository;

  @Autowired
  public RabbitMQConfigModel rabbitMQConfigModel;

  @RabbitListener(queues = "${assignee.queue.name}")
  public void listener1(MessageResponse messageResponse) throws ParseException {
    String eventName = messageResponse.getEventName();
    String[] arr = eventName.split("[.]");
    int l = arr.length;
    if (arr[l - 1].equals("added")) {
      ObjectMapper mapper = new ObjectMapper();
      Assignee assignee = mapper.convertValue(messageResponse.getEventPayload(), Assignee.class);
      assigneeEmployeeService.saveAssignee(assignee);
    } else if (arr[l - 1].equals("deleted")) {
      ObjectMapper mapper = new ObjectMapper();
      Assignee assignee = mapper.convertValue(messageResponse.getEventPayload(), Assignee.class);
      assigneeEmployeeService.deleteAssignees(assignee);
    }
  }

  @RabbitListener(queues = "${programTask.queue.name}")
  public void listener2(MessageResponse messageResponse) throws ParseException, java.text.ParseException {
    String eventName = messageResponse.getEventName();
    String[] arr = eventName.split("[.]");
    int l = arr.length;
    if (arr[l - 1].equals("added")) {
      ObjectMapper mapper = new ObjectMapper();
      PredefinedTaskMessage tasklist = mapper.convertValue(messageResponse.getEventPayload(), PredefinedTaskMessage.class);
      String programId = tasklist.getProgramId();
      List<PredefinedTask> taskList = tasklist.getTasks();
      for (PredefinedTask task : taskList) {
        taskService.addTasks(programId, task);
      }
    }else if (arr[l - 1].equals("deleted")) {
      ObjectMapper mapper = new ObjectMapper();
      TaskMessage tasks = mapper.convertValue(messageResponse.getEventPayload(), TaskMessage.class);
      List<Task> taskList = tasks.getTasks();
      for (Task task : taskList) {
        taskRepository.deleteByProgramId(task.getProgramId());
      }
    }
  }

  @RabbitListener(queues = "${participantTask.queue.name}")
  public void listener3(MessageResponse messageResponse) throws ParseException, java.text.ParseException {
    String eventName = messageResponse.getEventName();
    String[] arr = eventName.split("[.]");
    int l = arr.length;
    if (arr[l - 1].equals("added")) {
      ObjectMapper mapper = new ObjectMapper();
      Task task = mapper.convertValue(messageResponse.getEventPayload(), Task.class);
      System.out.println("+++++++++++Add task+++++++++++++++");
      participantService.addTaskToParticipant(task);
    }
  }

//  @RabbitListener(queues = "${slack.queue.name}")
//  public void listener4(MessageResponse messageResponse) throws ParseException, java.text.ParseException {
//    String eventName = messageResponse.getEventName();
//    String[] arr = eventName.split("[.]");
//    int l = arr.length;
//    if (arr[l - 1].equals("added")) {
//      ObjectMapper mapper = new ObjectMapper();
//      TaskMessage tasklist = mapper.convertValue(messageResponse.getEventPayload(), TaskMessage.class);
//      String programId = tasklist.getProgramId();
//      List<Task> taskList = tasklist.getTasks();
//      for (Task task : taskList) {
//        participantService.addTaskToParticipant(task);
//      }
//    }
//  }

}


//  @RabbitListener(queues = "${programTaskToParticipant.queue.name}")
//  public void listener3(JSONObject task) throws ParseException, java.text.ParseException {
//    JSONObject input = (JSONObject) new JSONParser().parse(String.valueOf(task));
//    List<ParticipantTask> pt =
//    participantService.addTasksToParticipant(tasklist);
//  }

