package in.stackroute.planage.promanager.repository;

import in.stackroute.planage.promanager.model.Assignee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AssigneeRepository extends MongoRepository<Assignee, String> {

  public  List<Assignee> findAllByEmail(String email);

  public List<Assignee> deleteByEmailAndProgramId(String email, String programId);
}
