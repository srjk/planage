package in.stackroute.planage.process.model.boardModel;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/*
* A board can contains many groups and each group will be distinguished by UUID.
 */

@Data
@NoArgsConstructor
public class Group {
    private String groupId;
    private String groupName;
    private String groupColor;
    private int groupPosition;
    private List<Row> groupRows;
}
