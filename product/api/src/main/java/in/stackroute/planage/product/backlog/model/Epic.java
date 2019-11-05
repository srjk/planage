package in.stackroute.planage.product.backlog.model;

import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
public class Epic {

    String epicID;
    String epicName;
    List<PrioritizedUserStory> prioritizedUserStories;

    public Epic() {
        epicID= UUID.randomUUID().toString().substring(25);
    }

    public boolean removeFromPriority(String userStoryId) {
        int counter=0;
        for(PrioritizedUserStory prioritizedUserStory: this.getPrioritizedUserStories()){
            System.out.println(prioritizedUserStory);
            if(prioritizedUserStory.getId()!=null && prioritizedUserStory.getId().equals(userStoryId)){
                this.prioritizedUserStories.remove(counter);
                return true;
            }
            counter++;
        }
        return false;
    }
}
