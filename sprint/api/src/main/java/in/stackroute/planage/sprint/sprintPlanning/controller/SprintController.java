package in.stackroute.planage.sprint.sprintPlanning.controller;

import in.stackroute.planage.sprint.configuration.RabbitMqModel;
import in.stackroute.planage.sprint.configuration.Sender;
import in.stackroute.planage.sprint.kanban.service.KanbanService;
import in.stackroute.planage.sprint.sprintPlanning.model.Product;
import in.stackroute.planage.sprint.sprintPlanning.model.Sprint;
import in.stackroute.planage.sprint.sprintPlanning.model.Task;
import in.stackroute.planage.sprint.sprintPlanning.model.Userstory;
import in.stackroute.planage.sprint.sprintPlanning.service.ISprint;
import lombok.Getter;
import lombok.Setter;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Pageable;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1")
public class SprintController {

    @Autowired
    private Sender sender;
    @Autowired
    private RabbitMqModel rabbitMqModel;

    @Autowired
    private ISprint sprintService;
    @Autowired
    private KanbanService kanbanService;


    HashMap<String, Object> responseEntity;
    private static final Logger log = LoggerFactory.getLogger(Sprint.class);


    // For Product
    @GetMapping("/product")
    public ResponseEntity<List<Product>> getAllProduct() {
        return ResponseEntity.ok(sprintService.getAllProduct());
    }

    @PostMapping("/product")
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        return ResponseEntity.ok(sprintService.addProduct(product));
    }
    // Posting Sprint Data

    @PostMapping(value = "/products/{productId}/sprints")
    public ResponseEntity<HashMap<String, Object>> addSprint(@RequestBody Sprint sprint, @PathVariable String productId) {
        Sprint Nsprint = sprintService.addSprint(sprint);
        sprint.setProductId(productId);
        responseEntity = new HashMap<>();
        responseEntity.put("result", Nsprint);
        responseEntity.put("msg", "Success!");
        responseEntity.put("error", "False");
        return new ResponseEntity<>(responseEntity, HttpStatus.OK);
    }

    @GetMapping("/products/{productId}/sprints/{sprintId}")
    public ResponseEntity<HashMap<String, Object>> getUserstory(@PathVariable String sprintId, @PathVariable String productId) {
        List<Userstory> userstoryList = sprintService.getUserstory(sprintId, productId);
        responseEntity = new HashMap<>();
        responseEntity.put("result", userstoryList);
        responseEntity.put("msg", "Success!");
        return new ResponseEntity<>(responseEntity, HttpStatus.OK);
    }

    // Getting all userstories data
    @GetMapping("/products/{productId}/sprints/{sprintId}/userstories")
    public ResponseEntity<HashMap<String, Object>> getUserstories(@PathVariable String sprintId, @PathVariable String productId) {
        List<Userstory> userstoryList = sprintService.getUserstory(sprintId, productId);
        responseEntity = new HashMap<>();
        responseEntity.put("result", userstoryList);
        responseEntity.put("msg", "Success!");
        return new ResponseEntity<>(responseEntity, HttpStatus.OK);
    }
// Getting Sprints Data
    @GetMapping("/products/{productId}/sprints")
    public ResponseEntity getAllSprintByProductId(@PathVariable String productId) {
        Pageable pageable = PageRequest.of((kanbanService.getKanbanOfProduct(productId).get().getLastActiveSprint()), 4, Sort.by("sprintNumber").ascending());
         List<Sprint> sprints = sprintService.getAllSprintsOfProduct(productId, pageable);
        return new ResponseEntity(sprints, HttpStatus.OK);
    }


    @PostMapping(value = "/products/{productId}/sprints/{sprintId}/userstories")
    public ResponseEntity<HashMap<String, Object>> addUserstory(@PathVariable String productId, @PathVariable String sprintId, @RequestBody List<IncomingStoryFormat> sentStories) {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("sprintId",sprintId);

        List<Userstory> userStories = new ArrayList<>();
        for (IncomingStoryFormat story : sentStories) {
            userStories.add(story.userStory);
        }
        jsonObject.put("userStory",sentStories);

        sender.sendToQueue("product.sprintPlan.add",rabbitMqModel.getProductExchange(),"product.sprintPlan.add",jsonObject);

        System.out.println("\n\n\n\n\n "+userStories +"\n\n\n\n\n");
        sprintService.addUserstory(productId, sprintId, userStories);
        Sprint sprint = sprintService.addUserstory(productId, sprintId, userStories);
        responseEntity = new HashMap<>();
        responseEntity.put("result", sprint);
        responseEntity.put("msg", "Success!");
        responseEntity.put("error", "False");

        //send "sentStories" along with the "sprintId" to the exchange


        return new ResponseEntity<>(responseEntity, HttpStatus.OK);
    }

    @GetMapping("/products/{productId}/sprints/{sprintId}/selectedUserstories")
    public ResponseEntity<HashMap<String, Object>> getSelectedUserstories(@PathVariable String sprintId, @PathVariable String productId) {
        List<Userstory> userstoryList = sprintService.getSelectedUserstory(sprintId, productId);
        responseEntity = new HashMap<>();
        responseEntity.put("result", userstoryList);
        responseEntity.put("msg", "Success!");
        return new ResponseEntity<>(responseEntity, HttpStatus.OK);
    }
    @DeleteMapping(value = "/products/{productId}/sprints/{sprintId}/userstories/{userstoryId}")
    public ResponseEntity<HashMap<String, Object>> deleteUserstory(@PathVariable String productId, @PathVariable String sprintId, @PathVariable String userstoryId) {
        Sprint sprintList = sprintService.deleteUserstory(productId, sprintId, userstoryId);
        responseEntity = new HashMap<>();
        responseEntity.put("result", sprintList);
        responseEntity.put("msg", "Success!");
        responseEntity.put("error", "False");
        return new ResponseEntity<>(responseEntity, HttpStatus.OK);
    }

    @PostMapping(value = "/products/{productId}/sprints/{sprintId}/userstories/{userstoryId}/tasks")
    public ResponseEntity<HashMap<String, Object>> addTask(@PathVariable String productId,
                                                           @PathVariable String sprintId,
                                                           @PathVariable String userstoryId,
                                                           @RequestBody Task task) {
        System.out.println("Hi from add task");
        System.out.println(""+ userstoryId+"\n\n\n\n\n\n\n");
        Sprint sprint = sprintService.addTasks(productId,sprintId,userstoryId,task.getUserstoryName(),task);
        System.out.println("\n\n\n\n\n\n"+sprint+"\n\n\n\n\n\n" +"name");
        responseEntity = new HashMap<>();
        responseEntity.put("result", sprint);
        responseEntity.put("msg", "Success!");
        responseEntity.put("error", "False");
        return new ResponseEntity<>(responseEntity, HttpStatus.OK);
    }

    @DeleteMapping(value = "/products/{productId}/sprints/{sprintId}/userstories/{userstoryId}/tasks/{taskId}")
    public ResponseEntity<HashMap<String, Object>> deleteTask(@PathVariable String productId, @PathVariable String sprintId, @PathVariable String userstoryId, @PathVariable String taskId) {
        Sprint sprint = sprintService.deleteTask(productId, sprintId, userstoryId, taskId);
        responseEntity = new HashMap<>();
        responseEntity.put("result", sprint);
        responseEntity.put("msg", "Success!");
        responseEntity.put("error", "False");
        return new ResponseEntity<>(responseEntity, HttpStatus.OK);
    }

}
@Setter
@Getter
class IncommingMessageFormat {
    String sprintId;
    List<IncomingStoryFormat> sentStories;
}
@Setter
@Getter
class IncomingStoryFormat {
    Userstory userStory;
    String sprintId;
    String sprintName;
}
