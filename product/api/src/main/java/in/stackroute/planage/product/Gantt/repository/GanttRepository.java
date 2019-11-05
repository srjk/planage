package in.stackroute.planage.product.Gantt.repository;

import in.stackroute.planage.product.Gantt.Model.Gantt;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GanttRepository extends MongoRepository<Gantt,String> {

    Gantt findByProductId(String productId);
}
