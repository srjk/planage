//package in.stackroute.planage.product;
//
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import in.stackroute.planage.product.products.controller.ProductsApplicationController;
//import in.stackroute.planage.product.products.model.Products;
//import in.stackroute.planage.product.products.model.Teams;
//import in.stackroute.planage.product.products.service.impl.ProductsService;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.mockito.BDDMockito;
//import org.mockito.InjectMocks;
//import org.mockito.Mockito;
//import org.mockito.MockitoAnnotations;
//import org.mockito.stubbing.Answer;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.MediaType;
//import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//import org.springframework.test.web.servlet.setup.MockMvcBuilders;
//
//import java.util.ArrayList;
//import java.util.Date;
//import java.util.List;
//
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//
//@RunWith(SpringJUnit4ClassRunner.class)
//@WebMvcTest(ControllerTest.class)
//public class ControllerTest {
//
//      @Autowired
//    private MockMvc mockMvc;
//
//    @MockBean
//    private ProductsService productsService;
//
//    @InjectMocks
//    ProductsApplicationController productsApplicationController;
//
//    @Before
//    public void beforeFunction() throws  Exception {
//        MockitoAnnotations.initMocks(this);
//        mockMvc = MockMvcBuilders.standaloneSetup(ProductsApplicationController.class).build();
//        List<Products> productsList = new ArrayList<>();
//        Products product = new Products("planage","project management system","stackroute",new Date());
//        Teams teams = new Teams("1","Bhavani A C","bhavaniac145@gmail.com");
//        List<Teams> teamsList = new ArrayList<>();
//        teamsList.add(teams);
//        product.setId("1");
//        product.setTeams(teamsList);
//    }
//
//
//    @Test
//    public void getAllProductsSuccessTest() throws Exception{
//        List<Products> productsList = new ArrayList<>();
////        Products product = new Products("planage","project management system","stackroute",new Date());
////        productsList.add(product);
//        Mockito.when(productsService.getAllProducts()).thenReturn(productsList);
//        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/products")
////                .content(jsonToString(productsList))
//                .contentType(MediaType.APPLICATION_JSON))
//                .andExpect(status().isOk());
//    }
//
//    private static String jsonToString(final Object ob) throws JsonProcessingException {
//        String result;
//        try {
//            ObjectMapper mapper = new ObjectMapper();
//            String jsonContent = mapper.writeValueAsString(ob);
//            result = jsonContent;
//        } catch(JsonProcessingException e) {
//            result = "JSON processing error";
//        }
//        return result;
//    }
//}
