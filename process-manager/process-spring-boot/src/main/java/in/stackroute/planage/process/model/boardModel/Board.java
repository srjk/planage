package in.stackroute.planage.process.model.boardModel;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

/*
 * Board Aggregate which will contain all the board related information such as groups, rows and columns.
 * In this boardId is going to be unique id for each board and all the groups, rows and columns will be distinguished
 * by Java generated UUID that is created using MAC address and timestamp.
 */

@Data
@NoArgsConstructor
@ToString
@Document(collection = "boards")
public class Board {

    @Id
    private String boardId;
    private String boardName;
    private String boardDescription;
    private String boardOwner;
    private String boardOwnerEmail;
    private LocalDateTime createdAt;
    private List<Status> boardStatusColumn;
    private BoardMetaData boardMetadata;
    private List<Column> boardColumns;
    private List<Group> boardGroups;
    private List<Subscriber> boardSubscribers;
}
