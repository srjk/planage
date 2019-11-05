package in.stackroute.planage.product.Configuration;

import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
@Configuration
@PropertySource("classpath:application.properties")
@Getter
@Setter
public class RabbitMqModel {
  @Value("${sprintDetailExchange.exchange.name}")
  private String sprintDetailExchange;

  @Value("${sprintDetailExchange.routing.key}")
    private String sprintDetailExchangeRoutingKey;

  @Value("${productExchange.exchange.name}")
  private String productExchange;
          @Value("${productExchange.routing.key}")
  private String productExchangeRoutingKey;


          @Value("${sprintPlanQueue.queue.name}")
          private String sprintPlanQueue;
          @Value("${sprintPlanQueue.routing.key}")
  private String sprintPlanQueueRoutingKey;

          @Value("${productBacklogQueue.queue.name}")
  private String productBacklogQueue;
          @Value("${productBacklogQueue.routing.key}")
  private String productBacklogQueueRoutingKey;

          @Value("${ganttQueue.queue.name}")
  private String ganttQueue;
          @Value("${ganttQueue.routing.key}")
  private String ganttQueueRoutingKey;

  @Value("${productRoadMapQueue.queue.name}")
  private String productRoadmapQueue;

          @Value("${productRoadMapQueue.routing.key}")
  private String productRoadmapQueueRoutingKey;
}
