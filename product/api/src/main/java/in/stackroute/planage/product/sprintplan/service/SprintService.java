package in.stackroute.planage.product.sprintplan.service;

// import in.stackroute.planage.product.Configuration.Receiver;
import in.stackroute.planage.product.Configuration.RabbitMqModel;
import in.stackroute.planage.product.Configuration.Sender;
import in.stackroute.planage.product.Gantt.Model.Dependency;
import in.stackroute.planage.product.backlog.model.PrioritizedUserStory;
import in.stackroute.planage.product.sprintplan.model.RoadMapStories;
import in.stackroute.planage.product.sprintplan.model.Sprints;
import in.stackroute.planage.product.sprintplan.repository.SprintRepository;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
@Service
public class SprintService implements Serializable {
    @Autowired
    SprintRepository sprintRepository;

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Autowired
    private Sender sender;

    @Autowired
    private RabbitMqModel rabbitMqModel;

    // private final Receiver receiver;
    public SprintService(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    public Sprints getSprintById(String sprintId) {
        return sprintRepository.findById(sprintId).get();
    }


    public List<Sprints> getAllSprintsOfProduct(String productId, Pageable pageable) {
        return sprintRepository.findByProductId(productId, pageable).get();
    }

    public Sprints addSprint(Sprints sprint) {
        return sprintRepository.save(sprint);
    }

    public Sprints updateSprint(Sprints sprint) {
        System.out.println(sprint.toString());
        System.out.println("))))))))))))))))"+sprint);
       messageToGanttQueue(sprint);
        messageToSprintExchange(sprint);
        return sprintRepository.save(sprint);
    }

    public void deleteSprint(String sprintId) {
        sprintRepository.deleteById(sprintId);
    }

    public void messageToSprintExchange(Sprints sprint){
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("productId",sprint.getProductId());
        jsonObject.put("sprintId",sprint.getSprintId());
        jsonObject.put("sprintName", sprint.getSprintName());
//        jsonObject.put("productName",sprint.getProductName());
        JSONArray userstory = new JSONArray();
        List<JSONObject> userStories = new ArrayList<>();
        List<RoadMapStories> roadMapStoriesList = sprint.getUserStories();
        for(RoadMapStories roadMapStories:roadMapStoriesList){
            JSONObject jsonObject1 = new JSONObject();
            jsonObject1.put("userstoryId",roadMapStories.getId());
            jsonObject1.put("userstoryName",roadMapStories.getUserStoryName());
//            jsonObject.put("userstory", Arrays.asList(jsonObject1));
            userStories.add(jsonObject1);
//            jsonObject.put("userstory",jsonObject1);
        }
        jsonObject.put("userstory", userStories);

//        userstory.put(jsonObject);
        sender.sendToQueue("product.sprint.sprintData",rabbitMqModel.getSprintDetailExchange(),"product.sprint.sprintData",jsonObject);
        System.out.println("message sent to exchange");
    }

    public void messageToGanttQueue(Sprints sprint){
        JSONObject ganttObject = new JSONObject();
        ganttObject.put("productId",sprint.getProductId());
        ganttObject.put("sprintId",sprint.getSprintId());
        ganttObject.put("sprintName", sprint.getSprintName());
        ganttObject.put("productName",sprint.getProductName());
        ganttObject.put("sprintDuration",sprint.getSprintDuration());
        ganttObject.put("userStories",sprint.getUserStories());
        sender.sendToQueue("gantt.product.add",rabbitMqModel.getProductExchange(),rabbitMqModel.getGanttQueueRoutingKey(),ganttObject);
        System.out.println("message sent to gantt queue");
    }

}
