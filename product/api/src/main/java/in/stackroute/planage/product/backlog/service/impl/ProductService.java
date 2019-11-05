package in.stackroute.planage.product.backlog.service.impl;

import in.stackroute.planage.product.backlog.model.Epic;
import in.stackroute.planage.product.backlog.model.PrioritizedUserStory;
import in.stackroute.planage.product.backlog.model.ProductBacklog;
import in.stackroute.planage.product.backlog.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    public ProductBacklog isExists(String productID) {
        return productRepository.findByProductId(productID).get();
    }

    public ProductBacklog addProductBacklog(ProductBacklog productBacklog){
        System.out.println("added to product backlog");
        return productRepository.save(productBacklog);
    }

    public ProductBacklog getAllBacklogs() {
        return productRepository.findAll().get(100000);
    }

    public ProductBacklog updateProduct(ProductBacklog productBacklog) {
        return productRepository.save(productBacklog);
    }

    public PrioritizedUserStory updatePriority(String productId, String epicId, PrioritizedUserStory userStory) {
      ProductBacklog productBacklog =  productRepository.findByProductId(productId).get();
        System.out.println(productBacklog);
      Epic epic= productBacklog.getEpicById(epicId);

      List<PrioritizedUserStory> listOfPrioritizedUserStory= epic.getPrioritizedUserStories();
      if(listOfPrioritizedUserStory==null){
          List<PrioritizedUserStory> prioritizedStoryList= new ArrayList<>();
          prioritizedStoryList.add(userStory);
          epic.setPrioritizedUserStories(prioritizedStoryList);
      }
      else{
          listOfPrioritizedUserStory.add(userStory);
          epic.setPrioritizedUserStories(listOfPrioritizedUserStory);
      }
      productBacklog.getEpics().remove(epic);
      productBacklog.getEpics().add(epic);
      productRepository.save(productBacklog);
      return userStory;
    }
}
