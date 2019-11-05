package in.stackroute.planage.product.products.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import in.stackroute.planage.product.products.model.Teams;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.validation.constraints.NotBlank;
import java.util.Date;
import java.util.List;

@Document
@Setter
@Getter
@NoArgsConstructor
@ToString
@JsonIgnoreProperties(value = {"createdAt"}, allowGetters = true)
public class Products {
    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private String productId;
    @NotBlank
    private String productName;
    private String description;
    private String client;
    private Date deadline;
    private String productManagerEmail;
    private List<Teams> teams;

    public Products(@NotBlank String productName, String description, String client, Date deadline) {
        this.productName = productName;
        this.description = description;
        this.client = client;
        this.deadline = deadline;
    }





}
