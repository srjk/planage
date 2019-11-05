package in.stackroute.planage.sprint.sprintPlanning.repository;

import in.stackroute.planage.sprint.sprintPlanning.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

}