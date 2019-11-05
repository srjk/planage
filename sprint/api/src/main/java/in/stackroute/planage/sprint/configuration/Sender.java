package in.stackroute.planage.sprint.configuration;

import in.stackroute.planage.sprint.kanban.service.SprintBoardService;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class Sender {

    @Autowired
    private RabbitTemplate rabbitTemplate;


//    void sendToQueue(String exchange,String routingKey,Object obj) {
//        rabbitTemplate.convertAndSend(exchange,routingKey,obj.toString());
//
//    }

    public void sendToQueue(String eventName, String exchange, String routingKey, Object object) {
        System.out.println("This is inside the sender method****" +  object);
        MessageResponse messageResponse = new MessageResponse(eventName, object, new Date());
        rabbitTemplate.convertAndSend(exchange, routingKey, messageResponse);
    }

}
