package in.stackroute.planage.sprint.statistics.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TeamMember {
    private String taskAssignedTo;
    private int taskMust;
    private int taskTry;
    private int taskStretch;

    public TeamMember(String taskAssignedTo, int taskMust, int taskTry, int taskStretch) {
        this.taskAssignedTo = taskAssignedTo;
        this.taskMust = taskMust;
        this.taskTry = taskTry;
        this.taskStretch = taskStretch;
    }

    @Override
    public String toString() {
        return "TeamMember{" +
                "taskAssignedTo='" + taskAssignedTo + '\'' +
                ", taskMust=" + taskMust +
                ", taskTry=" + taskTry +
                ", taskStretch=" + taskStretch +
                '}';
    }
}
