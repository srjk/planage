package in.stackroute.planage.promanager.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MessageResponse implements Serializable {
  /**
   *
   */
  private static final long serialVersionUID = 1L;
  String eventName;
  Object eventPayload;
  Date asOn;
}