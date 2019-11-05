package in.stackroute.planage.sprint.statistics.model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.List;

@Document
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class LeaderBoard {
    @Id
    private String id;
    private String productId;
    private String sprintId;
    List<TeamMember> teamMember;




}
