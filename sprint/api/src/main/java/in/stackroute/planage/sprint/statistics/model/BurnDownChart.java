package in.stackroute.planage.sprint.statistics.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.Date;
import java.util.List;

@Document
@Getter
@Setter
@ToString
public class BurnDownChart {
    @Id
    private String id;
    private String productId;
    private String sprintId;
    private Date startDate;
    private Date endDate;
    private int totalMust;
    private int totalTry;
    private int totalStretch;
    List<TaskCompletion> taskCompletion;

}
