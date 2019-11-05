package in.stackroute.planage.promanager.repository;

import in.stackroute.planage.promanager.model.ProductCalender;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductCalenderRepository extends MongoRepository<ProductCalender, String> {

  public List<ProductCalender> findAllByCreatedBy(String email);
}
