package in.stackroute.planage.process.model.boardModel;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/*
* ColumnValue Object will describe the value of a cell in a table.
 */

@Data
@NoArgsConstructor
@ToString
public class Cell {
    private String cellId;
    private String columnId;
    private Object cellValue;
    private String cellType;
}
