package in.stackroute.planage.promanager.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Product extends MongoRepository<Product, String> {
}
