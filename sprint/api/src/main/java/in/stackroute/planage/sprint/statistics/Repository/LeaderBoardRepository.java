package in.stackroute.planage.sprint.statistics.Repository;

import in.stackroute.planage.sprint.statistics.model.LeaderBoard;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LeaderBoardRepository extends MongoRepository<LeaderBoard, String> {
    LeaderBoard findByProductIdAndSprintId(String productId, String sprintId);
}
