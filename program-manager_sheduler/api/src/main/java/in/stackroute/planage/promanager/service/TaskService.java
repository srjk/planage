package in.stackroute.planage.promanager.service;

import in.stackroute.planage.promanager.config.RabbitMQConfigModel;
import in.stackroute.planage.promanager.model.ParticipantTask;
import in.stackroute.planage.promanager.model.PredefinedTask;
import in.stackroute.planage.promanager.model.Task;
import in.stackroute.planage.promanager.model.TaskMessage;
import in.stackroute.planage.promanager.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.List;

@Service
public class TaskService {

  @Autowired
  TaskRepository taskRepository;

  @Autowired
  RabbitMQConfigModel rabbitMQConfigModel;

  private Producer producer;

  public TaskService(Producer producer) {
    this.producer = producer;
  }


  public List<ParticipantTask> getTask(String programId) {
    List<Task> tasklist = taskRepository.findAllByProgramIdAndStatus(programId, true);
    List<ParticipantTask> participantTaskList = new ArrayList<>();
    for (Task task : tasklist) {
      ParticipantTask pt = new ParticipantTask();
      pt.setTaskId(task.getTaskId());
      pt.setTaskName(task.getTaskName());
      pt.setDueDate(task.getDueDate());
      pt.setStatus(false);
      participantTaskList.add(pt);
    }
    return participantTaskList;
  }
  public Task saveTask(Task tasks)
  {
    System.out.println("+++++++++++++++++++++++++++++++++++++"+tasks);
    return taskRepository.save(tasks);
  }
  public Task addTasks(String programId, PredefinedTask predefinedTask) {
    Task task = new Task();
    task.setTaskId(predefinedTask.getTaskId());
    task.setProgramId(programId);
    task.setProductId(predefinedTask.getProductId());
    task.setTaskName(predefinedTask.getTaskName());
    return taskRepository.save(task);
  }

  public List<Task> getAllTasks(String programId) {
    List<Task> taskList = taskRepository.findAllByProgramId(programId);
//    List<Task> tasklist = new ArrayList<>();
//    for (Task t : taskList) {
//      if (t.getProgramId().equals(programId)) {
//        tasklist.add(t);
//      }
//    }
    return taskList;
  }

  public List<Task> updateTaskDate(List<Task> task) {
    List<Task> taskList = taskRepository.findAll();
    for (Task t1 : taskList) {
      for (Task t2 : task) {
        if (t1.getTaskId().equals(t2.getTaskId())) {
          t1.setDueDate(t2.getDueDate());
        }
      }
    }
    return taskList;
  }

  public List<Task> releaseTasks(String programId, List<Task> tasks) {
    List<Task> taskList = taskRepository.findAllByProgramId(programId);
    for (Task t1 : tasks) {
      for (Task t2 : taskList) {
        if (t1.getTaskId().equals(t2.getTaskId())) {
          t2.setStatus(t1.isStatus());
          taskRepository.save(t2);
          producer.sendToQueue("participant.task.added", rabbitMQConfigModel.getExchange(), rabbitMQConfigModel.getParticipantTaskRoutingKey(), t2);
        }
      }
    }
    return taskList;
  }

  public List<Task> updateTasksInProgram(String programId, List<Task> tasks) {
    List<Task> taskList = taskRepository.findAllByProgramId(programId);
    for (Task t1 : tasks) {
      for (Task t2 : taskList) {
        if (t1.getTaskId().equals(t2.getTaskId())) {
          t2.setDueDate(t1.getDueDate());
          taskRepository.save(t2);
        }
      }
    }
    return taskList;
  }

  public Task updateTask(String taskId, Task task) {
    Task updateTask = taskRepository.findById(taskId).orElse(null);
    if (updateTask != null) {
      updateTask.setDueDate(task.getDueDate());
    }
    return taskRepository.save(updateTask);
  }
}

