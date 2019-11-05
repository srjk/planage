package in.stackroute.planage.product.Gantt.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;

@Setter
@Getter
@ToString
@NoArgsConstructor
@JsonIgnoreProperties(value = {"createdAt"}, allowGetters = true)
public class Dependency {
    @Id
    private String id;
    private String UserStoryId;
}
