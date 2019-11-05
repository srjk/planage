package in.stackroute.planage.process.model.boardModel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/*
* This class will be used to create column object that is going to be board specific.
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Column {
    private String columnId;
    private String columnName;
    private String columnType;
}
