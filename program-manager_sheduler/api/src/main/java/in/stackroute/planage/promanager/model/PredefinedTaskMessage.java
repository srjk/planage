package in.stackroute.planage.promanager.model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Document
public class PredefinedTaskMessage {

  private String programId;
  private List<PredefinedTask> tasks;

}
