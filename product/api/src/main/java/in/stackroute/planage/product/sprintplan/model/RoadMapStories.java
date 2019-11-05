package in.stackroute.planage.product.sprintplan.model;

import in.stackroute.planage.product.backlog.model.PrioritizedUserStory;
import in.stackroute.planage.product.backlog.model.TShirtSize;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
public class RoadMapStories {
    String id;
    String userStoryName;
    TShirtSize tshirtSize;
    List<PrioritizedUserStory> dependencies;
    String percentCompleted;
    Date startDate;
    Date endDate;
    Boolean isSelected;
}
