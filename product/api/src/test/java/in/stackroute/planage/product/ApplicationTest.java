//package in.stackroute.planage.product;
//
//import in.stackroute.planage.product.products.model.Products;
//import in.stackroute.planage.product.products.model.Teams;
//import in.stackroute.planage.product.products.repository.ProductsRepository;
//import in.stackroute.planage.product.products.service.impl.ProductsService;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.Assert;
//import org.junit.runner.RunWith;
//import org.mockito.Mockito;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
//import org.springframework.test.context.junit4.SpringRunner;
//import java.util.UUID;
//
//import java.util.ArrayList;
//import java.util.Date;
//import java.util.List;
//import java.util.stream.Collectors;
//import java.util.stream.Stream;
//
//import static org.junit.Assert.assertEquals;
//import static org.junit.Assert.assertThat;
//import static org.mockito.Mockito.*;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//public class ApplicationTest {
//    @Autowired
//    private ProductsService productsService;
//
//    @MockBean
//    private ProductsRepository productsRepository;
//
//    private Products product;
//    private Teams teams;
//    private List<Teams> teamsList = new ArrayList<>();
//
//
//    @Before
//    public void beforeFunction(){
//        product = new Products("planage","project management system","stackroute",new Date());
//        teams = new Teams("1","Bhavani A C","bhavaniac145@gmail.com");
//        teamsList.add(teams);
//        product.setProductId("1");
//        teams.setMemberId("1");
//        product.setTeams(teamsList);
//    }
//
//    @Test
//    public void getAllProductTest(){
//        when(productsRepository.findAll())
//                .thenReturn(Stream.of(new Products("planage","project management system","stackroute",new Date())).collect(Collectors.toList()));
//        assertEquals(1, productsService.getAllProducts().size());
//    }
//
//    @Test
//    public void saveProductTest(){
//
//        when(productsRepository.save(this.product)).thenReturn(product);
//        assertEquals(product, productsService.addProducts(product));
//    }
//
//    @Test
//    public void getProductsByIdTest(){
//        Mockito.when(productsRepository.findByProductId("1"))
//                .thenReturn(product);
//        Products actual = productsService.getProductsById("1");
//        assertEquals(actual,product);
//    }
//
//    @Test
//    public void getTeamTest(){
//        Mockito.when(productsRepository.findByProductId("1"))
//                .thenReturn(product);
//        assertEquals(1,productsService.getTeam("1").size());
//
//    }
//
//}
