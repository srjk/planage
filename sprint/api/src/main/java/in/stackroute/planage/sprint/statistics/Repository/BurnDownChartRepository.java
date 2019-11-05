package in.stackroute.planage.sprint.statistics.Repository;

import in.stackroute.planage.sprint.statistics.model.BurnDownChart;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BurnDownChartRepository extends MongoRepository<BurnDownChart,String> {
    BurnDownChart findByProductIdAndSprintId(String productId, String sprintId);
    BurnDownChart findByProductId(String productId);
}
