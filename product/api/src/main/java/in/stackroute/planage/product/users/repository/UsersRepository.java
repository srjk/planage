package in.stackroute.planage.product.users.repository;

import in.stackroute.planage.product.users.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsersRepository extends MongoRepository<User,String> {
    public User findByUserEmail(String email);
}
