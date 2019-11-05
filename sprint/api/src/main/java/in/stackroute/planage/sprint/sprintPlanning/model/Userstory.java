package in.stackroute.planage.sprint.sprintPlanning.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import java.io.Serializable;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@ToString
public class Userstory implements Serializable {

    @Id
    private String userstoryId;
    private String userstoryName;
    private List<Task> task;
    private int noOfCompletedTask;

    public Userstory(){this.userstoryId = UUID.randomUUID().toString().substring(25);}

    public Userstory(String userstoryId, String userstoryName, Task task) {
        this.userstoryId = userstoryId;
        this.userstoryName = userstoryName;
        this.task.add(task);
    }

}
