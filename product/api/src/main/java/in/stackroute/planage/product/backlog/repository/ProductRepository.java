package in.stackroute.planage.product.backlog.repository;

import in.stackroute.planage.product.backlog.model.ProductBacklog;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductRepository extends MongoRepository<ProductBacklog, String> {
    Optional<ProductBacklog> findByProductId(String productId);
}