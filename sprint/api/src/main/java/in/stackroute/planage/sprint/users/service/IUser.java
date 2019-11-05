package in.stackroute.planage.sprint.users.service;

import in.stackroute.planage.sprint.users.model.Users;

import java.util.List;

public interface IUser {
    List<Users> getAllUsers();
    public Users addUsers(String username, String email);
}
