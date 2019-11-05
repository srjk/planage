package in.stackroute.planage.sprint.sprintPlanning.repository;

import in.stackroute.planage.sprint.sprintPlanning.model.Sprint;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface SprintRepository extends MongoRepository<Sprint, String> {

    Optional<Sprint> findBySprintIdAndProductId(String productId, String sprintId);
    Optional<List<Sprint>> findByProductId(String productId, Pageable pageable);


}
