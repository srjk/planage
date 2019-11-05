package in.stackroute.planage.promanager.repository;

import in.stackroute.planage.promanager.model.Session;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface SessionRepository extends MongoRepository<Session, String> {
  public List<Session> findAllByProgramId(String programId);
}
