package in.stackroute.planage.product.backlog.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Arrays;
import java.util.Date;

@Getter
@Setter
@Document
public class UserStory {
    @Id
    private String id;
    private String productId;
    private String epicId;
    private String userStoryName;
    private String description;
    private TShirtSize tShirtSize;
    private UserStory [] dependencies;
    private byte priorityLevel;
    private boolean isUnavailable;
    private int percentCompleted;
    private Date startDate;
    private Date endDate;
}
