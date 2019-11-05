// package in.stackroute.planage.product.products.dataseed;
//
//
// import in.stackroute.planage.product.products.model.Products;
// import in.stackroute.planage.product.products.model.Teams;
// import in.stackroute.planage.product.products.repository.ProductsRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.CommandLineRunner;
// import org.springframework.context.annotation.PropertySource;
// import org.springframework.stereotype.Component;
//
// import java.util.ArrayList;
// import java.util.Date;
// import java.util.List;
//
//
//
// import java.util.ArrayList;
// import java.util.Date;
// import java.util.List;
//
//
// @PropertySource("classpath:application.properties")
// @Component
// public class SeedCLR implements CommandLineRunner {
//    @Autowired
//    ProductsRepository productsRepository;
//
//    @Override
//    public void run(String... args) throws Exception {
//        Products product = new Products();
//         product.setProductId("5da415cbc73eda77f7143350");
//        product.setProductName("Planage");
//        product.setClient("Stack route");
//        product.setDescription("Project management system");
//        product.setDeadline(new Date());
//        Teams teams = new Teams("1","Bhavani A C","bhavaniac145@gmail.com");
//        List<Teams> teamsList = new ArrayList<>();
//        teamsList.add(teams);
//        product.setTeams(teamsList);
//        productsRepository.save(product);
//    }
// }
