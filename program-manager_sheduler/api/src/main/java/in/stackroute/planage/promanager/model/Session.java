package in.stackroute.planage.promanager.model;

import lombok.*;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document
public class Session {
@Id
  private String id = UUID.randomUUID().toString();
  private String programId;
  private String text;
  private Date startDate;
  private Date endDate;

}
