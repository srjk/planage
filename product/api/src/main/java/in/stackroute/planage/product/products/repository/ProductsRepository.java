package in.stackroute.planage.product.products.repository;

import in.stackroute.planage.product.products.model.Products;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ProductsRepository extends MongoRepository<Products,String> {

//    @Query(value = "{'productId':?0}")
//    Optional<Products> findById(String id);

    Products findByProductId(String productId);
    List<Products> findByProductManagerEmail(String productManagerEmail);






}
