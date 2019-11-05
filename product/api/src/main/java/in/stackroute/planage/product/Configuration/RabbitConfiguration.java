package in.stackroute.planage.product.Configuration;

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
public class RabbitConfiguration extends SpringBootServletInitializer implements RabbitListenerConfigurer {
  @Autowired
  private RabbitMqModel rabbitMqModel;

  public RabbitMqModel getRabbitMqModel() {
    return rabbitMqModel;
  }
  public void setRabbitMQConfigModel(RabbitMqModel rabbitMqModel) {
    this.rabbitMqModel = rabbitMqModel;
  }
  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
    return application.sources(RabbitConfiguration.class);
  }

  //Declaring exchnage
  @Bean
  public TopicExchange getSprintDetailExchange() {
    return new TopicExchange(getRabbitMqModel().getSprintDetailExchange());
  }
  @Bean
  public TopicExchange getProductExchange() {
    return new TopicExchange(getRabbitMqModel().getProductExchange());
  }

  //Declaring Queue
  @Bean
  public Queue getSprintPlanQueue(){
    return new Queue(rabbitMqModel.getSprintPlanQueue());
  }

  @Bean
  public Queue getGanttQueue(){
    return new Queue(rabbitMqModel.getGanttQueue());
  }

  @Bean
  public Queue getProductBacklogQueue(){
    return new Queue(rabbitMqModel.getProductBacklogQueue());
  }

  @Bean
  public Queue getProductRoadmapQueue(){
    return new Queue(rabbitMqModel.getProductRoadmapQueue());
  }

  //Declaring binding
  @Bean
  public Binding planExchangeToProductExchange() {
    return BindingBuilder.bind(getSprintDetailExchange()).to(getProductExchange()).with(getRabbitMqModel().getSprintDetailExchangeRoutingKey());
  }

  @Bean
  public Binding sprintPlanToExchange(){
    return BindingBuilder.bind(getSprintPlanQueue()).to(getProductExchange()).with(getRabbitMqModel().getSprintPlanQueueRoutingKey());
  }

  @Bean
  public Binding productBacklogToExchange(){
    return BindingBuilder.bind(getProductBacklogQueue()).to(getProductExchange()).with(getRabbitMqModel().getProductBacklogQueueRoutingKey());
  }

  @Bean
  public Binding ganttToExchange(){
    return BindingBuilder.bind(getGanttQueue()).to(getProductExchange()).with(getRabbitMqModel().getGanttQueueRoutingKey());
  }

  @Bean
  public Binding productRoadmapToExchange(){
    return BindingBuilder.bind(getProductRoadmapQueue()).to(getProductExchange()).with(getRabbitMqModel().getProductRoadmapQueueRoutingKey());
  }


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



}
