package in.stackroute.planage.sprint.kanban.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;
import java.util.HashMap;

@ResponseBody
@ControllerAdvice
public class GlobalExceptionHandler {
    private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(BoardNotFoundException.class)
    public ResponseEntity handleBooardNotFound(BoardNotFoundException exception){
        HashMap<Object, Object> responseObject = new HashMap<>();
        responseObject.put("TimeStamp", new Date());
        responseObject.put("result", "Board Not Found   ");
        responseObject.put("msg", exception.getMessage());
        responseObject.put("error", "true");
        return new ResponseEntity(responseObject ,HttpStatus.OK);
    }
}
