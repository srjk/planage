package in.stackroute.planage.sprint.configuration;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import in.stackroute.planage.sprint.kanban.model.FreezeSprint;
import in.stackroute.planage.sprint.kanban.model.SprintBoard;
import in.stackroute.planage.sprint.kanban.model.Task;
import in.stackroute.planage.sprint.kanban.repository.KanbanRepository;
import in.stackroute.planage.sprint.kanban.service.KanbanService;
import in.stackroute.planage.sprint.kanban.service.SprintBoardService;
import in.stackroute.planage.sprint.sprintPlanning.model.Product;
import in.stackroute.planage.sprint.sprintPlanning.model.Sprint;
import in.stackroute.planage.sprint.sprintPlanning.model.Teams;
import in.stackroute.planage.sprint.sprintPlanning.model.Userstory;
import in.stackroute.planage.sprint.sprintPlanning.service.Impl.SprintService;
import in.stackroute.planage.sprint.statistics.service.Impl.LeaderboardService;
import in.stackroute.planage.sprint.statistics.service.Impl.StatisticsService;
import in.stackroute.planage.sprint.statistics.service.Impl.VelocityChartService;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Component
public class Receiver {

    @Autowired
    private SprintBoardService sprintBoardService;
    @Autowired
    private VelocityChartService velocityChartService;
    @Autowired
    private LeaderboardService leaderboardService;
    @Autowired
    private SprintService sprintService;

    @Autowired
    private KanbanRepository kanbanRepository;
    @Autowired
    private KanbanService kanbanService;

    @Autowired
    private StatisticsService statisticsService;

    private static final Logger log = LoggerFactory.getLogger(Receiver.class);


    @RabbitListener(queues = "${sprintBoardQueue.queue.name}")
    public void taskListner(MessageResponse messageResponse) throws ParseException {
        String eventName = messageResponse.getEventName();
        log.error("eventName recieved::"+ eventName);
        ObjectMapper mapper = new ObjectMapper();
        JSONObject json = mapper.convertValue(messageResponse.getEventPayload(), JSONObject.class);
        log.error("payload recieved::"+ json);
        String sprintId= json.get("sprintId").toString();
        String productId  =json.get("productId").toString();
        String userStoryId=   json.get("userStoryId").toString();
        String userStoryName=   json.get("userStoryName").toString();
        String sprintName = sprintService.getSprintData(sprintId).getSprintName();

        System.out.println("\n\n\n\n Here at task reciever"+ userStoryId+"\n\n\n"+userStoryName);
        log.error("sprintId recieved::"+ sprintId+" productId::"+productId+"userstoryId::"+userStoryId);
        JSONObject taskObj = mapper.convertValue(json.get("task"), JSONObject.class);
        Task task1 = new Task();
//        task1.setUserstoryName((String) taskObj.get("userstoryName"));
        task1.setUserstoryId(userStoryId);
        task1.setUserstoryName(userStoryName);
        task1.setTaskName((String) taskObj.get("taskName"));
        task1.setTaskId((String) taskObj.get("taskId"));
        task1.setTaskAssignedTo((String) taskObj.get("taskAssignedTo"));
        task1.setTaskCategory( (String) taskObj.get("taskCategory"));
        task1.setTaskTshirtSize((String) taskObj.get("taskSize"));

//        Task task1 = new Task((String) taskObj.get("taskId"), (String) taskObj.get("taskName"),
//                (String) taskObj.get("taskAssignedTo"), (String) taskObj.get("taskSize"),
//                (String) taskObj.get("taskCategory"),userStoryId,userStoryName);

        System.out.println("\n\n\n\n\n\n\n\n\n this is what task look like "+ task1.toString()+"\n\n\n\n\n\n");

       this.sprintBoardService.createBacklog(productId, sprintId,task1, "");


    }

    @RabbitListener(queues = "${productPlanQueue.queue.name}")
    public void productListener(MessageResponse messageResponse) throws ParseException {
        String eventName = messageResponse.getEventName();
        log.error("eventName recieved::"+ eventName);
        ObjectMapper mapper = new ObjectMapper();
        Product json = mapper.convertValue(messageResponse.getEventPayload(), Product.class);
        log.error("payload recieved::"+ json);
        sprintService.addProduct(json);

        JSONObject json1 = mapper.convertValue(messageResponse.getEventPayload(), JSONObject.class);
        String productId= json1.get("productId").toString();
        String productName  =json1.get("productName").toString();
        int lastActiveSprint=0;
        SprintBoard sprintBoard =new SprintBoard();
        sprintBoard.setLastActiveSprint(lastActiveSprint);
        sprintBoard.setProductId(productId);
        sprintBoard.setProductName(productName);
        kanbanRepository.save(sprintBoard);
    }




//    @RabbitListener(queues = "${sprintPlanQueue.queue.name}")
//    public void sprintPlanListner(JSONObject obj)throws ParseException{
//        ObjectMapper mapper = new ObjectMapper();
//        MessageResponse messageResponse = (MessageResponse) mapper.convertValue(obj, MessageResponse.class);
//        String eventName = messageResponse.getEventName();
//        log.error("eventName recieved::"+ eventName);
//        JSONObject json = mapper.convertValue(messageResponse.getEventPayload(), JSONObject.class);
//        log.error("++++++++++++++++++++++++++", json);
//        log.error("payload recieved::"+ json);
//        String sprintId= json.get("sprintId").toString();
//        String productId  =json.get("productId").toString();
//        log.error("sprintId recieved::"+ sprintId+" productId::"+productId+"userstoryId::");
//        List<Sprint> sprints =(List<Sprint>) mapper.convertValue(json.get("sprint"), new TypeReference<List<Sprint>>(){});
//        System.out.println("productid"+productId+sprintId);
//        System.out.println("sprintIP"+ sprints);
//        this.sprintService.getAllSprints(productId,sprintId,sprints);
//}


    @RabbitListener(queues = "${sprintPlanQueue.queue.name}")
    public void sprintListener(MessageResponse messageResponse) throws ParseException {
        String eventName = messageResponse.getEventName();
        log.error("eventName recieved::"+ eventName);
        ObjectMapper mapper = new ObjectMapper();
        Sprint json = mapper.convertValue(messageResponse.getEventPayload(),Sprint.class);
        log.error("payload recieved::"+ json);

        List<Userstory> userstories = mapper.convertValue(json.getUserstory(), new TypeReference<List<Userstory>>(){});
        System.out.println("Userstories recieved is ++++++"+ userstories);
        json.setUserstory(userstories);
        sprintService.addSprint(json);
    }



//
    // Listner for freeze Sprints data for velocity chart and the leader board
//    @RabbitListener(queues = "SprintStatsQueue")
//    public void statisticsListener(FreezeSprint freezeSprint) {
//        this.velocityChartService.getKanbanBoardData(freezeSprint);
//        this.leaderboardService.getBoardData(freezeSprint);
//
//    }
//

    //Listener for velocity chart and leaderBoard
    @RabbitListener(queues = "${sprintStatsQueue.queue.name}")
    public void statisticsListener(JSONObject obj) throws ParseException{
        ObjectMapper mapper = new ObjectMapper();
//        MessageResponse messageResponse = (MessageResponse) new JSONParser().parse(obj.toString());
        MessageResponse messageResponse = (MessageResponse) mapper.convertValue(obj, MessageResponse.class);
        String eventName = messageResponse.getEventName();
        System.out.println("eventName recieved::"+ eventName);
        JSONObject json = mapper.convertValue(messageResponse.getEventPayload(), JSONObject.class);
        System.out.println("payload recieved::"+ json);
        String sprintId= json.get("sprintId").toString();
        String productId  =json.get("productId").toString();
        String sprintName= json.get("sprintName").toString();
        String productName =json.get("productName").toString();
        String totalTask= json.get("totalTaskCount").toString();
        int taskCount=Integer.parseInt(totalTask);
        List<Task> task = mapper.convertValue(json.get("tasks"), new TypeReference<List<Task>>(){});
        System.out.println("@@@@@@@@@@@@"+task.toString());
        this.velocityChartService.getKanbanBoardData(taskCount,productId, sprintId,sprintName,productName, task);
        this.leaderboardService.getBoardData(productId, sprintId, task);
    }
    //Listener for burndown chart
    @RabbitListener(queues = "${burndownChartQueue.queue.name}")
    public void chartListener(JSONObject obj) throws java.text.ParseException {
        ObjectMapper mapper = new ObjectMapper();
        MessageResponse messageResponse = (MessageResponse) mapper.convertValue(obj, MessageResponse.class);
        String eventName = messageResponse.getEventName();
        System.out.println("eventName recieved::"+ eventName);
        JSONObject json = mapper.convertValue(messageResponse.getEventPayload(), JSONObject.class);
        System.out.println("payload recieved::"+ json);
        String sprintId= json.get("sprintId").toString();
        String productId  =json.get("productId").toString();
//        Date startDate = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ").parse(json.get("startDate").toString());
//        Date endDate = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ").parse(json.get("endDate").toString());
        Date startDate = new Date();
        Date endDate = new Date();
        System.out.println("date++++++++++"+startDate);
        String  mustTask=json.get("totalMustTask").toString();
        int totalMustTask=Integer.parseInt(mustTask);
        String  tryTask=json.get("totalTryTask").toString();
        int totalTryTask=Integer.parseInt(tryTask);
        String  StretchTask=json.get("totalStretchTask").toString();
        int totalStretchTask=Integer.parseInt( StretchTask);
        List<Task> task = mapper.convertValue(json.get("tasks"), new TypeReference<List<Task>>(){});
        System.out.println("#######"+task);
        this.statisticsService.getAllList(productId,sprintId,startDate,endDate,totalMustTask,totalTryTask,totalStretchTask, task);
    }


}