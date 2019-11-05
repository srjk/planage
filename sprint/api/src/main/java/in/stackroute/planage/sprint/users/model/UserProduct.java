package in.stackroute.planage.sprint.users.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@NoArgsConstructor
@JsonIgnoreProperties(value = {"createdAt"}, allowGetters = true)
public class UserProduct {
    private String productName;
}
