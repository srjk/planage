package in.stackroute.planage.process.processmanagerui;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class ProcessManagerUiApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProcessManagerUiApplication.class, args);
    }

}
