package in.stackroute.planage.process.model.boardModel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;


@Data
@NoArgsConstructor
@ToString
@AllArgsConstructor
public class BoardList {

  private String boardId;
  private String boardName;
  private String boardOwner;
  private LocalDateTime createdAt;
}
