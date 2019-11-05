package in.stackroute.planage.promanager.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource("classpath:application.properties")
@Getter
@Setter
public class RabbitMQConfigModel {

  @Value("${directExchange.exchange.name}")
  public String exchange;
  @Value("${assignee.queue.name}")
  public String assigneeQueue;
  @Value("${assignee.routing.key}")
  public String assigneeRoutingKey;
  @Value("${programTask.queue.name}")
  public String programTaskQueue;
  @Value("${programTask.routing.key}")
  public String programTaskRoutingKey;
  @Value("${participantTask.queue.name}")
  public String participantTaskqueue;
  @Value("${participantTask.routing.key}")
  public String participantTaskRoutingKey;
  @Value("${slack.queue.name}")
  public String slackqueue;
  @Value("${slack.routing.key}")
  public String slackRoutingKey;


}