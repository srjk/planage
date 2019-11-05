package in.stackroute.planage.product.Configuration;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Date;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MessageResponse {
  String eventName;
  Object eventPayload;
  Date asOn;
}
