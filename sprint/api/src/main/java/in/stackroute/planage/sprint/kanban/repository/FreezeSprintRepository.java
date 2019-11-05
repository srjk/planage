package in.stackroute.planage.sprint.kanban.repository;

import in.stackroute.planage.sprint.kanban.model.FreezeSprint;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FreezeSprintRepository extends MongoRepository <FreezeSprint, String>{
  //  public FreezeSprint findByProductIdAndSprintId(String productId, String sprintId);

}
