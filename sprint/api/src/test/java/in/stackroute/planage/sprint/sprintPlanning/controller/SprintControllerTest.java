//package in.stackroute.planage.sprint.sprintPlanning.controller;
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import in.stackroute.planage.sprint.sprintPlanning.model.Product;
//import in.stackroute.planage.sprint.sprintPlanning.model.Sprint;
//import in.stackroute.planage.sprint.sprintPlanning.model.Task;
//import in.stackroute.planage.sprint.sprintPlanning.model.Userstory;
//import in.stackroute.planage.sprint.sprintPlanning.service.Impl.SprintService;
//import in.stackroute.planage.sprint.sprintPlanning.service.Impl.UserService;
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
//import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import static org.mockito.Mockito.when;
//
//@RunWith(SpringRunner.class)
//@WebMvcTest(SprintController.class)
//public class SprintControllerTest {
//
//        @MockBean
//        private SprintService sprintService;
//
//        @MockBean
//        private UserService userService;
//
//        private MockMvc mockMvc;
//
//        private Product product;
//        private Sprint sprint;
//        private Userstory userstory;
//        private Task task;
//
//        @InjectMocks
//        private SprintController sprintController;
//
//        private List<Sprint> sprintList;
//        private List<Product> productList;
//        private List<Userstory> userStoryList;
//        private List<Task> taskList;
//
//    @Before
//        public void setUp() throws Exception {
//            productList = new ArrayList<>();
//            MockitoAnnotations.initMocks(this);
//            mockMvc = MockMvcBuilders.standaloneSetup(sprintController).build();
//            product = new Product("1", "Product One");
//            productList.add(product);
////            userstory.setUserstoryId("1");
//
//            sprintList = new ArrayList<>();
////            userStoryList =new ArrayList<>();
////            task =new Task("1","Task One","Nitisha","Medium","Must");
////            userstory = new Userstory("1","UserStory 1", task);
////            userStoryList.add(userstory);
//            sprint = new Sprint("1", "1", "Sprint One",userStoryList);
//            sprintList.add(sprint);
//        }
//
//        // Get All Product Passed Case
//        @Test
//        public void getAllProducts() throws Exception{
//            when(sprintService.getAllProduct()).thenReturn(productList);
//            mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/product")
//                    .contentType(MediaType.APPLICATION_JSON)
//                    .content(jsonToString(product)))
//                    .andExpect(status().isOk())
//                    .andDo(print());
//        }
//
//        // fail Test Case of Products
//        @Test
//        public void getAllProductsFail() throws Exception{
//        when(sprintService.getAllProduct()).thenReturn(productList);
//        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/products")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(jsonToString(product)))
//                .andExpect(status().isNotFound())
//                .andDo(print());
//    }
//
//        //  Post Test Case Passes for Product
//        @Test
//        public void testSaveProduct() throws Exception {
//            mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/product")
//                    .contentType(MediaType.APPLICATION_JSON)
//                    .content(jsonToString(product)))
//                    .andExpect(status().isOk());
//
//
//        }
//    // Post Test Case Fail
//
//     @Test
//        public void testSaveProductFail() throws Exception {
//            mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/products")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(jsonToString(product)))
//                .andExpect(status().isNotFound());
//
//
//    }
//
//        // Get All Sprints Passed Case
//        @Test
//        public void getAllSprintsOfParticularProduct() throws Exception{
//
//                    when(sprintService.getAllSprintsOfProduct("1")).thenReturn(sprintList);
//            mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/products/1/sprints")
//                    .contentType(MediaType.APPLICATION_JSON)
//                    .content(jsonToString(sprint)))
//                    .andExpect(status().isOk())
//                    .andDo(print());
//        }
//
//    // Post Api Test Case For Sprints
//     @Test
//     public void postAllSprintsOfParticularProduct() throws Exception{
//
////        when(sprintService.getAllSprintsOfProduct("1")).thenReturn(sprintList);
//        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/products/1/sprints")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(jsonToString(sprint)))
//                .andExpect(status().isOk())
//                .andDo(print());
//    }
//    // Get A Particular Sprint Of A Product
//    @Test
//    public void getAParticularSprints() throws Exception{
//
//        when(sprintService.getUserstory("1","1")).thenReturn(userStoryList);
//        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/products/1/sprints/1")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(jsonToString(sprint)))
//                .andExpect(status().isOk())
//                .andDo(print());
//    }
//
//    @Test
//    public void postAUserStoryParticularSprints() throws Exception{
//
////        when(sprintService.getUserstory("1","1")).thenReturn(userStoryList);
//        mockMvc.perform(MockMvcRequestBuilders.get("api/v1/products/1/sprints/1/userstories")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(jsonToString(sprint)))
//                .andExpect(status().isNotFound())
//                .andDo(print());
//    }
//
//    @Test
//    public void postAUserStoryParticularSprintsData() throws Exception{
//
////        when(sprintService.getUserstory("1","1")).thenReturn(userStoryList);
//        mockMvc.perform(MockMvcRequestBuilders.post("api/v1/products/1/sprints/1/userstories")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(jsonToString(sprint)))
//                .andExpect(status().isNotFound())
//                .andDo(print());
//    }
//
//    @Test
//    public void postTask() throws Exception{
//        Task task =new Task("1","TaskOne","NJ","MEDIUM","MUST");
//        when(sprintService.addTasks("1","1","1",task)).thenReturn(sprint);
//        mockMvc.perform(MockMvcRequestBuilders.get("api/v1/products/1/sprints/1/userstories/1/tasks")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(jsonToString(sprint)))
//                .andExpect(status().isNotFound())
//                .andDo(print());
//    }
//
//
//
//
//
//    // Get a Particular Product Passed Case
////        @Test
////        public void getProduct() throws Exception{
////            when(productService.findById("Id")).thenReturn(java.util.Optional.ofNullable(product));
////            mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/products/Id")
////                    .contentType(MediaType.APPLICATION_JSON)
////                    .content(jsonToString(product)))
////                    .andExpect(status().isOk())
////                    .andDo(print());
////        }
////
////    // Get a Particular Product Fail Case
////        @Test
////        public void getProducFailt() throws Exception{
////            when(productService.findById("Id")).thenReturn(java.util.Optional.ofNullable(product));
////            mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/products/ID")
////                    .contentType(MediaType.APPLICATION_JSON)
////                    .content(jsonToString(product)))
////                    .andExpect(status().isNotFound())
////                    .andDo(print());
////        }
////
////    // Post Test Case Passes
////        @Test
////        public void testSaveProduct() throws Exception {
////            when(productService.findById("Id")).thenReturn(java.util.Optional.of(product));
////            mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/products")
////                    .contentType(MediaType.APPLICATION_JSON)
////                    .content(jsonToString(product)))
////                    .andExpect(status().isOk());
////
////        }
////
////    // passed Delete Test Case
////        @Test
////        public void testDeleteProduct() throws Exception {
////            when(productService.findById("Id")).thenReturn(java.util.Optional.of(product));
////            mockMvc.perform(MockMvcRequestBuilders.delete("/api/v1/products/Id")
////                    .contentType(MediaType.APPLICATION_JSON)
////                    .content(jsonToString(product)))
////                    .andExpect(status().isOk());
////
////        }
////    // passed  Delete Test Case -Fail
////    @Test
////    public void testDeleteProductFail() throws Exception {
////        when(productService.findById("Id")).thenReturn(java.util.Optional.of(product));
////        mockMvc.perform(MockMvcRequestBuilders.delete("/api/v1/products/ID")
////                .contentType(MediaType.APPLICATION_JSON)
////                .content(jsonToString(product)))
////                .andExpect(status().isNotFound());
////
////    }
////// passed Update Test Case
////        @Test
////        public void testUpdateProduct() throws Exception {
////            when(productService.findById("Id")).thenReturn(java.util.Optional.of(product));
////            mockMvc.perform(MockMvcRequestBuilders.put("/api/v1/products/Id")
////                    .contentType(MediaType.APPLICATION_JSON)
////                    .content(jsonToString(product)))
////                    .andExpect(status().isOk());
////
////        }
////
////    // passed Update Test Case -Fail
////    @Test
////    public void testUpdateProductFail() throws Exception {
////        when(productService.findById("Id")).thenReturn(java.util.Optional.of(product));
////        mockMvc.perform(MockMvcRequestBuilders.put("/api/v1/products/ID")
////                .contentType(MediaType.APPLICATION_JSON)
////                .content(jsonToString(product)))
////                .andExpect(status().isNotFound());
////
////    }
////
//
//
//    private static String jsonToString(final Object ob) throws JsonProcessingException {
//            String result;
//
//            try {
//                ObjectMapper mapper = new ObjectMapper();
//                String jsonContent = mapper.writeValueAsString(ob);
//                result = jsonContent;
//            } catch(JsonProcessingException e) {
//                result = "JSON processing error";
//            }
//
//            return result;
//        }
//    }
