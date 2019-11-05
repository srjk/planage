package in.stackroute.planage.sprint.sprintPlanning.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import java.util.List;

@Getter
@Setter
@Document
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Sprint {

    @Id
    private String sprintId;
    private String productId;
    private String sprintName;
    private int sprintNumber;
    private List<Userstory> userstory;

    public String getSprintId() {
        return sprintId;
    }

    public void setSprintId(String sprintId) {
        this.sprintId = sprintId;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getSprintName() {
        return sprintName;
    }

    public void setSprintName(String sprintName) {
        this.sprintName = sprintName;
    }

    public List<Userstory> getUserstory() {
        return userstory;
    }

    public void setUserstory(List<Userstory> userstory) {
        this.userstory = userstory;
    }
}
