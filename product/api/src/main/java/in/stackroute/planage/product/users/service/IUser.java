package in.stackroute.planage.product.users.service;

import in.stackroute.planage.product.users.model.User;

import java.util.List;

public interface IUser {
    List<User> getAllUsers();
    public User addUsers(String username, String email);
}
