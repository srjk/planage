package in.stackroute.planage.product.Configuration;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import in.stackroute.planage.product.Gantt.Model.Gantt;
import in.stackroute.planage.product.Gantt.Model.Sprint;
import in.stackroute.planage.product.Gantt.Service.impl.GanttService;
import in.stackroute.planage.product.backlog.model.PrioritizedUserStory;
import in.stackroute.planage.product.backlog.model.ProductBacklog;
import in.stackroute.planage.product.backlog.service.impl.ProductService;
import in.stackroute.planage.product.sprintplan.model.RoadMapStories;
import in.stackroute.planage.product.sprintplan.model.Sprints;
import in.stackroute.planage.product.sprintplan.service.SprintService;
import lombok.Getter;
import lombok.Setter;
import org.json.simple.JSONObject;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Receiver {

    @Autowired
    private ProductService productService;
    @Autowired
    private GanttService ganttService;
    @Autowired
    private SprintService sprintService;


    @RabbitListener(queues = "${productBacklogQueue.queue.name}")
    public void productBacklogListener(MessageResponse messageResponse) throws ParseException{
        String eventName = messageResponse.getEventName();
//        log.error("eventName recieved::"+ eventName);
        ObjectMapper mapper = new ObjectMapper();
        JSONObject json = mapper.convertValue(messageResponse.getEventPayload(), JSONObject.class);
        System.out.println("Received backlog"+json);
//        log.error("payload recieved::"+ json);
        ProductBacklog productBacklog = new ProductBacklog();
        productBacklog.setProductId(json.get("productId").toString());
        productBacklog.setProductName(json.get("productName").toString());
        productService.addProductBacklog(productBacklog);
    }


    @RabbitListener(queues = "${productRoadMapQueue.queue.name}")
    public void productRoadmapListener(MessageResponse messageResponse) throws ParseException{
        String eventName = messageResponse.getEventName();
//        log.error("eventName recieved::"+ eventName);
        ObjectMapper mapper = new ObjectMapper();
        JSONObject json = mapper.convertValue(messageResponse.getEventPayload(), JSONObject.class);
        System.out.println("Received roadmap"+json);
//        log.error("payload recieved::"+ json);
        Gantt gantt = new Gantt();
        gantt.setProductId(json.get("productId").toString());
        gantt.setProductName(json.get("productName").toString());
        ganttService.addData(gantt);

    }

//    @RabbitListener(queues = "ganttChartQueue")
//    public void updateGanttChart(Sprints recievedSprint) throws NullPointerException{
//        int index = 0;
//        System.out.println(recievedSprint.getSprintId());
//        Gantt gantt = ganttService.getGanttData(recievedSprint.getProductId());
//        boolean found = false;
//        Sprint sprint = new Sprint();
//        sprint.setId(recievedSprint.getSprintId());
//        sprint.setUserStory(recievedSprint.getUserStories());
//        List<Sprint> sprintList = gantt.getSprint();
//        if(sprintList == null) {
//            List<Sprint> newListOfSprint = new ArrayList<>();
//            newListOfSprint.add(sprint);
//            gantt.setSprint(newListOfSprint);
//            ganttService.addData(gantt);
//        } else {
//            for(Sprint iteratedSprint : sprintList) {
//                if(iteratedSprint.getId().equals(recievedSprint.getSprintId())) {
//                    found = true;
//                    break;
//                }
//                index++;
//            }
//            if(found== true) {
//                sprintList.remove(index);
//                sprintList.add(index, sprint);
//            } else {
//                sprintList.add(sprint);
//            }
//            gantt.setSprint(sprintList);
//            ganttService.addData(gantt);
//        }
//    }

    @RabbitListener(queues = "${ganttQueue.queue.name}")
    public void ganttChartListener(MessageResponse messageResponse) throws ParseException{
        String eventName = messageResponse.getEventName();
//        log.error("eventName recieved::"+ eventName);
        System.out.println("++++++++++++++++++++"+eventName+"/n/n/n/n/n/n");
        ObjectMapper mapper = new ObjectMapper();
        JSONObject json = mapper.convertValue(messageResponse.getEventPayload(), JSONObject.class);
        System.out.println(json+"/n/n/n/n");
//        log.error("payload recieved::"+ json);
        int index = 0;
        String sprintId = json.get("sprintId").toString();
        System.out.println("Sprint id"+sprintId);
        Gantt gantt = ganttService.getGanttData(json.get("productId").toString());
        boolean found = false;
        Sprint sprint = new Sprint();
        sprint.setId(sprintId);
//        List<RoadMapStories> userStoryList = mapper.convertValue(json.get("userStory"), new TypeReference<List<RoadMapStories>>(){});
        List<RoadMapStories> userStoryList = (List<RoadMapStories>)json.get("userStories");
        System.out.println("____________________________________"+userStoryList);
       sprint.setUserStory(userStoryList);
        List<Sprint> sprintList = gantt.getSprint();
        if(sprintList == null) {
            List<Sprint> newListOfSprint = new ArrayList<>();
            newListOfSprint.add(sprint);
            gantt.setSprint(newListOfSprint);
            ganttService.addData(gantt);
        } else {
            for(Sprint iteratedSprint : sprintList) {
                String id = iteratedSprint.getId();
                System.out.println("id"+id);
                if(id.equals(sprintId)) {
                    found = true;
                    break;
                }
                index++;
            }
            if(found== true) {
                sprintList.remove(index);
                sprintList.add(index, sprint);
            } else {
                sprintList.add(sprint);
            }
            gantt.setSprint(sprintList);
            ganttService.addData(gantt);
        }

    }
    @RabbitListener(queues = "${sprintPlanQueue.queue.name}")
    public void FinalSprintListner(MessageResponse messageResponse) throws ParseException {
        String eventName = messageResponse.getEventName();
//        log.error("eventName recieved::"+ eventName);
        System.out.println("++++++++++++++++++++"+eventName+"/n/n/n/n/n/n");
        ObjectMapper mapper = new ObjectMapper();
        JSONObject json = mapper.convertValue(messageResponse.getEventPayload(), JSONObject.class);
        System.out.println(json+"/n/n/n/n");
        String currentSprintId= json.get("sprintId").toString();
        List<IncomingStoryFormat> userStories = (List<IncomingStoryFormat>) json.get("userStory");
        Sprints currentSprint = sprintService.getSprintById(currentSprintId);
        List<RoadMapStories> listOfStories= currentSprint.getUserStories();
        String productId= currentSprint.getProductId();

        System.out.println(productId);
        System.out.println(currentSprintId);
        System.out.println(userStories);
        System.out.println(currentSprint);
        System.out.println(listOfStories);

        for (IncomingStoryFormat userStory: userStories) {
            if (userStory.getSprintId().equals(currentSprintId)) {
                System.out.println("Matched !");

                for (RoadMapStories story: listOfStories)  {
                    if(story.getId().equals(userStory.getUserStory().getUserStoryId())) {
                        System.out.println("Found !");
                        story.setIsSelected(true);
                        story.setStartDate(new Date());
                        break;
                    }
                }
                currentSprint.setUserStories(listOfStories);
                sprintService.updateSprint(currentSprint);
            } else {
                System.out.println("Not Matched");
                // find user story from outdated sprint
                Sprints outdatedSprint = sprintService.getSprintById(userStory.getSprintId());
                List<RoadMapStories> listOfOutdatedStories = outdatedSprint.getUserStories();
                RoadMapStories storyToBeShifted = new RoadMapStories();
                // delete user story from outdated sprint
                int counter = 0;
                for(RoadMapStories story: listOfOutdatedStories) {
                    if(story.getId().equals(userStory.getUserStory().getUserStoryId())) {
                        storyToBeShifted = story;
                        storyToBeShifted.setIsSelected(true);
                        storyToBeShifted.setStartDate(new Date());
                        break;
                    }
                    counter ++;
                }
                listOfOutdatedStories.remove(counter);
                // append user story in current sprint
                listOfStories.add(storyToBeShifted);
                // update both the sprints in the db
                sprintService.updateSprint(outdatedSprint);
                sprintService.updateSprint(currentSprint);
            }
        }
    }
}


































//
//    @RabbitListener(queues = "${sprintPlanQueue.queue.name}")
//    public void FinalSprintListner(IncommingMessageFormat updatedSprintPlan) {
//        String currentSprintId= updatedSprintPlan.getSprintId();
//        List<IncomingStoryFormat> userStories = updatedSprintPlan.getUserStories();
//        Sprints currentSprint = sprintService.getSprintById(currentSprintId);
//        List<RoadMapStories> listOfStories= currentSprint.getUserStories();
//        String productId= currentSprint.getProductId();
//
//        System.out.println(productId);
//        System.out.println(currentSprintId);
//        System.out.println(userStories);
//        System.out.println(currentSprint);
//        System.out.println(listOfStories);
//
//        for (IncomingStoryFormat userStory: userStories) {
//            if (userStory.getSprintId().equals(currentSprintId)) {
//                System.out.println("Matched !");
//
//                for (RoadMapStories story: listOfStories)  {
//                    if(story.getId().equals(userStory.getUserStoryId())) {
//                        System.out.println("Found !");
//                        story.setIsSelected(true);
//                        break;
//                    }
//                }
//                currentSprint.setUserStories(listOfStories);
//                sprintService.updateSprint(currentSprint);
//            } else {
//                System.out.println("Not Matched");
//                // find user story from outdated sprint
//                Sprints outdatedSprint = sprintService.getSprintById(userStory.getSprintId());
//                List<RoadMapStories> listOfOutdatedStories = outdatedSprint.getUserStories();
//                RoadMapStories storyToBeShifted = new RoadMapStories();
//                // delete user story from outdated sprint
//                int counter = 0;
//                for(RoadMapStories story: listOfOutdatedStories) {
//                    if(story.getId().equals(userStory.getUserStoryId())) {
//                        storyToBeShifted = story;
//                        storyToBeShifted.setIsSelected(true);
//                        break;
//                    }
//                    counter ++;
//                }
//                listOfOutdatedStories.remove(counter);
//                // append user story in current sprint
//                listOfStories.add(storyToBeShifted);
//                // update both the sprints in the db
//                sprintService.updateSprint(outdatedSprint);
//                sprintService.updateSprint(currentSprint);
//            }
//        }
//    }
//}

@Setter
@Getter
class IncommingMessageFormat {
        String sprintId;
        List<IncomingStoryFormat> userStories;
        }
@Setter
@Getter
class IncomingStoryFormat {
    UserStoryFormat userStory;
    String sprintId;
    String sprintName;
}

@Getter
@Setter
class UserStoryFormat {
    String userStoryId;
    String userStoryName;
}

/*
/        for(IncomingStoryFormat userStory: userStories) {
//            if(userStory.sprintId.equals(currentSprintId)) {
//                for(RoadMapStories story : listOfStories) {
//                    if(story.getId().equals((userStory.getUserStoryId()))) {
//                        story.setIsSelected(true);
//                    }
//                }
//                // update current sprint
//               currentSprint.setUserStories(listOfStories);
//               sprintService.updateSprint(currentSprint);
//                // send data to websockets
//            } else {
////                //remove user story from it's original sprint
////                Sprints outdatedSprint = sprintService.getSprintById(userStory.getSprintId());
////                System.out.println(outdatedSprint);
////                int counter=0;
////                RoadMapStories roadMapStories = new RoadMapStories();
////                List<RoadMapStories> outdatedListOfSprints = outdatedSprint.getUserStories();
////                System.out.println("Hi from the else block");
////                System.out.println(outdatedListOfSprints);
////                for(RoadMapStories story : outdatedListOfSprints) {
////                    if(story.getId().equals(userStory.getUserStoryId())) {
////                        roadMapStories = story;
////                        roadMapStories.setIsSelected(true);
////                    }
////                    counter ++;
////                }
////                outdatedListOfSprints.remove(counter);
////                outdatedSprint.setUserStories(outdatedListOfSprints);
////                sprintService.updateSprint(outdatedSprint);
//                //add user story to current sprint
//              //  listOfStories.add(roadMapStories);
//                // send data to websockets
//            }
//        }
        //currentSprint.setUserStories(listOfStories);
        //sprintService.updateSprint(currentSprint);
*/
