package in.stackroute.planage.promanager.model;


import java.util.Date;
import java.util.UUID;


import com.fasterxml.jackson.annotation.JsonFormat;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@Setter
@Getter
@NoArgsConstructor
@ToString
@Document
public class Assignee {
   @Id
  private String id = UUID.randomUUID().toString();
  private String text;
  private String programId;
  private String programName;
  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ")
  private Date startDate;
  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ")
  private Date endDate;
  private String email;

  public Assignee(String text, String programId, String programName, Date startDate, Date endDate, String email) {
    this.text = text;
    this.programId = programId;
    this.programName = programName;
    this.startDate = startDate;
    this.endDate = endDate;
    this.email = email;
  }
}
