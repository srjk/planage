package in.stackroute.planage.process.model.mailModel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MailRequest {

  private String to;
  private String from;
  private String boardId;
  private String subscriberId;
  private String senderName;

}
