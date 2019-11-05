package in.stackroute.planage.process.model.userModel;

import in.stackroute.planage.process.model.boardModel.BoardList;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@NoArgsConstructor
@ToString
@Document(collection = "users")
public class User {

  @Id
  public String _id;
  public String userId;
  public String userName;
  public String userEmail;
  public String userProfile;
  public List<BoardList> boardList;

  public User(String name, String email, String profile, List<BoardList> boardList){
    this.userName = name;
    this.userEmail = email;
    this.userProfile = profile;
    this.boardList = boardList;
  }
}
