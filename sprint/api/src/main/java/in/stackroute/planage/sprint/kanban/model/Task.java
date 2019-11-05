package in.stackroute.planage.sprint.kanban.model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

@ToString
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Task {
    private String taskId;
    private String taskName;
    private String taskAssignedTo;
    private String taskTshirtSize;
    private String taskCategory;
    private Date completedAt;
    private String userstoryId;
    private String userstoryName;

    public Task(String taskId, String taskName, String taskAssignedTo, String taskSize, String taskCategory, String userstoryId) {
        this.taskId = taskId;
        this.taskName= taskName;
        this.taskAssignedTo= taskAssignedTo;
        this.taskTshirtSize =taskSize;
        this.taskCategory=taskCategory;
        this.userstoryId= userstoryId;
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

    public String getTaskTshirtSize() {
        return taskTshirtSize;
    }

    public void setTaskTshirtSize(String taskTshirtSize) {
        this.taskTshirtSize = taskTshirtSize;
    }

    public String getTaskCategory() {
        return taskCategory;
    }

    public void setTaskCategory(String taskCategory) {
        this.taskCategory = taskCategory;
    }

    public Date getCompletedAt() {
        return completedAt;
    }

    public void setCompletedAt(Date completedAt) {
        this.completedAt = completedAt;
    }

    public String getUserstoryId() {
        return userstoryId;
    }

    public void setUserstoryId(String userstoryId) {
        this.userstoryId = userstoryId;
    }


    public Task(String taskId, String taskName, String taskAssignedTo, String taskSize, String taskCategory, String userStoryId, String userStoryName) {
        this.taskId = taskId;
        this.taskName= taskName;
        this.taskAssignedTo= taskAssignedTo;
        this.taskTshirtSize =taskSize;
        this.taskCategory=taskCategory;
        this.userstoryId= userstoryId;
    }
}