package in.stackroute.planage.promanager.model;

import lombok.*;

import java.util.Date;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ParticipantTask {

  private String taskId = UUID.randomUUID().toString();
  private String taskName;
  private Date dueDate;
  private boolean status;

}
