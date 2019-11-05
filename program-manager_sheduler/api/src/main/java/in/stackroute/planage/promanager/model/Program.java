package in.stackroute.planage.promanager.model;

import lombok.*;


import java.util.Date;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class Program {

  private String id;
  private String text;
  private Date startDate;
  private Date endDate;
  private List<String> assignee;
  private String color;

}
