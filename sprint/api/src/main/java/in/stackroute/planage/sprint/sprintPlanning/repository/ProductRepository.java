package in.stackroute.planage.sprint.sprintPlanning.repository;

import in.stackroute.planage.sprint.sprintPlanning.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ProductRepository extends MongoRepository<Product,String> {
    List<Product> findByUserEmail(String userEmail);
}
