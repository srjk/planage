package in.stackroute.planage.promanager.repository;


import in.stackroute.planage.promanager.model.Program;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ProgramRepository extends MongoRepository<Program, String> {
}
