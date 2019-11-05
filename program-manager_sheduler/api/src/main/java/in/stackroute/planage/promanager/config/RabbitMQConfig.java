package in.stackroute.planage.promanager.config;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
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
public class RabbitMQConfig extends SpringBootServletInitializer implements RabbitListenerConfigurer {

  @Autowired
  private RabbitMQConfigModel rabbitMQConfigModel;

  public RabbitMQConfigModel getRabbitMQConfigModel() {
    return rabbitMQConfigModel;
  }

  public void setRabbitMQConfigModel(RabbitMQConfigModel rabbitMQConfigModel) {
    this.rabbitMQConfigModel = rabbitMQConfigModel;
  }

  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
    return application.sources(RabbitMQConfig.class);
  }

  @Bean
  public RabbitMQConfigModel rabbitMQConfigModel() {
    return new RabbitMQConfigModel();
  }

  //Declaring exchnage
  @Bean
  public DirectExchange getCalenderExchange() {
    return new DirectExchange(getRabbitMQConfigModel().getExchange());
  }

  //Declaring queues
  @Bean
  public Queue getAssignee() {
    return new Queue(getRabbitMQConfigModel().getAssigneeQueue());
  }

  @Bean
  public Queue getProgrmTask() {
    return new Queue(getRabbitMQConfigModel().getProgramTaskQueue());
  }

  @Bean
  public Queue getParticipantTask() {
    return new Queue(getRabbitMQConfigModel().getParticipantTaskqueue());
  }

  @Bean
  public Queue getSlackMessage() {
    return new Queue(getRabbitMQConfigModel().getSlackqueue());
  }


  @Bean
  ConnectionFactory connectionFactory() {
    CachingConnectionFactory cachingConnectionFactory = new CachingConnectionFactory("rabbitmq");
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
  public Binding bindPTAQueueToExchange() {
    return BindingBuilder.bind(getAssignee()).to(getCalenderExchange()).with(getRabbitMQConfigModel().getAssigneeRoutingKey());
  }

  @Bean
  public Binding bindPCTPQueueToExchange() {
    return BindingBuilder.bind(getParticipantTask()).to(getCalenderExchange()).with(getRabbitMQConfigModel().getParticipantTaskRoutingKey());
  }

  @Bean
  public Binding bindTTPQueueToExchange() {
    return BindingBuilder.bind(getProgrmTask()).to(getCalenderExchange()).with(getRabbitMQConfigModel().getProgramTaskRoutingKey());
  }

  @Bean
  public Binding bindSQueueToExchange() {
    return BindingBuilder.bind(getSlackMessage()).to(getCalenderExchange()).with(getRabbitMQConfigModel().getSlackRoutingKey());
  }

}