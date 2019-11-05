package in.stackroute.planage.product.productmanagerui;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class ProductManagerUiApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProductManagerUiApplication.class, args);
    }

}
