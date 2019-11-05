package in.stackroute.planage.product.backlog.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Getter
@Setter
@Document
@JsonIgnoreProperties(ignoreUnknown = true)
public class ProductBacklog {
    @Id
    private String id;
    private String productId;
    private String productName;
    private List<Epic> epics;



    public Epic getEpicById(String epicId) {
        for(Epic epic : this.epics){
            if(epic.getEpicID().equals(epicId)) {
                return epic;
            }
        }
        return null;
    }
    
}
