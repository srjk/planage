package in.stackroute.planage.product.sprintplan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketController {
    private final SimpMessagingTemplate template;

    @Autowired
    WebSocketController(SimpMessagingTemplate template){
        this.template= template;
    }

    @MessageMapping("/message/{topicId}")
    @SendTo("/board/{topicId}")
    private String onRecieveMessage(@DestinationVariable String topicId, String event ) throws Exception{
        return event;
    }
}
