package in.stackroute.planage.sprint.statistics.Repository;


import in.stackroute.planage.sprint.statistics.model.SprintsBoard;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StatisticsRepository extends MongoRepository<SprintsBoard, String> {


}
