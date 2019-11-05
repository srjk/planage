package in.stackroute.planage.sprint.kanban.controller;

import in.stackroute.planage.sprint.configuration.RabbitMqModel;
import in.stackroute.planage.sprint.configuration.Sender;
import in.stackroute.planage.sprint.kanban.exception.BoardNotFoundException;
import in.stackroute.planage.sprint.kanban.model.IncomingAction;
import in.stackroute.planage.sprint.kanban.model.SprintBoard;
import in.stackroute.planage.sprint.kanban.model.Task;
import in.stackroute.planage.sprint.kanban.service.KanbanService;
import in.stackroute.planage.sprint.sprintPlanning.model.Sprint;
import in.stackroute.planage.sprint.sprintPlanning.model.Userstory;
import in.stackroute.planage.sprint.sprintPlanning.service.Impl.SprintService;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1")
public class KanbanController {
    @Autowired
    KanbanService kanbanService;
    @Autowired
    SprintService sprintService;
    @Autowired
    private Sender sender;
    @Autowired
    private RabbitMqModel rabbitMqModel;


    @GetMapping("products/{productId}/kanbanboard")
    public ResponseEntity getKanbanOfProduct(@PathVariable String productId) throws BoardNotFoundException {
        SprintBoard result = kanbanService.getKanbanOfProduct(productId).get();
        System.out.println("This is the result that will be shown"+ result);
//        System.out.println("Result is+++"+ result.get().getProductId());
        if(result == null) {
            throw new BoardNotFoundException();
        } else {
            HashMap<Object, Object> responseObject = new HashMap<>();
            responseObject.put("TimeStamp", new Date());
            responseObject.put("result", result);
            responseObject.put("msg", "Board Found");
            responseObject.put("error", "false");
            return new ResponseEntity<>(responseObject, HttpStatus.OK);
        }
    }
    @PutMapping("products/{productId}/kanbanboard")
    public ResponseEntity<SprintBoard> updateKanbanOfProduct(@PathVariable String productId, @RequestBody SprintBoard sprintBoard){
        return new ResponseEntity<SprintBoard>(kanbanService.addKanbanOfProduct(sprintBoard), HttpStatus.ACCEPTED);
    }
    @PutMapping("products/{productId}/kanbanboard/tasks")
    public ResponseEntity<Task> taskCompleted(@PathVariable String productId, @RequestBody IncomingAction action) {
        SprintBoard kanban = kanbanService.getKanbanOfProduct(productId).get();
        Task completedTask = kanban.getColumns().get(kanban.getColumns().size()-1).getTasks().get(action.getPayload().getCurrentTaskPosition());
        Sprint sprint = sprintService.getSprintData(action.getPayload().getSprintId());
        List<Userstory> listOfStories = sprint.getUserstory();
        int counter = 0;
        int noOfTasks=0;
        int noOfCompletedTask=0;
        for (Userstory userstory : listOfStories) {
            if(userstory.getUserstoryId().equals(completedTask.getUserstoryId())) {
                System.out.println("\n\n\nIn If condition");
                noOfTasks = userstory.getTask().size();
                noOfCompletedTask = userstory.getNoOfCompletedTask()+1;
                userstory.setNoOfCompletedTask(noOfCompletedTask);
                listOfStories.remove(counter);
                listOfStories.add(counter, userstory);
                break;
            }
            counter++;
        }
        sprint.setUserstory(listOfStories);
        sprintService.addSprint(sprint);
        int percentage =noOfCompletedTask/noOfTasks;
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("percentCompleted",percentage);
        jsonObject.put("sprintId",sprint.getSprintId());
        jsonObject.put("userStoryId",completedTask.getUserstoryId());

        sender.sendToQueue("product.sprintPlan.add",rabbitMqModel.getProductExchange(),"product.sprintPlan.add",jsonObject);


        // apurva logic burndown chart
        int totalTask = kanban.getTotalTaskCount();
        // productId
        // sprint.getSprintId()
        int totalMustTask = kanban.getTotalMustTask();
        int totalTryTask = kanban.getTotalTryTask();
        int totalStretchTask = kanban.getTotalStretchTask();
        Date startDate = kanban.getStartDate();
        List<Task> tasks = new ArrayList<>();
        tasks.add(completedTask);

        JSONObject burndownJsonObject = new JSONObject();
        burndownJsonObject.put("productId", productId);
        burndownJsonObject.put("sprintId", sprint.getSprintId());
        burndownJsonObject.put("totalTaskCount", totalTask);
        burndownJsonObject.put("totalMustTask", totalMustTask);
        burndownJsonObject.put("totalStretchTask", totalStretchTask);
        burndownJsonObject.put("totalTryTask", totalTryTask);
        burndownJsonObject.put("startDate", startDate);
        burndownJsonObject.put("endDate", new Date());
        burndownJsonObject.put("tasks",tasks);

        System.out.println("\n\n\n\n\n tasks are :: \n\n"+ tasks+"\n\n\n\n\n");
        sender.sendToQueue("burndown-chart", rabbitMqModel.getDailyTaskExchange(), "burndown-chart", burndownJsonObject);
        // apurva logic end
        return null;
    }
    @PostMapping("products/{productId}/kanbanboard")
    public ResponseEntity<SprintBoard> addKanbanOfProduct(@PathVariable String productId, @RequestBody SprintBoard sprintBoard) {
        sprintBoard.setProductId(productId);
        return new ResponseEntity<SprintBoard>(kanbanService.addKanbanOfProduct(sprintBoard), HttpStatus.OK);
    }

}
