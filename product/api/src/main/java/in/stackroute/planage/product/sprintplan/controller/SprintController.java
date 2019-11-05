package in.stackroute.planage.product.sprintplan.controller;

import in.stackroute.planage.product.backlog.model.PrioritizedUserStory;
import in.stackroute.planage.product.backlog.model.UserStory;
import in.stackroute.planage.product.backlog.service.impl.UserStoryService;
import in.stackroute.planage.product.sprintplan.model.RoadMapStories;
import in.stackroute.planage.product.sprintplan.model.Sprints;
import in.stackroute.planage.product.sprintplan.service.SprintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v1")
public class SprintController {
    @Autowired
    SprintService sprintService;
    @Autowired
    UserStoryService userStoryService;

    @PostMapping("products/{productId}/sprints")
    public ResponseEntity<Sprints> addSprint(@RequestBody Sprints sprint,
                                       @PathVariable String productId) {
        sprint.setProductId(productId);
        return new ResponseEntity<>(sprintService.addSprint(sprint), HttpStatus.CREATED);
    }

    @GetMapping("products/{productId}/sprints")
    public ResponseEntity<List<Sprints>> getAllSprintsOfProduct(@PathVariable String productId,
                                                                @RequestParam(name="page", required = true) int page,
                                                                @RequestParam(name="limit", required= true) int limit) {
        Pageable pageable= PageRequest.of(page, limit);
        return new ResponseEntity<>(sprintService.getAllSprintsOfProduct(productId, pageable), HttpStatus.OK);
    }

    @PostMapping("sprints/{sprintId}")
    public ResponseEntity<Sprints>addUserStories (@RequestBody List<RoadMapStories> userStories, @PathVariable String sprintId) {
        Sprints sprint = sprintService.getSprintById(sprintId);
        sprint.setUserStories(userStories);
        for(RoadMapStories userStory : userStories) {
            UserStory storyToBeUpdated = userStoryService.getUserStories(userStory.getId());
            storyToBeUpdated.setUnavailable(true);
            userStoryService.updateUserStory(storyToBeUpdated);
        }
        return new ResponseEntity<>(sprintService.updateSprint(sprint), HttpStatus.OK);
    }
    @PutMapping("sprints/{sprintId}")
    public ResponseEntity<Sprints>updateSprints(@RequestBody Sprints sprint, @PathVariable String sprintId) {
        sprint.setSprintId(sprintId);
        return new ResponseEntity<>(sprintService.updateSprint(sprint), HttpStatus.OK);
    }
    @DeleteMapping("sprints/{sprintId}")
    public HttpStatus deleteSprint(@PathVariable String sprintId) {
        sprintService.deleteSprint(sprintId);
        return (HttpStatus.ACCEPTED);
    }

    @DeleteMapping("sprints/{sprintId}/userstories/{userStoryId}")
    public ResponseEntity<Sprints> deleteUserStory(@PathVariable String sprintId,@PathVariable String userStoryId) {
        Sprints sprint = sprintService.getSprintById(sprintId);
        List<RoadMapStories> listOfUserStories= sprint.getUserStories();
        int counter =0;
        for(RoadMapStories userStory: listOfUserStories) {
            if(userStory.getId().equals(userStoryId)){
                break;
            }
            counter++;
        }
        listOfUserStories.remove(counter);
        sprint.setUserStories(listOfUserStories);
        return new ResponseEntity<>(sprintService.updateSprint(sprint), HttpStatus.ACCEPTED);
    }
}
