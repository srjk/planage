package in.stackroute.planage.product.products.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import java.util.UUID;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;


@Setter
@Getter
@ToString
@JsonIgnoreProperties(value = {"createdAt"}, allowGetters = true)
public class Teams {

    @Id
    private String memberId;

    private String usersId;
    private String memberName;
    private String memberEmail;

    public Teams(){this.memberId = UUID.randomUUID().toString().substring(25);}

    public Teams(String users_id, String member_name, String member_email) {
        this.usersId = users_id;
        this.memberName = member_name;
        this.memberEmail = member_email;
    }


}
