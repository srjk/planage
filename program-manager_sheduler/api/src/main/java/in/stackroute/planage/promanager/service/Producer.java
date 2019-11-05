package in.stackroute.planage.promanager.service;

import java.util.Date;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import in.stackroute.planage.promanager.model.MessageResponse;

@Component
public class Producer {

  @Autowired
  private RabbitTemplate rabbitTemplate;

 public void sendToQueue(String eventName, String exchange, String routingKey, Object object) {
    MessageResponse messageResponse = new MessageResponse(eventName, object, new Date());
    rabbitTemplate.convertAndSend(exchange, routingKey, messageResponse);
  }

}