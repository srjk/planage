//package in.stackroute.planage.product.Email.controller;
//
//import com.auth0.jwt.algorithms.Algorithm;
//import com.auth0.jwt.JWT;
//import in.stackroute.planage.product.Email.dto.MailRequest;
//import in.stackroute.planage.product.Email.dto.MailResponse;
//import in.stackroute.planage.product.Email.service.EmailService;
//import in.stackroute.planage.product.products.model.Teams;
//import in.stackroute.planage.product.products.service.impl.ProductsService;
//import in.stackroute.planage.product.users.model.User;
//import in.stackroute.planage.product.users.service.impl.UsersService;
//import io.jsonwebtoken.Claims;
//import io.jsonwebtoken.Jwts;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.servlet.view.RedirectView;
//
//import javax.xml.bind.DatatypeConverter;
//import java.util.ArrayList;
//import java.util.HashMap;
//import java.util.Map;
//import java.util.UUID;
//
//@RestController
//@CrossOrigin("*")
//@RequestMapping("/api/v1")
//public class EmailController {
//  @Autowired
//  private EmailService service;
//
//  @Autowired
//  private UsersService usersService;
//
//  @Autowired
//  private ProductsService productsService;
//
//  @Value("${jwt.secret}")
//  private String secret;
//
//  @PostMapping("products/{id}/sendingEmail")
//  public MailResponse sendEmail(@PathVariable String id, @RequestBody MailRequest request) {
//    System.out.println("email");
//    Map<String, Object> model = new HashMap<>();
//    model.put("Name", "Planage");
//    model.put("location", "Bangalore,India");
//    return service.sendEmail(request, model);
//  }
//
//
//  @GetMapping("product/accept")
//  public RedirectView verifyToken(@RequestParam String token, @RequestParam String productId) {
//    System.out.println("token is ++++++++++" + token + "\n\n\n\n\n\n\n");
//    RedirectView redirectView = new RedirectView();
//    if (token != null) {
////      // parse the token.
////      System.out.println("product/accept");
////        String user = JWT.require(Algorithm.HMAC512(secret.getBytes()))
////              .build()
////              .verify(token)
////              .getSubject();
//
//      System.out.println("dasdada" + Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getIssuer());
//      String email = (String) Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().get("email");
//      System.out.println(email);
//      try {
//        System.out.println("Checking token valid");
//        Claims claims = Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
//        System.out.println("+++++++++"+claims.getAudience());
//        System.out.println("************"+claims.getIssuer());
//        System.out.println("Token valid");
////        redirectView.setUrl("http://localhost:8762/product-manager-ui/#/dashBoard");
//        User user = usersService.getUserByUserEmail(email);
//        if(user!=null) {
//          String url = "http://localhost:4200/#/products/";
//          String name = user.getUserName();
//          String id = user.getId();
//          Teams teams = new Teams();
//          teams.setMemberName(name);
//          teams.setMemberEmail(email);
//          teams.setUsersId(id);
//          teams.setMemberId(UUID.randomUUID().toString().substring(25));
//          productsService.updateTeam(teams, productId);
//          url = url.concat(productId);
//          url = url.concat("/about");
//          redirectView.setUrl(url);
//        }
//        else {
//          redirectView.setUrl("http://localhost:8084");
//        }
//      } catch (Exception e) {
//        redirectView.setUrl("http://localhost:8084");
//        System.out.println("Token invalid");
//        e.printStackTrace();
//      }
////      if (user != null) {
////        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(user, null, new ArrayList<>());
////        System.out.println(usernamePasswordAuthenticationToken);
////        return usernamePasswordAuthenticationToken;
////      }
//      return redirectView;
//    }
//    return redirectView;
//  }
//
//
//}
