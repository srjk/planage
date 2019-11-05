package in.stackroute.planage.promanager.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import in.stackroute.planage.promanager.model.Participant;

import java.util.List;

@Repository
public interface ParticipantRepository extends MongoRepository<Participant, String> {

  public List<Participant> findAllByEmail(String email);

  public Participant findByEmailAndProgramId(String email, String programId);
   public List<Participant> findByProgramId(String productId);

  public List<Participant> findAllByProgramId(String programId);

}
