package in.stackroute.planage.promanager.repository;

import in.stackroute.planage.promanager.model.Task;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface TaskRepository extends MongoRepository<Task, String> {

  public List<Task> findAllByProgramId(String programId);

  public List<Task> findAllByProgramIdAndStatus(String programId, boolean status);

  public void deleteByProgramId(String programId);

}
