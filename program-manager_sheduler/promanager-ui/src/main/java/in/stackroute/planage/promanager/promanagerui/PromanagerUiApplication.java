package in.stackroute.planage.promanager.promanagerui;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class PromanagerUiApplication {

  public static void main(String[] args) {
    SpringApplication.run(PromanagerUiApplication.class, args);
  }

}
