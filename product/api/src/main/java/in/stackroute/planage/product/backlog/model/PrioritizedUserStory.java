package in.stackroute.planage.product.backlog.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PrioritizedUserStory {
    private String id;
    private String userStoryName;
    private byte priorityLevel;
    private String selected;
}
