package in.stackroute.planage.process.model.mailModel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MailResponse {

  private String message;
  private boolean status;
}
