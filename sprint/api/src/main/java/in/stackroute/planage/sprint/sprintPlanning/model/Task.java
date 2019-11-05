package in.stackroute.planage.sprint.sprintPlanning.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import java.util.UUID;

@ToString
public class Task {

    @Id
    private String taskId;
    private String taskName;
    private String taskAssignedTo;
    private String taskSize;
    private String userstoryName;
    private String taskCategory;

    public String getUserstoryName() {
        return userstoryName;
    }

    public void setUserstoryName(String userstoryName) {
        this.userstoryName = userstoryName;
    }


    public Task(){this.taskId = UUID.randomUUID().toString().substring(25);}

    public Task(String taskId, String taskName, String taskAssignedTo, String taskSize, String taskCategory) {
        this.taskId = taskId;
        this.taskName = taskName;
        this.taskAssignedTo = taskAssignedTo;
        this.taskSize = taskSize;
        this.taskCategory = taskCategory;
    }

    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public String getTaskAssignedTo() {
        return taskAssignedTo;
    }

    public void setTaskAssignedTo(String taskAssignedTo) {
        this.taskAssignedTo = taskAssignedTo;
    }

    public String getTaskSize() {
        return taskSize;
    }

    public void setTaskSize(String taskSize) {
        this.taskSize = taskSize;
    }

    public String getTaskCategory() {
        return taskCategory;
    }

    public void setTaskCategory(String taskCategory) {
        this.taskCategory = taskCategory;
    }
}
