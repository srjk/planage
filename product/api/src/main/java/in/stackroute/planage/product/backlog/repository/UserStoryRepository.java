package in.stackroute.planage.product.backlog.repository;

import in.stackroute.planage.product.backlog.model.UserStory;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UserStoryRepository extends MongoRepository<UserStory, String> {
    List<UserStory> findByProductIdAndEpicId(String productId, String epidId, Pageable pageable);
    List<UserStory> findByProductId(String productId);
}
