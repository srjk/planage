package in.stackroute.planage.sprint.statistics.model;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ColumnList {
    private String listId;
    private String listName;
   // private List<Task> task;

    @Override
    public String toString() {
        return "ColumnList{" +
                "listId='" + listId + '\'' +
                ", listName='" + listName + '\'' +

                '}';
    }
}
