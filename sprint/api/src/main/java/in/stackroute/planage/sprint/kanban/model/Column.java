package in.stackroute.planage.sprint.kanban.model;

import java.util.UUID;

import lombok.*;
import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;


@Getter
@Setter
@ToString
public class Column {
    private String columnId;
    private String columnName;
    private List<Task> tasks = new ArrayList<>();

    public String getColumnId() {
        return columnId;
    }

    public void setColumnId(String columnId) {
        this.columnId = columnId;
    }

    public String getColumnName() {
        return columnName;
    }

    public void setColumnName(String columnName) {
        this.columnName = columnName;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }

    public Column() {
        columnId = UUID.randomUUID().toString();
    }

    public Column(String columnId, String columnName, List<Task> tasks) {
        this.columnId = columnId;
        this.columnName = columnName;
        this.tasks = tasks;
    }
}