package in.stackroute.planage.promanager.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import java.util.Date;
import java.util.UUID;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Document
public class Task {
   @Id
  private String taskId = UUID.randomUUID().toString();
  private String productId;
  private String programId;
  private Date dueDate;
  private String taskName;
  private boolean status;

}
