package in.stackroute.planage.process.model.userModel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsersResponse {
  private String userId;
  private String userEmail;
  private String userName;
}
