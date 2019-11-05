package in.stackroute.planage.sprint.configuration;

import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.annotation.EnableRabbit;
import org.springframework.amqp.rabbit.annotation.RabbitListenerConfigurer;
import org.springframework.amqp.rabbit.connection.CachingConnectionFactory;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.rabbit.listener.RabbitListenerEndpointRegistrar;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.converter.MappingJackson2MessageConverter;
import org.springframework.messaging.handler.annotation.support.DefaultMessageHandlerMethodFactory;


@EnableRabbit
@Configuration
public class RabbitMqConfig extends SpringBootServletInitializer implements RabbitListenerConfigurer {

    @Autowired
    private RabbitMqModel rabbitMqModel;

    public RabbitMqModel getRabbitMqModel() {
        return rabbitMqModel;
    }

    public void setRabbitMQConfigModel(RabbitMqModel rabbitMqModel) {
        this.rabbitMqModel = rabbitMqModel;
    }

    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(RabbitMqConfig.class);
    }

    @Bean
    public DirectExchange getDirectExchange() {
        return new DirectExchange(getRabbitMqModel().getDirectExchange());
    }

    @Bean
    public TopicExchange getSprintDetailExchange() {
        return new TopicExchange(getRabbitMqModel().getSprintDetailExchange());
    }
    @Bean
    public TopicExchange getProductExchange() {
        return new TopicExchange(getRabbitMqModel().getProductExchange());
    }
    //Declaring queues
    @Bean
    public Queue getSprintBoardQueue() {
        return new Queue(getRabbitMqModel().getSprintBoardQueue());
    }


    @Bean
    public DirectExchange getTaskDetailExchange(){return new DirectExchange(getRabbitMqModel().getTaskDetailExchange());}
    @Bean
    public DirectExchange getDailyTaskExchange(){return new DirectExchange(getRabbitMqModel().getDailyTaskExchange());}

//    @Bean
//    public Queue getSprintStatsQueue() {
//        return new Queue(getRabbitMqModel().getSprintStatsQueue());
//    }

    @Bean
    public Queue getSprintPlanQueue() {
        return new Queue(getRabbitMqModel().getSprintPlanQueue());
    }

    @Bean
    public Queue getProductQueue(){
        return new Queue(getRabbitMqModel().getProductPlanQueue());
    }

    @Bean
    public Queue getSprintStatsQueue() {
        return new Queue(getRabbitMqModel().getSprintStatsQueue());
    }
    @Bean Queue getBurndownChartQueue(){ return new Queue(getRabbitMqModel().getBurndownChartQueue());}

    @Bean
    CachingConnectionFactory connectionFactory() {
        CachingConnectionFactory cachingConnectionFactory = new CachingConnectionFactory("localhost");
        cachingConnectionFactory.setUsername("guest");
        cachingConnectionFactory.setPassword("guest");
        return cachingConnectionFactory;
    }

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

    @Bean
    public MappingJackson2MessageConverter consumerJackson2MessageConverter() {
        return new MappingJackson2MessageConverter();
    }

    @Bean
    public DefaultMessageHandlerMethodFactory messageHandlerMethodFactory() {
        DefaultMessageHandlerMethodFactory factory = new DefaultMessageHandlerMethodFactory();
        factory.setMessageConverter(consumerJackson2MessageConverter());
        return factory;
    }

    public void configureRabbitListeners(final RabbitListenerEndpointRegistrar registrar) {
        registrar.setMessageHandlerMethodFactory(messageHandlerMethodFactory());
    }

    //Declaring bindings
    @Bean
    public Binding boardToDirect() {
        return BindingBuilder.bind(getSprintBoardQueue()).to(getDirectExchange()).with(getRabbitMqModel().getSprintBoardRoutingKey());
    }

//    @Bean
//    public Binding statsToDirect() {
//        return BindingBuilder.bind(getSprintStatsQueue()).to(getDirectExchange()).with(getRabbitMqModel().getSprintStatsRoutingKey());
//    }

    @Bean
    public Binding planToProduct() {
        return BindingBuilder.bind(getSprintDetailExchange()).to(getProductExchange()).with(getRabbitMqModel().getSprintDetailExchangeRoutingKey());
    }

    @Bean
    public Binding planToPlan() {
        return BindingBuilder.bind(getSprintPlanQueue()).to(getSprintDetailExchange()).with(getRabbitMqModel().getSprintPLanRoutingKey());

    }

    @Bean
    public Binding planTogetProduct() {
        return BindingBuilder.bind(getProductQueue()).to(getSprintDetailExchange()).with(getRabbitMqModel().getProductPlanRoutingKey());
    }
    //Binding for velocity chart and leaderBoard
    @Bean
    public Binding statsToDirect() {
        return BindingBuilder.bind(getSprintStatsQueue()).to(getTaskDetailExchange()).with(getRabbitMqModel().getSprintStatsRoutingKey());
    }
    // Binding for burndown chart
    @Bean
    public Binding chartToBoard(){
        return BindingBuilder.bind(getBurndownChartQueue()).to(getDailyTaskExchange()).with(getRabbitMqModel().getBurndownChartRoutingKey());
    }





}
