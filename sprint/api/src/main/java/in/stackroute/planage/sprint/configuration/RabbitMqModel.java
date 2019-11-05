package in.stackroute.planage.sprint.configuration;

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

    @Value("${sprintExchange.exchange.name}")
    public String directExchange;

    @Value("${sprintBoardQueue.queue.name}")
    public String sprintBoardQueue;


    @Value("${sprintBoardQueue.routing.key}")
    public String sprintBoardRoutingKey;


//    @Value("${sprintStatsQueue.queue.name}")
//    public String sprintStatsQueue;
//
//    @Value("${sprintStatsQueue.routing.key}")
//    public String sprintStatsRoutingKey;

    @Value("${sprintPlanQueue.queue.name}")
    public String sprintPlanQueue;


    @Value("${sprintPlanQueue.routing.key}")
    public String sprintPLanRoutingKey;

    @Value("${sprintDetailExchange.exchange.name}")
    public String sprintDetailExchange;

    @Value("${sprintDetailExchange.routing.key}")
    public String sprintDetailExchangeRoutingKey;


    @Value("${productExchange.exchange.name}")
    public String productExchange;


    @Value("${productExchange.routing.key}")
    public String productExchangeRoutingKey;


    @Value("${productPlanQueue.queue.name}")
    public String productPlanQueue;

    @Value("${productPlanQueue.routing.key}")
    public String productPlanRoutingKey;


    @Value("${taskDetailExchange.exchange.name}")
    public String taskDetailExchange ;
    @Value("${sprintStatsQueue.queue.name}")
    public String sprintStatsQueue;
    @Value("${sprintStatsQueue.routing.key}")
    public String sprintStatsRoutingKey;
    //for burndown chart
    @Value("${dailyTaskExchange.exchange.name}")
    public String dailyTaskExchange;
    @Value("${burndownChartQueue.queue.name}")
    public String burndownChartQueue;
    @Value("${burndownChartQueue.routing.key}")
    public String burndownChartRoutingKey;


// for send Product
//    @Value("${sendProductExchange.exchange.name}")
//    public String sendProductExchange;
//
//    @Value("${sendProductExchange.routing.key}")
//    public String sendProductExchangeRoutingKey;
//
//    @Value("${sendUserExchange.exchange.name}")
//    public String sendUserExchange;
//
//    @Value("${sendUserExchange.routing.key}")
//    public String sendUserExchangeRoutingKey;
//
//    @Value("${getProductExchange.exchange.name }")
//    public String getProductsExchange;
//
//    @Value("${getProductExchange.routing.key}")
//    public String getProductExchangeRoutingKey;
//
//    @Value("${getProductQueue.queue.name}")
//    public String getProductQueue;
//
//    @Value("${getProductQueue.routing.key}")
//    public String getProductQueueRoutingKey;
//
//
//    @Value("${getUserExchange.exchange.name}")
//    public String getUserExchange;
//
//    @Value("${getUserExchange.routing.key}")
//    public String getUserExchangeRoutingKey;
//
//
//    @Value("${getSprintExchange.exchange.name}")
//    public String getSprintExchange;
//
//    @Value("${getSprintExchange.routing.key}")
//    public String getSprintExchangeRoutingKey;
//
//
//    @Value("${sendSprintExchange.exchange.name}")
//    public String sendSprintExchange;
//
//    @Value("${sendSprintExchange.routing.key}")
//    public String sendSprintExchangeRoutingKey;
//


}

