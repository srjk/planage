package in.stackroute.planage.process.model.boardModel;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/*
* This class will contain meta information of a board.
 */

@Data
@NoArgsConstructor
@ToString
public class BoardMetaData {
    private int totalNumberOfGroups;
    private int totalNumberOfColumns;
    private int totalNumberOfRows;
    private int createdDuplicateGroups;
}
