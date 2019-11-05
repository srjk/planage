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
public class SprintsBoard {
    @Id
    private String id;
    private String productId;
    private String productName;
    private String sprintId;
    private String sprintName;
    private Date startDate;
    private Date endDate;
    private List<ColumnList> columnList;

    public SprintsBoard(String productId, String productName, String sprintId, String sprintName, Date startDate, Date endDate) {
        this.productId = productId;
        this.productName = productName;
        this.sprintId = sprintId;
        this.sprintName = sprintName;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
