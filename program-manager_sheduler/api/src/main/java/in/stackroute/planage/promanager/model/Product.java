package in.stackroute.planage.promanager.model;

import lombok.*;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Document
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class Product {

  private String id = UUID.randomUUID().toString();
  private String productName;
  private Date createdAt;
  private int durationWeek;
  private int durationDays;
  private int durationHours;
  private int assignee;
  private List<String> agenda;
}
