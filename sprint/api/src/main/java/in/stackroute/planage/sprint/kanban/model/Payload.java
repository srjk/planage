package in.stackroute.planage.sprint.kanban.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Payload {
    private String previousColumnId;
    private String currentColumnId;
    private int previousTaskPosition;
    private int currentTaskPosition;
    boolean lastColumn;
    private String sprintId;


}
