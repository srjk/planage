package in.stackroute.planage.product.Gantt.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import in.stackroute.planage.product.sprintplan.model.RoadMapStories;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import java.util.List;

@Setter
@Getter
@ToString
@NoArgsConstructor
@JsonIgnoreProperties(value = {"createdAt"}, allowGetters = true)
public class Sprint {
    @Id
    private String id;
    private List<RoadMapStories> userStory;
}
