package in.stackroute.planage.sprint.configuration;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.*;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.connection.CachingConnectionFactory;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMqConfiguration {

    private static final String SPRINTPLAN_QUEUE = "SprintPlanQueue";

    private static final String SPRINTBOARD_QUEUE = "SprintBoardQueue";

    private static final String SPRINTSTATS_QUEUE = "SprintStatsQueue";

    private static final String SPRINTDETAIL_EXCHANGE = "SprintDetailExchange";

    private static final String PRODUCT_EXCHANGE = "ProductExchange";

    // Declared Queues

    @Bean
    Queue sprintPlanQueue() {
        return new Queue(SPRINTPLAN_QUEUE, true);
    }

    @Bean
    Queue sprintBoardQueue() {
        return new Queue(SPRINTBOARD_QUEUE, true);
    }

    @Bean
    Queue sprintStatsQueue() {
        return new Queue(SPRINTSTATS_QUEUE, true);
    }

    // Declared Exchanges

    @Bean
     Exchange sprintDetailExchange() {
        return new TopicExchange(SPRINTDETAIL_EXCHANGE);
    }
    @Bean
    Exchange productExchange() {
        return new TopicExchange(PRODUCT_EXCHANGE);
    }



    @Bean
    Exchange sprintExchange() {
        return ExchangeBuilder.directExchange("DirectExchange")
                .durable(true)
                .build();
    }

//    @Bean
//    Binding binding1() {
//        return BindingBuilder
//                .bind(sprintPlanQueue())
//                .to(sprintExchange())
//                .with("sprintPlan")
//                .noargs();
//    }

    @Bean
    Binding binding2() {
        return BindingBuilder
                .bind(sprintBoardQueue())
                .to(sprintExchange())
                .with("sprintBoard")
                .noargs();
    }
    @Bean
    Binding binding3() {
        return BindingBuilder
                .bind(sprintStatsQueue())
                .to(sprintExchange())
                .with("sprintStats")
                .noargs();
    }


    // Binding of Exchange to Exchange
    @Bean
    Binding binding4() {
        return BindingBuilder
                .bind(sprintDetailExchange())
                .to(productExchange())
                .with("*.sprintDetail")
                .noargs();
    }

    //Binding of Sprint Detail Exchange and Sprint Plan Queue
    @Bean
    Binding binding5() {
        return BindingBuilder
                .bind(sprintPlanQueue())
                .to(sprintDetailExchange())
                .with("*.sprintDetail")
                .noargs();
    }

    @Bean
    ConnectionFactory connectionFactory() {
        CachingConnectionFactory cachingConnectionFactory = new CachingConnectionFactory("localhost");
        cachingConnectionFactory.setUsername("guest");
        cachingConnectionFactory.setPassword("guest");
        return cachingConnectionFactory;
    }

//    @Bean
//    MessageListenerContainer messageListenerContainer() {
//        SimpleMessageListenerContainer simpleMessageListenerContainer = new SimpleMessageListenerContainer();
//        simpleMessageListenerContainer.setConnectionFactory(connectionFactory());
//        simpleMessageListenerContainer.setQueues(sprintPlanQueue());
//        simpleMessageListenerContainer.setQueues(sprintBoardQueue());
//        simpleMessageListenerContainer.setQueues(sprintStatsQueue());
////        simpleMessageListenerContainer.setMessageListener(new RabbitMqMessageListener());
//        return simpleMessageListenerContainer;
//    }

    @Bean
    public Jackson2JsonMessageConverter messageConverter() {
        return new Jackson2JsonMessageConverter();
    }
    @Bean
    public RabbitTemplate rabbitTemplate(final ConnectionFactory connectionFactory) {
        RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
        rabbitTemplate.setMessageConverter(messageConverter());
        return rabbitTemplate;
    }


}
