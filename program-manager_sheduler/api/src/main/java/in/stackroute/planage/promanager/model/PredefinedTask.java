package in.stackroute.planage.promanager.model;

import lombok.*;


import java.util.UUID;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class PredefinedTask {

  private String taskId = UUID.randomUUID().toString();
  private String productId;
  private String taskName;
}
