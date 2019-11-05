package in.stackroute.planage.process.service.User;

import in.stackroute.planage.process.model.userModel.User;
import in.stackroute.planage.process.model.userModel.UsersResponse;

import java.util.List;

public interface UserManager {
  User saveUser(String userName, String userEmail, String userProfile);
  String generateJwtToken(String userEmail);
  User getUserDetails(String email);
  List<UsersResponse> getAllUsers();
  String onVerifyEmail(String token, String boardId);
  void saveSubscriber(String subscriberId, String boardId);
  User onSaveBoardList(String boardId, String userId);
}
