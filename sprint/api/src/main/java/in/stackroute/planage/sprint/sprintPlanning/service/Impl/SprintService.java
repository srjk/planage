package in.stackroute.planage.sprint.sprintPlanning.service.Impl;

import in.stackroute.planage.sprint.configuration.RabbitMqModel;
import in.stackroute.planage.sprint.configuration.Sender;
import in.stackroute.planage.sprint.sprintPlanning.model.Product;
import in.stackroute.planage.sprint.sprintPlanning.model.Sprint;
import in.stackroute.planage.sprint.sprintPlanning.model.Task;
import in.stackroute.planage.sprint.sprintPlanning.model.Userstory;
import in.stackroute.planage.sprint.sprintPlanning.repository.ProductRepository;
import in.stackroute.planage.sprint.sprintPlanning.repository.SprintRepository;
import in.stackroute.planage.sprint.sprintPlanning.service.ISprint;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class SprintService implements ISprint, Serializable {

    @Autowired
    private SprintRepository sprintRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private Sender sender;
    @Autowired
    private RabbitMqModel rabbitMqModel;

    private static final Logger log = LoggerFactory.getLogger(Sprint.class);

    private final RabbitTemplate rabbitTemplate;

    public SprintService( RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    @Override
    public Sprint addSprint(Sprint sprint) {

        return sprintRepository.save(sprint);
    }

    @Override
    public List<Userstory> getUserstory(String sprintId, String productId) {
        Sprint sprint = sprintRepository.findBySprintIdAndProductId(sprintId, productId).get();
        List<Userstory> userstoryList = sprint.getUserstory();
        return userstoryList;
    }

    @Override
    public Sprint addUserstory(String productId, String sprintId, List<Userstory> userstory) {
        Sprint sprintList = sprintRepository.findBySprintIdAndProductId(sprintId, productId).get();
        System.out.println(sprintList);
//        List<Userstory> userstoryList = sprintList.getUserstory();
//        if (userstoryList == null) {
//            List<Userstory> userstoryList1 = new ArrayList<>();
//            userstoryList1 =userstory;
//            sprintList.setUserstory(userstoryList1);
//        } else {
//            userstoryList = userstory;
            sprintList.setUserstory(userstory);
      //  }

        JSONObject json = new JSONObject();
//        json.put("productId", productId);
        json.put("sprintId", sprintId);
        json.put("userstory", userstory);
//        rabbitTemplate.convertAndSend("TopicExchange", "*.sprintDetail", json);
        sender.sendToQueue("userStory.added",rabbitMqModel.getSprintDetailExchange(),rabbitMqModel.getSprintDetailExchangeRoutingKey(),json);

        return sprintRepository.save(sprintList);
    }

    // getting the selected userstory
    @Override   
    public List<Userstory> getSelectedUserstory(String sprintId, String productId) {
        Sprint sprint = sprintRepository.findBySprintIdAndProductId(sprintId, productId).get();
        List<Userstory> userstoryList = sprint.getUserstory();
        return userstoryList;
    }
    // selected userstory
    @Override
    public Sprint selectedUserstory(String productId, String sprintId, List<Userstory> userstory) {
        Sprint sprintList = sprintRepository.findBySprintIdAndProductId(sprintId, productId).get();
        System.out.println(sprintList);
        List<Userstory> userstoryList = sprintList.getUserstory();
        if (userstoryList == null) {
            List<Userstory> userstoryList1 = new ArrayList<>();
            userstoryList1 =userstory;
            sprintList.setUserstory(userstoryList1);
        } else {
            userstoryList = userstory;
            sprintList.setUserstory(userstoryList);
        }
        return sprintRepository.save(sprintList);
    }


    @Override
    public Sprint deleteUserstory(String productId, String sprintId, String userstoryId) {
        Sprint sprintList = sprintRepository.findBySprintIdAndProductId(sprintId, productId).get();
        List<Userstory> userstoryList = sprintList.getUserstory();
        int counter = 0;
        for (Userstory userstory : userstoryList) {
            if (userstory.getUserstoryId().equals(userstoryId)) {
                break;
            }
            counter++;
        }
        userstoryList.remove(counter);
        sprintList.setUserstory(userstoryList);
        return sprintRepository.save(sprintList);
    }

    @Override
    public Sprint addTasks(String productId, String sprintId, String userstoryId,
                           String userstoryName, Task task) {
        Sprint sprintList = sprintRepository.findBySprintIdAndProductId(sprintId, productId).get();
        List<Userstory> userstoryList = sprintList.getUserstory();
        for (Userstory userstory : userstoryList) {
            if (userstory.getUserstoryId().equals(userstoryId)) {
                List<Task> taskList = userstory.getTask();
                if (taskList == null) {
                    List<Task> taskList1 = new ArrayList<>();
                    taskList1.add(task);
                    userstory.setTask(taskList1);
                    userstory.setNoOfCompletedTask(0);
                    sprintList.setUserstory(userstoryList);
                } else {
                    taskList.add(task);
                    userstory.setTask(taskList);
                    sprintList.setUserstory(userstoryList);
                }
          }
        }
        Sprint updatedSprint = sprintRepository.save(sprintList);
        JSONObject json = new JSONObject();
        json.put("productId", productId);
        json.put("sprintId", sprintId);
        System.out.println("\n\n\n\n\n\n"+ userstoryId+"\n\n\n\n\n");
        json.put("userStoryId",userstoryId);
        json.put("userStoryName", userstoryName);
        System.out.println(userstoryName+"gyguhuh hello");
        json.put("task", task);
        log.info(String.valueOf(json));
        sender.sendToQueue("task.added",rabbitMqModel.getDirectExchange(),rabbitMqModel.getSprintBoardRoutingKey(),json);
//        rabbitTemplate.convertAndSend("DirectExchange", "sprintBoard", json);
        return sprintRepository.save(updatedSprint);
    }

    @Override
    public Sprint deleteTask(String productId, String sprintId, String userstoryId, String taskId) {
        Sprint sprintList = sprintRepository.findBySprintIdAndProductId(sprintId, productId).get();
        List<Userstory> userstoryList = sprintList.getUserstory();
        for (Userstory userstory : userstoryList) {
            if (userstory.getUserstoryId().equals(userstoryId)) {
                List<Task> taskList = userstory.getTask();
                int counter = 0;
                for (Task task : taskList) {
                    if (task.getTaskId().equals(taskId)) {
                        break;
                    }
                    counter++;
                }
                taskList.remove(counter);
                userstory.setTask(taskList);
                sprintList.setUserstory(userstoryList);
            }
        }
        return sprintRepository.save(sprintList);
    }


    // New
    @Override
    public List<Sprint> getAllSprintsOfProduct(String productId, Pageable pageable){
        return this.sprintRepository.findByProductId(productId, pageable).get();

    }

    @Override
    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }

    @Override
    public Product addProduct(Product product){
        return productRepository.save(product);
    }


    public Sprint getSprintData(String sprintId) {
        return sprintRepository.findById(sprintId).get();
    }
}
