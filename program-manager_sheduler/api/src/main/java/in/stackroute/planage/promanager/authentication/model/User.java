package in.stackroute.planage.promanager.authentication.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Document
@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(value = {"createdAt"}, allowGetters = true)

public class User {

  @Id
  private String id = UUID.randomUUID().toString();
  private String text;
  private String email;
  private String userRole;
  private List<String> productNameList;

//  public User(String userName, String userEmail) {
//    this.text = userName;
//    this.email = userEmail;
//  }

}
