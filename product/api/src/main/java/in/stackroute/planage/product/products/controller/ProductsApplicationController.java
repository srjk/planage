package in.stackroute.planage.product.products.controller;

import in.stackroute.planage.product.Email.dto.MailResponse;
import in.stackroute.planage.product.products.model.Teams;
import in.stackroute.planage.product.products.service.impl.NotificationService;
import in.stackroute.planage.product.products.service.impl.ProductsService;
import in.stackroute.planage.product.products.model.Products;
import in.stackroute.planage.product.users.model.Product;
import in.stackroute.planage.product.users.model.User;
import in.stackroute.planage.product.users.service.impl.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.*;
import org.thymeleaf.context.Context;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1")
public class ProductsApplicationController {

    @Autowired
   private ProductsService productsService;

    @Autowired
    private UsersService usersService;

    HashMap<String,Object> responseObject;

    @GetMapping(path="/products")
    public ResponseEntity<List<Products>> getAllProducts() {
        List<Products> products = productsService.getAllProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    //get product by name
    @GetMapping(path="/products/{id}")
    public ResponseEntity<Products> getProductsByProductId(@PathVariable String id){
        Products products = productsService.getProductsById(id);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @PostMapping(value= "/products")
    public ResponseEntity<Products> addProduct(@RequestBody Products products){
        Products products1 = productsService.addProducts(products);
        return new ResponseEntity<>(products1, HttpStatus.OK);
    }

    //add member to team by name
    @CrossOrigin("*")
    @PutMapping(value = "/products/{id}/team")
    public ResponseEntity<Products> updateTeamMember(@PathVariable String id, @RequestBody Teams teams){
        System.out.println(teams);
        String memberName = teams.getMemberName();
        String userId = teams.getUsersId();
        Products updatedProducts = null;
            updatedProducts = productsService.updateTeam(teams, id);
        return new ResponseEntity<>(updatedProducts, HttpStatus.OK);
    }

    //delete member from team by member name
    @DeleteMapping(value = "/products/{id}/team/{memberId}")
    public ResponseEntity<Products> deleteTeamMember(@PathVariable String productId, @PathVariable String memberId){
        Products deletedTeam = productsService.deleteTeam(memberId, productId);
//        responseObject.put("result", deletedTeam);
//        responseObject.put("msg","Success!");
//        responseObject.put("error", "False");
        return new ResponseEntity<>(deletedTeam, HttpStatus.OK);
    }

    @GetMapping(value="/products/{id}/team")
    public ResponseEntity<List<Teams>> getTeam(@PathVariable String id){
//        System.out.println(id);
        List<Teams> teamsList = productsService.getTeam(id);
        return new ResponseEntity<>(teamsList,HttpStatus.OK);
    }


   }
