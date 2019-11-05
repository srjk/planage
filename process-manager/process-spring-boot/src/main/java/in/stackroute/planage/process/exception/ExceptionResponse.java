package in.stackroute.planage.process.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

/*
* This class will define the response body format that to be sent whenever any exception will occur.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExceptionResponse {
    private Date timestamp;
    private String message;
    private String details;
    private int code;
}
