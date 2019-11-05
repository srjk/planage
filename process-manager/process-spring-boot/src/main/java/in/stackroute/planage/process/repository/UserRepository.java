package in.stackroute.planage.process.repository;

import in.stackroute.planage.process.model.userModel.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
  User findByUserEmail(String email);
}
