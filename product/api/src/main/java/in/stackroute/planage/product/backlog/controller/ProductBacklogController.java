package in.stackroute.planage.product.backlog.controller;

import in.stackroute.planage.product.backlog.model.UserStory;
import in.stackroute.planage.product.backlog.service.impl.ProductService;
import in.stackroute.planage.product.backlog.model.Epic;
import in.stackroute.planage.product.backlog.model.PrioritizedUserStory;
import in.stackroute.planage.product.backlog.model.ProductBacklog;
import in.stackroute.planage.product.backlog.service.impl.UserStoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/v1/products")
@CrossOrigin("*")
public class ProductBacklogController {
    @Autowired
    ProductService productService;
    @Autowired
    UserStoryService userStoryService;
    @GetMapping("{productID}/backlogs")
    public ResponseEntity retrieveBacklogProductById(@PathVariable String productID){
        if(productID!=null){
            return new ResponseEntity <> (productService.isExists(productID), HttpStatus.OK);
        }

        return null;
        //return new ResponseEntity <> (productService.getAllProducts(), HttpStatus.OK);
    }

//    @GetMapping("/backlogs")
//    public ResponseEntity retrieveBacklogByProductByName(@RequestParam(name="productName") String productName){
//            return new ResponseEntity <> (productService.isExistsByName(productName), HttpStatus.OK);
//    }

    @PutMapping("{productId}/backlogs/epics")
    public ResponseEntity addEpic(@PathVariable String productId, @RequestBody Epic epic){
        ProductBacklog productBacklog = (productService.isExists(productId));
        List<Epic> productEpics= productBacklog.getEpics();
        if(productEpics==null){
            List<Epic> epicList = new ArrayList<>();
            epicList.add(0,epic);
            productBacklog.setEpics(epicList);
        }
        else{
            productEpics.add(0,epic);
            productBacklog.setEpics(productEpics);
        }
        return new ResponseEntity <ProductBacklog> (productService.updateProduct(productBacklog), HttpStatus.OK);
    }


    @PutMapping("{productId}/backlogs/epics/{epicId}/priority")
    public ResponseEntity addToPriority(@PathVariable String productId, @PathVariable String epicId, @RequestBody PrioritizedUserStory prioritizedUserStory){
        ProductBacklog productBacklog = productService.isExists(productId);
        Epic epic= productBacklog.getEpicById(epicId);
        if(epic.getPrioritizedUserStories()== null){
            List priorityList= new ArrayList<PrioritizedUserStory>();
            priorityList.add(prioritizedUserStory);
            productBacklog.getEpicById(epicId).setPrioritizedUserStories(priorityList);
        }

        epic.getPrioritizedUserStories().add(prioritizedUserStory);
        productService.updateProduct(productBacklog);
        UserStory userStory= userStoryService.getUserStories(prioritizedUserStory.getId());
        userStory.setPriorityLevel(prioritizedUserStory.getPriorityLevel());
        userStoryService.updateUserStory(userStory);
        return new ResponseEntity<Epic> (productBacklog.getEpicById(epicId) , HttpStatus.OK);
    }

    @DeleteMapping("{productId}/backlogs/epics/{epicId}/priority/{userStoryId}")
    public ResponseEntity removeFromPriority(@PathVariable String productId, @PathVariable String epicId, @PathVariable String userStoryId){
        ProductBacklog productBacklog = productService.isExists(productId);
        productBacklog.getEpicById(epicId).removeFromPriority(userStoryId);
        UserStory userStory= userStoryService.getUserStories(userStoryId);
        userStory.setPriorityLevel((byte)0);
        userStoryService.updateUserStory(userStory);
        return new ResponseEntity<ProductBacklog> (productService.updateProduct(productBacklog), HttpStatus.OK);
    }
}
