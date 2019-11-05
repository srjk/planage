package in.stackroute.planage.promanager.controller;

import in.stackroute.planage.promanager.model.PredefinedTask;
import in.stackroute.planage.promanager.model.ProductCalender;
import in.stackroute.planage.promanager.service.ProductCalenderService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ProductControllerTest {

  List list;

  ProductCalender productCalender;

  PredefinedTask task;

  @Autowired
  private ProductController productController;

  @MockBean
  private ProductCalenderService productCalenderService;

  @Test
  public void addTask() {
    when(productCalenderService.addTask("sprintId", task)).thenReturn((productCalender));
    assertEquals(list,productController.addTask("sprintId", task).getBody().get("result"));
  }

  @Test
  public void deleteTask() {
    when(productCalenderService.deleteTask("sprintId", "taskId")).thenReturn((productCalender));
    assertEquals(list,productController.deleteTask("sprintId", "taskId").getBody());
  }

}




//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import in.stackroute.plange.promanager.model.PredefinedTask;
//import in.stackroute.plange.promanager.model.Product;
//// import in.stackroute.plange.promanager.service.AssigneeService;
//// import in.stackroute.plange.promanager.service.PersonService;
//// import in.stackroute.plange.promanager.service.ProductService;
//import in.stackroute.plange.promanager.model.ProductCalender;
//import in.stackroute.plange.promanager.model.Program;
//import in.stackroute.plange.promanager.service.ProductCalenderService;
//import in.stackroute.plange.promanager.service.SessionService;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.mockito.InjectMocks;
//import org.mockito.MockitoAnnotations;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.MediaType;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//import org.springframework.test.web.servlet.setup.MockMvcBuilders;
//
//import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//import java.util.ArrayList;
//import java.util.Collections;
//import java.util.Date;
//import java.util.List;
//
//import static org.mockito.Mockito.when;
//
//@RunWith(SpringRunner.class)
//@WebMvcTest(ProductController.class)
//public class ProductControllerTest {
//
//  @MockBean
//  private SessionService sessionService;
//  @MockBean
//  private ProductCalenderService productService;
////         @MockBean
////         private PersonService personService;
////         @MockBean
////         private AssigneeService assigneeService;
//
//  private MockMvc mockMvc;
//
//  private ProductCalender product;
//
//  @InjectMocks
//  private ProductController productController;
//
//  private List<ProductCalender> productList;
//
//  private List<Program> programList;
//
//  private List<PredefinedTask> predefinedTaskList;
//
//  @Before
//  public void setUp() throws Exception {
//    productList = new ArrayList<>();
//    MockitoAnnotations.initMocks(this);
//    mockMvc = MockMvcBuilders.standaloneSetup(productController).build();
//    product = new ProductCalender("Id", "NJ", new Date(), 2, 3, programList, 4, 3, Collections.singletonList("uhui"), predefinedTaskList);
//    productList.add(product);
//  }
//
////  // Get All Events Passed Case
////  @Test
////  public void getAllProducts() throws Exception {
////    when(productService.findAllProduct()).thenReturn(productList);
////    mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/products")
////            .contentType(MediaType.APPLICATION_JSON)
////            .content(jsonToString(product)))
////            .andExpect(status().isOk())
////            .andDo(print());
////  }
////
////  // Get a Particular Product Passed Case
////  @Test
////  public void getProduct() throws Exception {
////    when(productService.findById("Id")).thenReturn(java.util.Optional.ofNullable(product));
////    mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/products/Id")
////            .contentType(MediaType.APPLICATION_JSON)
////            .content(jsonToString(product)))
////            .andExpect(status().isOk())
////            .andDo(print());
////  }
////
////  // Get a Particular Product Fail Case
////  @Test
////  public void getProducFailt() throws Exception {
////    when(productService.findById("Id")).thenReturn(java.util.Optional.ofNullable(product));
////    mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/products/ID")
////            .contentType(MediaType.APPLICATION_JSON)
////            .content(jsonToString(product)))
////            .andExpect(status().isNotFound())
////            .andDo(print());
////  }
////
////  // Post Test Case Passes
////  @Test
////  public void testSaveProduct() throws Exception {
////    when(productService.findById("Id")).thenReturn(java.util.Optional.of(product));
////    mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/products")
////            .contentType(MediaType.APPLICATION_JSON)
////            .content(jsonToString(product)))
////            .andExpect(status().isOk());
////
////  }
////
////  // passed Delete Test Case
////  @Test
////  public void testDeleteProduct() throws Exception {
////    when(productService.findById("Id")).thenReturn(java.util.Optional.of(product));
////    mockMvc.perform(MockMvcRequestBuilders.delete("/api/v1/products/Id")
////            .contentType(MediaType.APPLICATION_JSON)
////            .content(jsonToString(product)))
////            .andExpect(status().isOk());
////
////  }
////
////  // passed  Delete Test Case -Fail
////  @Test
////  public void testDeleteProductFail() throws Exception {
////    when(productService.findById("")).thenReturn(java.util.Optional.of(product));
////    mockMvc.perform(MockMvcRequestBuilders.delete("/api/v1/products/ID")
////            .contentType(MediaType.APPLICATION_JSON)
////            .content(jsonToString(product)))
////            .andExpect(status().isOk());
////
////  }
////
////  // passed Update Test Case
////  @Test
////  public void testUpdateProduct() throws Exception {
////    when(productService.findById("Id")).thenReturn(java.util.Optional.of(product));
////    mockMvc.perform(MockMvcRequestBuilders.put("/api/v1/products/Id")
////            .contentType(MediaType.APPLICATION_JSON)
////            .content(jsonToString(product)))
////            .andExpect(status().isOk());
////
////  }
////
////  // passed Update Test Case -Fail
////  @Test
////  public void testUpdateProductFail() throws Exception {
////    when(productService.findById("Id")).thenReturn(java.util.Optional.of(product));
////    mockMvc.perform(MockMvcRequestBuilders.put("/api/v1/products/ID")
////            .contentType(MediaType.APPLICATION_JSON)
////            .content(jsonToString(product)))
////            .andExpect(status().isNotFound());
////
////  }
//
//  private static String jsonToString(final Object ob) throws JsonProcessingException {
//    String result;
//
//    try {
//      ObjectMapper mapper = new ObjectMapper();
//      String jsonContent = mapper.writeValueAsString(ob);
//      result = jsonContent;
//    } catch (JsonProcessingException e) {
//      result = "JSON processing error";
//    }
//
//    return result;
//  }
