package in.stackroute.planage.process.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@ToString
@AllArgsConstructor
public class HttpDeleteResponse {
    private String message;
    private int code;
}
