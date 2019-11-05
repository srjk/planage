package in.stackroute.planage.sprint.sprintPlanning.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Setter
@Getter
@ToString
public class User {

    @Id
    private String id;
    private String userId;
    private String userName;
    private String userEmail;

}
