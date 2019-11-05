// package in.stackroute.planage.product.backlog.seeder;
//
//
// import in.stackroute.planage.product.backlog.model.ProductBacklog;
// import in.stackroute.planage.product.backlog.repository.ProductRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.CommandLineRunner;
// import org.springframework.context.annotation.PropertySource;
// import org.springframework.stereotype.Component;
//
// @PropertySource("classpath:application.properties")
// @Component
// public class SeedCLR implements CommandLineRunner {
//    @Autowired
//    ProductRepository productRepository;
//
//    @Override
//    public void run(String... args) throws Exception {
//        ProductBacklog product = new ProductBacklog();
//        product.setProductName("Hexage");
//        productRepository.save(product);
//    }
// }
