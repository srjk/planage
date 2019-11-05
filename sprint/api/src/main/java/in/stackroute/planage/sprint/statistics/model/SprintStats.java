package in.stackroute.planage.sprint.statistics.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
public class SprintStats {

    private String sprintId;
    private String sprintName;
    private int taskCommitted;
    private int taskCompleted;

    public SprintStats(String sprintId, String sprintName, int taskCommitted, int taskCompleted) {
        this.sprintId = sprintId;
        this.sprintName = sprintName;
        this.taskCommitted = taskCommitted;
        this.taskCompleted = taskCompleted;
    }
}
