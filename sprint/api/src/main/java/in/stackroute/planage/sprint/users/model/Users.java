package in.stackroute.planage.sprint.users.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@Setter
@Getter
@ToString
@NoArgsConstructor
@JsonIgnoreProperties(value = {"createdAt"}, allowGetters = true)

public class Users {
    @Id
    private String id;
    private String userName;
    private String userEmail;
    private List<UserProduct> products;

    public Users(String userName, String userEmail) {
        this.userName = userName;
        this.userEmail = userEmail;
    }
}
