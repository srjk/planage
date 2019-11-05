package in.stackroute.planage.promanager.service;

import in.stackroute.planage.promanager.authentication.model.User;
import in.stackroute.planage.promanager.authentication.service.UserService;
import in.stackroute.planage.promanager.config.RabbitMQConfigModel;
import in.stackroute.planage.promanager.model.*;
import in.stackroute.planage.promanager.repository.ProductCalenderRepository;
import in.stackroute.planage.promanager.repository.ProgramRepository;
import in.stackroute.planage.promanager.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProductCalenderService {
  @Autowired
  ProductCalenderRepository productRepository;

  @Autowired
  UserService userService;

  @Autowired
  AssigneeEmployeeService assigneeEmployeeService;

  @Autowired
  ProgramRepository programRepository;

  @Autowired
  TaskRepository taskRepository;

  @Autowired
  RabbitMQConfigModel rabbitMQConfigModel;

  private Producer producer;

  public ProductCalenderService(Producer producer) {
    this.producer = producer;
  }

  public ProductCalender createProduct(String email, ProductCalender product) {
    if (product.getPrograms() == null) {
      List<Program> program1 = new ArrayList<>();
      product.setPrograms(program1);
    }
    product.setCreatedBy(email);
    ProductCalender p = productRepository.save(product);
    userService.addProductToUser(email, p);
    return p;
  }

  public ProductCalender saveProduct(String email, ProductCalender product) {
    System.out.println("+++++++++++++++++++++++++++++++++++save data");
    if (product.getPrograms() == null) {
      List<Program> program1 = product.getPrograms();
      program1 = new ArrayList<>();
      product.setPrograms(program1);
    }
    return productRepository.save(product);
  }

  public List<ProductCalender> findAllProduct(String email) {
    return productRepository.findAllByCreatedBy(email);
  }






  public Optional<ProductCalender> findById(String id) {
    return productRepository.findById(id);
  }

  public boolean deleteByProductId(String id) {
    productRepository.deleteById(id);
    return true;
  }

  public ProductCalender updateById(String id, ProductCalender product) {
    ProductCalender product1 = productRepository.findById(id).orElse(null);
    product1.setDurationDays(product1.getDurationDays());
    product1.setDurationHours(product1.getDurationHours());
    product1.setDurationWeek(product1.getDurationWeek());
    product1.setAssignee(product1.getAssignee());
    product1.setProductName(product1.getProductName());
    product1.setAgenda(product1.getAgenda());
    return productRepository.save(product1);
  }

  public ProductCalender saveProgram(String id, Program program) {
    ProductCalender product = productRepository.findById(id).orElse(null);
    if (product != null) {

      List<Program> program1 = product.getPrograms();
      if (program1 == null) {
        program1 = new ArrayList<>();
      }
      String pid = UUID.randomUUID().toString();
      program.setId(pid);
      program1.add(program);
      product.setPrograms(program1);
      productRepository.save(product);
      List<String> assignee = program.getAssignee();
      if (assignee.size() != 0) {
        for (String email : assignee) {
          User user = userService.getuser(email);
          Assignee assignee1 = new Assignee(user.getText(), program.getId(), program.getText(), program.getEndDate(), program.getStartDate(), user.getEmail());
          producer.sendToQueue("program.assignee.added", rabbitMQConfigModel.getExchange(), rabbitMQConfigModel.getAssigneeRoutingKey(), assignee1);
        }
      }
      PredefinedTaskMessage tasks = new PredefinedTaskMessage();
      tasks.setProgramId(pid);
      System.out.println("++++++++++++++++++++++++++++++++++++++++" + pid);
      assert product.getPredefinedTask() != null;
      if (product.getPredefinedTask() != null) {
        tasks.setTasks(product.getPredefinedTask());
        producer.sendToQueue("task.program.added", rabbitMQConfigModel.getExchange(), rabbitMQConfigModel.getProgramTaskRoutingKey(), tasks);
      }
    }
    return productRepository.findById(id).orElse(null);
  }

  public void deleteProgram(String productId, String programId) {
    ProductCalender product = productRepository.findById(productId).orElse(null);
    if (product != null) {
      List<Program> programsList = product.getPrograms();
      int counter = 0;
      for (Program program : programsList) {
        if ((program.getId()).equals(programId)) {
          List<String> assignee = program.getAssignee();
          if (assignee.size() != 0) {
            for (String email : assignee) {
              User user = userService.getuser(email);
              Assignee assignee1 = new Assignee(user.getText(), program.getId(), program.getText(), program.getEndDate(), program.getStartDate(), user.getEmail());
              producer.sendToQueue("program.assignee.deleted", rabbitMQConfigModel.getExchange(), rabbitMQConfigModel.getAssigneeRoutingKey(), assignee1);

            }
          }
          break;
        }
        counter++;
      }
      programsList.remove(counter);
      product.setPrograms(programsList);
      productRepository.save(product);
      TaskMessage tm = new TaskMessage();
      if (taskRepository.findAllByProgramId(programId).size() != 0) {
        tm.setTasks(taskRepository.findAllByProgramId(programId));
        producer.sendToQueue("task.program.deleted", rabbitMQConfigModel.getExchange(), rabbitMQConfigModel.getProgramTaskRoutingKey(), tm);
      }
    }
  }

  public void updateProgram(String productId, String programId, Program program) {
    ProductCalender product = productRepository.findById(productId).orElse(null);
    if (product != null) {
      List<Program> programsList = product.getPrograms();
      int counter = 0;
      for (Program program1 : programsList) {
        if ((program1.getId()).equals(programId)) {
          break;
        }
        counter++;
      }
      programsList.remove(counter);
      programsList.add(program);
      product.setPrograms(programsList);
      productRepository.save(product);
    }
  }

  public List<PredefinedTask> getTasksFromProduct(String productId) {
    ProductCalender product = productRepository.findById(productId).orElse(null);
    List<PredefinedTask> tasklist = product.getPredefinedTask();
    return tasklist;
  }

  public ProductCalender deleteTask(String productId, String taskId) {
    ProductCalender product = productRepository.findById(productId).orElse(new ProductCalender());

    List<PredefinedTask> taskList = product.getPredefinedTask();
    if (taskList != null) {
      int counter = 0;
      for (PredefinedTask task : taskList) {
        if ((task.getTaskId()).equals(taskId)) {
          break;
        }
        counter++;
      }
      taskList.remove(counter);
      product.setPredefinedTask(taskList);
      productRepository.save(product);
    }
    return product;
  }

  public ProductCalender addTask(String productId, PredefinedTask predefinedTask) {
    ProductCalender product = productRepository.findById(productId).orElse(new ProductCalender());

    List<PredefinedTask> task1 = product.getPredefinedTask();
    if (task1 == null) {
      task1 = new ArrayList<>();
    }
    PredefinedTask ptask = new PredefinedTask();
    ptask.setTaskName(predefinedTask.getTaskName());
    ptask.setProductId(productId);
    task1.add(ptask);
    product.setPredefinedTask(task1);
    return productRepository.save(product);

  }

  public void deleteTaskFromProgram(String programId, String taskId) {
    List<Task> taskList = taskRepository.findAllByProgramId(programId);
    if (taskList != null) {
      int counter = 0;
      for (Task task : taskList) {
        if ((task.getTaskId()).equals(taskId)) {
          break;
        }
        counter++;
      }
      taskList.remove(counter);
    }
  }

}
