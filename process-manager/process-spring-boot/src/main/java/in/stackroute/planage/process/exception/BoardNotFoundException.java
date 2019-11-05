package in.stackroute.planage.process.exception;

/*
* This class will send a messagen in response body whenever a user will request for a board that is not in database.
 */
public class BoardNotFoundException extends RuntimeException {
    public BoardNotFoundException(String message){
        super(message);
    }
}
