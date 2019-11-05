package in.stackroute.planage.process.model.boardModel;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import java.util.List;

/*
*This will generate row object contained by a group and each row will be distinguished by UUID.
 */


@Data
@NoArgsConstructor
@ToString
public class Row {
    private String rowId;
    private int rowPosition;
    private List<Cell> rowCells;
}
