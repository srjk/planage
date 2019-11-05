package in.stackroute.planage.product.Email.dto;

import lombok.Data;

@Data
public class MailRequest {

	private String memberEmail;
	private String productId;
	private String userId;
	private String subject;
	private String memberName;
	private String teamName;

}
