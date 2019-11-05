package in.stackroute.planage.product.backlog.controller;

import in.stackroute.planage.product.backlog.model.PrioritizedUserStory;
import in.stackroute.planage.product.backlog.service.impl.ProductService;
import in.stackroute.planage.product.backlog.service.impl.UserStoryService;
import in.stackroute.planage.product.backlog.model.UserStory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1")
@CrossOrigin("*")
public class UserStoryController {

    @Autowired
    private UserStoryService userStoryService;
    @Autowired
    private ProductService productService;


    @GetMapping("userStories/{userStoryId}")
    public ResponseEntity<UserStory> retrieveById(@PathVariable String userStoryId){
        return new ResponseEntity<UserStory>(userStoryService.getUserStories(userStoryId), HttpStatus.OK);
    }
    @GetMapping("products/{productId}/userStories")
    public ResponseEntity<List<UserStory>> retrieveAllUserStoryOfParticularProduct(@PathVariable String productId){
        return new ResponseEntity<>(userStoryService.getAllUserStoryOfProduct(productId),HttpStatus.OK);
    }


    @GetMapping("products/{productId}/epics/{epicId}/userStories")
    public ResponseEntity <List<UserStory>> retrieveUserStories(@RequestParam(name="page", required = true) int page,
                                              @RequestParam(name="limit", required= true) int limit,
                                              @PathVariable String productId, @PathVariable String epicId){
        System.out.println(productId+" "+epicId);
        Pageable pageable= PageRequest.of(page, limit, Sort.by("id").descending());
        System.out.println(userStoryService.getUserStories(productId,epicId, pageable));
        return new ResponseEntity<>(userStoryService.getUserStories(productId,epicId, pageable),HttpStatus.OK);
    }

    @PostMapping("products/{productId}/epics/{epicId}/userStories")
    public ResponseEntity<UserStory> addUserStory(@RequestBody UserStory userStory,
                                                  @PathVariable String productId, @PathVariable String epicId){
        userStory.setEpicId(epicId);
        userStory.setProductId(productId);
        System.out.println(userStory);
        UserStory newUserStory= userStoryService.addUserStory(userStory);
        if(userStory.getPriorityLevel()>0){
            PrioritizedUserStory prioritizedUserStory= new PrioritizedUserStory();
            prioritizedUserStory.setId(newUserStory.getId());
            prioritizedUserStory.setPriorityLevel(newUserStory.getPriorityLevel());
            prioritizedUserStory.setUserStoryName(newUserStory.getUserStoryName());
            productService.updatePriority(productId, epicId, prioritizedUserStory);
        }
        return new ResponseEntity<>(newUserStory, HttpStatus.OK);
    }

    @PutMapping("userStories/{userStoryId}")
    public ResponseEntity<UserStory> updateUserStory(@RequestBody UserStory userStory){
        return new ResponseEntity<>(userStoryService.updateUserStory(userStory), HttpStatus.OK);
    }
}
