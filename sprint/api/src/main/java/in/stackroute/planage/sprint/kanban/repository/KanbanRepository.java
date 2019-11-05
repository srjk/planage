package in.stackroute.planage.sprint.kanban.repository;

import in.stackroute.planage.sprint.kanban.model.SprintBoard;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface KanbanRepository extends MongoRepository<SprintBoard, String> {
    public Optional<SprintBoard> findByProductId(String productId);
}
