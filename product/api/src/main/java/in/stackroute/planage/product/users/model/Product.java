package in.stackroute.planage.product.users.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.springframework.data.annotation.Id;

@Setter
@Getter
@ToString
@NoArgsConstructor
@JsonIgnoreProperties(value = {"createdAt"}, allowGetters = true)

public class Product {
    private String productName;
    private String productId;
    private String client;

    public Product(String productName, String productId, String client) {
        this.productName = productName;
        this.productId = productId;
        this.client = client;
    }
}
