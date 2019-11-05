package in.stackroute.planage.sprint.statistics.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class TaskCompletion {
    private Date completeDate;
    private int taskMust;
    private int taskTry;
    private int taskStretch;

    public TaskCompletion(Date completeDate, int taskMust, int taskTry, int taskStretch) {
        this.completeDate = completeDate;
        this.taskMust = taskMust;
        this.taskTry = taskTry;
        this.taskStretch = taskStretch;
    }


}

