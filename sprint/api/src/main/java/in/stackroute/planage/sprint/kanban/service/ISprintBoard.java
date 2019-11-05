package in.stackroute.planage.sprint.kanban.service;

import in.stackroute.planage.sprint.kanban.model.Column;
import in.stackroute.planage.sprint.kanban.model.FreezeSprint;
import in.stackroute.planage.sprint.kanban.model.SprintBoard;
import in.stackroute.planage.sprint.kanban.model.Task;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ISprintBoard {

//    public List<SprintBoard> getAllData();

    public SprintBoard getSprintData(String sprintId, String productId);

    public SprintBoard getDataOfProduct(String productId);

    public SprintBoard addSprint(SprintBoard sprintBoard);

    public SprintBoard updateSprintBoard(String sprintId, String productId, Column column);

    public SprintBoard createBacklog(String productId, String sprintId, Task task, String sprintName);

    public SprintBoard deleteSprintColumn(String productId, String sprintId, String id);

    // public void deleteSprintBoard(String productId, String sprintId);
    public FreezeSprint addToFreezeSprint(FreezeSprint freezeSprint);
}

//    public SprintBoard deleteTasks(String productId,String sprintID,String listId,String taskId );

