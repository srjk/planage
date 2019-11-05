package in.stackroute.planage.promanager.controller;

import in.stackroute.planage.promanager.model.PredefinedTask;
import in.stackroute.planage.promanager.model.ProductCalender;
import in.stackroute.planage.promanager.model.Program;
import in.stackroute.planage.promanager.service.ProductCalenderService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class ProductController {
  @Autowired
  ProductCalenderService productCalenderService;

  HashMap<String, Object> responseObject;

  @PostMapping("/products/{email}")
  public ResponseEntity<ProductCalender> createProduct(@PathVariable String email, @RequestBody ProductCalender product) {
    System.out.println("++++++++++++++++++++++++++");
    return ResponseEntity.ok(productCalenderService.createProduct(email, product));
  }

  @PutMapping(value = "/products/{email}/{id}")
  public ResponseEntity<ProductCalender> updateById(@PathVariable("email") String email, @PathVariable("id") String id, @RequestBody ProductCalender product) {
    return productCalenderService.findById(id)
            .map(productData -> {
              productData.setCreatedAt(new Date());
              productData.setDurationDays(product.getDurationDays());
              productData.setDurationHours(product.getDurationHours());
              productData.setDurationWeek(product.getDurationWeek());
              productData.setAssignee(product.getAssignee());
              productData.setProductName(product.getProductName());
              productData.setAgenda(product.getAgenda());
              productData.setPrograms(productData.getPrograms());
              ProductCalender updatedProduct = productCalenderService.saveProduct(email, productData);
              return ResponseEntity.ok().body(updatedProduct);
            }).orElse(ResponseEntity.notFound().build());
  }

  @GetMapping("/products/{email}")
  public ResponseEntity<List<ProductCalender>> getAllProduct(@PathVariable String email) {
    System.out.println("inside get ");
    return ResponseEntity.ok(productCalenderService.findAllProduct(email));
  }

  @GetMapping("/product/{id}")
  public ResponseEntity<ProductCalender> getProductById(@PathVariable("id") String id) {
    return productCalenderService.findById(id)
            .map(product -> ResponseEntity.ok().body(product))
            .orElse(ResponseEntity.notFound().build());
  }




//  @GetMapping("/products/{id}")
//  public ResponseEntity<ProductCalender> getProductById(@PathVariable("id") String id) {
//    return productCalenderService.findById(id)
//            .map(product -> ResponseEntity.ok().body(product))
//            .orElse(ResponseEntity.notFound().build());
//  }

  @GetMapping("/products/tasks/{productId}")
  public ResponseEntity<HashMap<String, Object>> getTasks(@PathVariable("productId") String productId) {
    List<PredefinedTask> task = productCalenderService.getTasksFromProduct(productId);
    responseObject = new HashMap<>();
    responseObject.put("result", task);
    responseObject.put("msg", "Success!");
    responseObject.put("error", "False");
    return new ResponseEntity<>(responseObject, HttpStatus.OK);
  }

  @DeleteMapping("/products/{id}")
  public ResponseEntity<?> deleteProduct(@PathVariable String id) {
    return ResponseEntity.ok(productCalenderService.deleteByProductId(id));
  }

  @PutMapping("/products/{id}/programs")
  public ResponseEntity<ProductCalender> saveProgram(@PathVariable("id") String id, @RequestBody Program program) {
    productCalenderService.saveProgram(id, program);

    return productCalenderService.findById(id)
            .map(product1 -> ResponseEntity.ok().body(product1))
            .orElse(ResponseEntity.notFound().build());
  }

  @DeleteMapping("/products/{productId}/programs/{programId}")
  public ResponseEntity<ProductCalender> deleteProgram(@PathVariable("productId") String productId, @PathVariable("programId") String programId) {
    productCalenderService.deleteProgram(productId, programId);
    return productCalenderService.findById(productId)
            .map(product1 -> ResponseEntity.ok().body(product1))
            .orElse(ResponseEntity.notFound().build());
  }

  @PutMapping("/products/{productId}/programs/{programId}")
  public ResponseEntity<ProductCalender> updateProgram(@PathVariable("productId") String productId, @PathVariable("programId") String programId, @RequestBody Program program) {
    productCalenderService.updateProgram(productId, programId, program);
    return productCalenderService.findById(productId)
            .map(product1 -> ResponseEntity.ok().body(product1))
            .orElse(ResponseEntity.notFound().build());
  }

  @DeleteMapping("/products/{productId}/tasks/{taskId}")
  public ResponseEntity<HashMap<String, Object>> deleteTask(@PathVariable("productId") String productId, @PathVariable("taskId") String taskId) {
    ProductCalender productCalender = productCalenderService.deleteTask(productId, taskId);
    responseObject = new HashMap<>();
    responseObject.put("result", productCalender);
    responseObject.put("msg", "Success!");
    responseObject.put("error", "False");
    return new ResponseEntity<>(responseObject, HttpStatus.OK);
  }

  @PostMapping("/products/{productId}/predefinedtasks")
  public ResponseEntity<HashMap<String, Object>> addTask(@PathVariable("productId") String productId, @RequestBody PredefinedTask predefinedTask) {
    ProductCalender productCalender = productCalenderService.addTask(productId, predefinedTask);
    responseObject = new HashMap<>();
    responseObject.put("result", productCalender);
    responseObject.put("msg", "Success!");
    responseObject.put("error", "False");
    return new ResponseEntity<>(responseObject, HttpStatus.OK);
  }

//  @DeleteMapping(value = "/programs/{programId}/tasks/{taskId}")
//  public ResponseEntity<ProductCalender> deleteTaskFromProgram(@PathVariable("productId") String productId, @PathVariable("taskId") String taskId) {
//    productCalenderService.deleteTaskFromProgram(productId, taskId);
//    return productCalenderService.findById(productId)
//            .map(product1 -> ResponseEntity.ok().body(product1))
//            .orElse(ResponseEntity.notFound().build());
//  }

//  @PostMapping("/programs/{programId}/tasks")
//  public ResponseEntity<ProductCalender> addTaskToProgram(@PathVariable("productId") String productId, @RequestBody PredefinedTask predefinedTask) {
//    productCalenderService.addTaskToProgram(productId, predefinedTask);
//    return productCalenderService.findById(productId)
//            .map(product1 -> ResponseEntity.ok().body(product1))
//            .orElse(ResponseEntity.notFound().build());
//  }


}
