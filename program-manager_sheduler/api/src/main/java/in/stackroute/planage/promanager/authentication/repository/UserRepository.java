package in.stackroute.planage.promanager.authentication.repository;

import in.stackroute.planage.promanager.authentication.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserRepository extends MongoRepository<User, String> {
  public User findByEmail(String email);

 public List<User> findByUserRole(String userRole);
}
