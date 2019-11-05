package in.stackroute.planage.product.Gantt.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document
@Setter
@Getter
@ToString
@NoArgsConstructor
@JsonIgnoreProperties(value = {"createdAt"}, allowGetters = true)
public class Gantt {
    @Id
    private String id;
    private String productId;
    private String productName;
    private List<Sprint> sprint;

    public Gantt(String productId, String productName) {
        this.productId = productId;
        this.productName = productName;
    }
}
