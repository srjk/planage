package in.stackroute.planage.promanager.model;

import lombok.*;

import java.util.List;
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Rseponse {

  private String date;
  List<ParticipantTask> tasks;
}
