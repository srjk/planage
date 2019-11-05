package in.stackroute.planage.promanager.invitation.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class MailRequest {

  private String userId;
  private String memberEmail;
  private String productId;
  private String userRole;
  private String subject;

}
