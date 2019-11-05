package in.stackroute.planage.sprint.kanban.model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
@Document
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class FreezeSprint {
    @Id
    private String id;
    private String sprintId;
    private String productId;
    private String productName;
    private String sprintName;
    private Date startDate;
    private Date endDate;
    private List<Column> column = new ArrayList<>();
}
