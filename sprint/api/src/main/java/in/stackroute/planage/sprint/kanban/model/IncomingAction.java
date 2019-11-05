package in.stackroute.planage.sprint.kanban.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class IncomingAction {
    private String action;
    private Payload payload;
}
