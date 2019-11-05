package in.stackroute.planage.product.users.controller;

import in.stackroute.planage.product.Email.dto.MailRequest;
import in.stackroute.planage.product.Email.dto.MailResponse;
import in.stackroute.planage.product.Email.service.EmailService;
import in.stackroute.planage.product.products.model.Products;
import in.stackroute.planage.product.users.model.Product;
import in.stackroute.planage.product.users.model.User;
import in.stackroute.planage.product.users.service.impl.UserManager;
import in.stackroute.planage.product.users.service.impl.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.security.Principal;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class UsersApplicationController {
    @Autowired
    UsersService usersService;

    @Autowired
    EmailService emailService;

    @Autowired
    UserManager userManager;

    HashMap<String,Object> responseObject;

    //get user details
    @CrossOrigin("*")
    @GetMapping(path = "api/v1/users")
    public ResponseEntity<List<User>> getAllUsers()
    {
        List<User> users = usersService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping(path = "api/v1/users/{userEmail}")
    public ResponseEntity<User> getUserByEmail(@PathVariable String userEmail){
        User user = usersService.getUserByUserEmail(userEmail);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }

//    @GetMapping(path = "api/v1/users/{userEmail}/product")
//    public ResponseEntity<List<Product>> getProductOfUser(@PathVariable String userEmail){
//        List<Product> productList = usersService.getProductOfUser(userEmail);
//        System.out.println(productList);
//        return new ResponseEntity<>(productList,HttpStatus.OK);
//    }

    @PostMapping(value = "api/v1/users/{userEmail}")
    public ResponseEntity<User> addProductToUser(@PathVariable String userEmail, @RequestBody Products products){
        User user = usersService.addProductToUser(userEmail,products);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }


    @CrossOrigin("*")
    @GetMapping(value = "api/v1/products/user/{userEmail}")
    public ResponseEntity<List<Product>> getProductByEmail(@PathVariable String userEmail){
        List<Product> productsList = usersService.getProductOfUser(userEmail);
        return new ResponseEntity<>(productsList, HttpStatus.OK);
    }



    @PostMapping("api/v1/products/{id}/sendingEmail")
    public ResponseEntity<MailResponse> onSendEmail(@PathVariable String id,@RequestBody MailRequest mailRequest){
        Map<String, Object> model = new HashMap();
        model.put("Name", "Planage");
        model.put("location", "Bangalore,India");
        return ResponseEntity.ok(emailService.sendEmail(mailRequest, model));
    }
    @GetMapping("api/v1/product/accept")
    public RedirectView onAcceptInvitation(@RequestParam("token") String token,
                                           @RequestParam("productId") String productId, Principal principal, HttpServletResponse response){
        RedirectView redirectView = new RedirectView();
        String googleStateURL = userManager.onVerifyEmail(token, productId);
        System.out.println("Redirecting to login page...");
//        redirectView.setUrl("http://localhost:8084/users?state="+googleStateURL);
        redirectView.setUrl("http://localhost:8084/users?state="+googleStateURL);
        return redirectView;
    }


}
