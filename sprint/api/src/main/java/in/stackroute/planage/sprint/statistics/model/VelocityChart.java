package in.stackroute.planage.sprint.statistics.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;



@Document
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class VelocityChart {

    @Id
    private String id;
    private String productId;
    private String productName;
    private List<SprintStats> sprintStats;

}
