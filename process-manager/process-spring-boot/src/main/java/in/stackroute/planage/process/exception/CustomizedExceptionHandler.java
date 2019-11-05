package in.stackroute.planage.process.exception;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import java.util.Date;

@ControllerAdvice
public class CustomizedExceptionHandler extends ResponseEntityExceptionHandler {

    /*
    * Handle all general exception which will return a response with internal server error code
    * */
    @ExceptionHandler(Exception.class)
    public final ResponseEntity<Object> handleAllException(Exception ex, WebRequest request){
        ExceptionResponse exceptionResponse = new ExceptionResponse
                (new Date(),ex.getMessage(),request.getDescription(false), HttpStatus.INTERNAL_SERVER_ERROR.value());
        return new ResponseEntity<>(exceptionResponse,HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /*
    * Handle the exception whenever requested board is not found
    */
    @ExceptionHandler(BoardNotFoundException.class)
    public final ResponseEntity<Object> handleBoardNotFoundException(BoardNotFoundException ex, WebRequest request){
        ExceptionResponse exceptionResponse = new ExceptionResponse
                (new Date(),ex.getMessage(),request.getDescription(false), HttpStatus.NOT_FOUND.value());
        return new ResponseEntity<>(exceptionResponse,HttpStatus.NOT_FOUND);
    }

    /*
    * Handle the exception when the board name is less than 2 characters.
    * */
    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        ExceptionResponse exceptionResponse = new ExceptionResponse(new Date(),"Validation failed",ex.getBindingResult().toString(),HttpStatus.BAD_REQUEST.value());

        return new ResponseEntity<>(exceptionResponse,HttpStatus.BAD_REQUEST);

    }
}
