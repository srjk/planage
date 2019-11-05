package in.stackroute.planage.sprint.users.repository;

import in.stackroute.planage.sprint.users.model.Users;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsersRepository extends MongoRepository<Users,String> {
    public Users findByUserEmail(String email);
}
