package in.stackroute.planage.sprint.kanban.repository;

import in.stackroute.planage.sprint.kanban.model.SprintBoard;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SprintBoardRepository extends MongoRepository <SprintBoard, String> {
    public Optional<SprintBoard> findByProductId(String productId);

    public SprintBoard findBySprintIdAndProductId(String sprintId, String productId);

    void deleteByProductIdAndSprintId(String productId, String sprintId);


}