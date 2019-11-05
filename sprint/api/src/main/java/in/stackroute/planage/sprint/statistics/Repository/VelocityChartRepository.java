package in.stackroute.planage.sprint.statistics.Repository;

import in.stackroute.planage.sprint.statistics.model.VelocityChart;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface VelocityChartRepository extends MongoRepository<VelocityChart,String> {
    VelocityChart findByProductId(String productId);

//   List<VelocityChart> findByProductId(String productId);

}