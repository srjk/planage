package in.stackroute.planage.sprint.users.controller;

import in.stackroute.planage.sprint.sprintPlanning.model.Product;
import in.stackroute.planage.sprint.users.model.Users;
import in.stackroute.planage.sprint.users.service.impl.UsersService;
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

    HashMap<String,Object> responseObject;

    @PostMapping(path="/users/{userEmail}")
    public ResponseEntity<Users> addProductToUser(@PathVariable String userEmail, @RequestBody Product product)
    {
        Users users = usersService.addProductToUser(product,userEmail);
        responseObject = new HashMap<>();
        responseObject.put("result", users);
        responseObject.put("msg", "Success!");
        responseObject.put("error", "false");

        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    //get user details
    @GetMapping(path = "/users")
    public ResponseEntity<List<Users>> getAllUsers()
    {
        List<Users> users = usersService.getAllUsers();
        responseObject = new HashMap<>();
        responseObject.put("result", users);
        responseObject.put("msg", "Success!");
        responseObject.put("error", "false");

        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping(path="/product/{userEmail}")
    public ResponseEntity<List<Product>> getProductOfUser(@PathVariable String userEmail){
        List<Product> productList = usersService.getProductOfUser(userEmail);
        responseObject = new HashMap<>();
        responseObject.put("result", productList);
        responseObject.put("msg", "Success!");
        responseObject.put("error", "false");

        return new ResponseEntity<>(productList, HttpStatus.OK);
    }



    @GetMapping("/")
    public RedirectView getMapping() {
        RedirectView redirectView = new RedirectView();
        redirectView.setUrl("http://localhost:8085/user");
        return redirectView;
    }

    @GetMapping("/user")
    @ResponseBody
    public RedirectView user(Principal principal, HttpServletResponse response) {
        RedirectView redirectView = new RedirectView();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
//        System.out.println("+++++++" +((OAuth2Authentication) principal).getUserAuthentication().getDetails());
        Map<String, Object> details = (Map<String, Object>) ((OAuth2Authentication) principal).getUserAuthentication().getDetails();
        Map<String, String> map = new LinkedHashMap<>();
        map.put("name", (String) details.get("name"));
        map.put("email", (String) details.get("email"));
        System.out.println(map.get("name"));
        System.out.println(map.get("email"));
        Users users = usersService.addUsers(map.get("name"),map.get("email"));
        String jwtToken = usersService.generateToken(users);
        Cookie cookie = new Cookie("jwt-token", jwtToken);
        System.out.println("in auth/login with jwt token: " + jwtToken);
        cookie.setPath("/");
        response.addCookie(cookie);
//        redirectView.setUrl("http://localhost:8086");
//        redirectView.setUrl("http://localhost:8762/user-info/#/products");
        redirectView.setUrl("http://localhost:4200/user-info/#/products");

        return redirectView;
    }
}
