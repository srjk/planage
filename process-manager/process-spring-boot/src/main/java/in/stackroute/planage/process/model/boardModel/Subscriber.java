package in.stackroute.planage.process.model.boardModel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/*
* The subscriber class object will be board aggregate specific and will contain the information about all the
* subscribers.
 */

@Data
@NoArgsConstructor
@ToString
@AllArgsConstructor
public class Subscriber {
    private String subscriberId;
    private String subscriberName;
    private String subscriberEmail;
    private String subscriberProfile;
    private String subscriberStatus;
    private boolean isBoardOwner;
}
