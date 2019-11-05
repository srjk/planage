//package in.stackroute.planage.product.Configuration;
//
//import org.springframework.amqp.core.*;
//import org.springframework.amqp.rabbit.connection.CachingConnectionFactory;
//import org.springframework.amqp.rabbit.connection.ConnectionFactory;
//import org.springframework.amqp.rabbit.core.RabbitTemplate;
//import org.springframework.amqp.rabbit.listener.MessageListenerContainer;
//import org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer;
//import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//@Configuration
//public class RabbitConfig {
//
////    private static final String PRODUCT_BACKLOG_QUEUE = "productBacklogQueue";
////    private static final String PRODUCT_ROADMAP_QUEUE = "productRoadMapQueue";
//    private static final String SPRINT_PLAN_QUEUE = "sprintPlanQueue";
////    private static final String GANTT_CHART_QUEUE = "ganttChartQueue";
//
//
////    @Bean
////    Queue ganttChartQueue(){return new Queue(GANTT_CHART_QUEUE,true);}
////
////    @Bean
////    Queue productBacklogQueue(){
////        return new Queue(PRODUCT_BACKLOG_QUEUE,true);
////    }
////
////    @Bean
////    Queue productRoadMapQueue(){
////        return new Queue(PRODUCT_ROADMAP_QUEUE,true);
////    }
//
//    @Bean
//    Queue sprintPlanQueue(){
//        return new Queue(SPRINT_PLAN_QUEUE,true);
//    }
//
//    @Bean
//    Exchange directExchange(){
//        return ExchangeBuilder.directExchange("MyDirectExchange")
//                .durable(true)
//                .build();
//    }
//    @Bean
//    Exchange topicExchange() {
//        return ExchangeBuilder.topicExchange("MyTopicExchange")
//                .durable(true)
//                .build();
//    }
//    @Bean
//    Exchange fanoutExchange(){
//        return ExchangeBuilder.topicExchange("MyFanoutExchange")
//                .durable(true)
//                .build();
//    }
//
////    @Bean
////    Binding bindingToProductBacklogQueue(){
////        return BindingBuilder
////                .bind(productBacklogQueue())
////                .to(fanoutExchange())
////                .with("productBacklog")
////                .noargs();
////    }
//
////    @Bean
////    Binding bindingToGanttChartQueue(){
////        return BindingBuilder
////                .bind(ganttChartQueue())
////                .to(directExchange())
////                .with("ganttChart")
////                .noargs();
////    }
////
////    @Bean
////    Binding bindingToProductRoadMapQueue(){
////        return BindingBuilder
////                .bind(productRoadMapQueue())
////                .to(fanoutExchange())
////                .with("productRoadmap")
////                .noargs();
////    }
//
//    @Bean
//    Binding sprintUpdateQueue(){
//        return BindingBuilder
//                .bind(sprintPlanQueue())
//                .to(topicExchange())
//                .with("*.*.sprintUpdate")
//                .noargs();
//    }
//    @Bean
//    Binding selectedUserStoryQueue() {
//        return BindingBuilder
//                .bind(sprintPlanQueue())
//                .to(topicExchange())
//                .with("*.*.updateUserStory")
//                .noargs();
//    }
//
//    @Bean
//    ConnectionFactory connectionFactory(){
//        CachingConnectionFactory cachingConnectionFactory = new CachingConnectionFactory("localhost");
//        cachingConnectionFactory.setUsername("guest");
//        cachingConnectionFactory.setPassword("guest");
//        return cachingConnectionFactory;
//    }
//
//    @Bean
//    public Jackson2JsonMessageConverter messageConverter() {
//        return new Jackson2JsonMessageConverter();
//    }
//
//    @Bean
//    public RabbitTemplate rabbitTemplate(final ConnectionFactory connectionFactory) {
//        RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
//        rabbitTemplate.setMessageConverter(messageConverter());
//        return rabbitTemplate;
//    }
//}
//
