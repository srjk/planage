package in.stackroute.planage.promanager.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document
public class ProductCalender {
  @Id
  private String id = UUID.randomUUID().toString().substring(25);
  private String productName;
  private String createdBy;
  private Date createdAt;
  private int durationWeek;
  private int durationDays;
  private List<Program> programs;
  private int durationHours;
  private int assignee;
  private List<String> agenda;
  private List<PredefinedTask> predefinedTask;

  public ProductCalender(String id, String productName, Date createdAt, int durationWeek, int durationDays, int durationHours, int assignee, List<String> agenda, List<PredefinedTask> predefinedTask) {
    this.id = id;
    this.productName = productName;
    this.createdAt = createdAt;
    this.durationWeek = durationWeek;
    this.durationDays = durationDays;
    this.durationHours = durationHours;
    this.assignee = assignee;
    this.agenda = agenda;
    this.predefinedTask = predefinedTask;
  }

}