package in.stackroute.planage.sprint.sprintPlanning.service;

import in.stackroute.planage.sprint.sprintPlanning.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IUser {

    public List<User> getUser();

    public User addUser(User user);

}
