package in.stackroute.planage.product.sprintplan.repository;

import in.stackroute.planage.product.sprintplan.model.Sprints;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface SprintRepository extends MongoRepository<Sprints, String> {
    public Optional<List<Sprints>> findByProductId(String productId, Pageable pageable);
//    public List<Sprints> findByProductId(String productId);
}
