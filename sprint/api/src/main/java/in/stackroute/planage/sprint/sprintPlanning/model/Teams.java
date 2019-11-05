package in.stackroute.planage.sprint.sprintPlanning.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import java.util.UUID;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
@Setter
@Getter
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class Teams {

    private String memberId;
    private String usersId;
    private String memberName;
    private String memberEmail;

}

