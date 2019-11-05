package in.stackroute.planage.sprint.kanban.exception;

public class BoardNotFoundException  extends Exception{
    public BoardNotFoundException() {
        super("There is no board with this id");
    }
}
