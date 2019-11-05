package in.stackroute.planage.product.sprintplan.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@Setter
@Getter
@NoArgsConstructor
public class Sprints {
    @Id
    private String sprintId;
    private String productId;
    private String sprintName;
    private String productName;
    private int sprintDuration;
    private List<RoadMapStories> userStories;

    @Override
    public String toString() {
        return "Sprints{" +
                "sprintId='" + sprintId + '\'' +
                ", productId='" + productId + '\'' +
                ", sprintName='" + sprintName + '\'' +
                ", productName='" + productName + '\'' +
                ", sprintDuration=" + sprintDuration +
                ", userStories=" + userStories +
                '}';
    }
}
