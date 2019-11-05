package in.stackroute.planage.product.backlog.service.impl;

import in.stackroute.planage.product.backlog.model.UserStory;
import in.stackroute.planage.product.backlog.repository.UserStoryRepository;
import org.apache.tomcat.jni.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserStoryService {
    @Autowired
    UserStoryRepository userStoryRepository;

    public UserStory getUserStories(String userStoryId) {
        return userStoryRepository.findById(userStoryId).get();
    }

    public List<UserStory> getUserStories(String productId, String epicId, Pageable pageable) {
        return userStoryRepository.findByProductIdAndEpicId(productId,epicId,pageable);
    }

    public UserStory addUserStory(UserStory userStory) {
        return userStoryRepository.save(userStory);
    }

    public UserStory updateUserStory(UserStory userStory) {
        return userStoryRepository.save(userStory);
    }

    public List<UserStory> getAllUserStoryOfProduct(String productId){
        return userStoryRepository.findByProductId(productId);
    }
}
