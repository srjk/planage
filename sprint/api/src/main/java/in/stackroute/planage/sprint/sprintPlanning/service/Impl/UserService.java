package in.stackroute.planage.sprint.sprintPlanning.service.Impl;

import in.stackroute.planage.sprint.sprintPlanning.model.User;
import in.stackroute.planage.sprint.sprintPlanning.repository.UserRepository;
import in.stackroute.planage.sprint.sprintPlanning.service.IUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUser {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getUser() {
        return userRepository.findAll();
    }

    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }

}
