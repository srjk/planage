package in.stackroute.planage.promanager.model;



import java.util.Date;

import java.util.List;
import java.util.UUID;

import in.stackroute.planage.promanager.model.ParticipantTask;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.CompoundIndex;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Document

public class Participant {
   @Id
  private String id =UUID.randomUUID().toString();
  private String name;
  private String email;
  private String programId;
  private String productId;
  private String text;
  private Date startDate;
  private Date endDate;
  private List<ParticipantTask> tasks;
  public Participant( String name, String email, String programId, String text, Date startDate, Date endDate,String productId) {
    this.name = name;
    this.email = email;
    this.programId = programId;
    this.text = text;
    this.startDate = startDate;
    this.endDate = endDate;
    this.productId=productId;
  }
}