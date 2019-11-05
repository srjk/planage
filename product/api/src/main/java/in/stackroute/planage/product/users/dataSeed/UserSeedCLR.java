/*package in.stackroute.planage.product.users.dataSeed;

import in.stackroute.planage.product.products.repository.ProductsRepository;
import in.stackroute.planage.product.users.model.Users;
import in.stackroute.planage.product.users.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@PropertySource("classpath:application.properties")
@Component
public class UserSeedCLR implements CommandLineRunner {

    @Autowired
    UsersRepository usersRepository;

    @Override
    public void run(String... args) throws Exception {
        Users users = new Users("Bhavani A C","bhavaniac145@gmail.com");
        Users users1 = new Users("Naman","naman@gmail.com");
        Users users2 = new Users("Purvi sharma","purvi@gmail.com");
        Users users3 = new Users("Dikshi Jain","dikshi@gmail.com");
        Users users4 = new Users("Akshata A","akshata@gmail.com");
        Users users5 = new Users("Ajeet C","ajeet@gmail.com");
        usersRepository.save(users);
        usersRepository.save(users1);
        usersRepository.save(users2);
        usersRepository.save(users3);
        usersRepository.save(users4);
        usersRepository.save(users5);
    }
}

*/
