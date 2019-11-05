package in.stackroute.planage.product.users.controller;
import in.stackroute.planage.product.backlog.repository.ProductRepository;
import in.stackroute.planage.product.backlog.service.impl.ProductService;
import in.stackroute.planage.product.products.model.Products;
import in.stackroute.planage.product.products.model.Teams;
import in.stackroute.planage.product.products.repository.ProductsRepository;
import in.stackroute.planage.product.products.service.impl.ProductsService;
import in.stackroute.planage.product.users.model.Product;
import in.stackroute.planage.product.users.model.User;
import in.stackroute.planage.product.users.repository.UsersRepository;
import in.stackroute.planage.product.users.service.impl.UserManager;
import in.stackroute.planage.product.users.service.impl.UsersService;
import org.apache.tomcat.util.http.SameSiteCookies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.security.Principal;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

@Controller
@CrossOrigin("*")
public class AuthController {
  @Autowired
  public UserManager userManager;

  @Autowired
  public UsersService usersService;

  @Autowired
  public UsersRepository usersRepository;

  @Autowired
  public ProductsRepository productsRepository;

  @Autowired
  public ProductsService productsService;

  @GetMapping("/")
  public RedirectView getMapping() {
    System.out.println("Coming for root url...");
    RedirectView redirectView = new RedirectView();
    redirectView.setUrl("http://localhost:8084/users");
    return redirectView;
  }
  @GetMapping("/users")
  @ResponseBody
  public RedirectView user(Principal principal, HttpServletResponse response, @RequestParam(value = "state", required = false) String state) throws InterruptedException {
    System.out.println("Redirecting by google...");
    String userId;
    RedirectView redirectView = new RedirectView();
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    // When user is coming from email invitation link
    if(state != null && !state.equals("") && state.contains(".")){
      String productId = state.split("\\.")[0];
      System.out.println("\n\n\n\n"+productId);
      System.out.println(state.contains("."));
//      System.out.println(state.split("\\.")[1].isEmpty());
        userId = state.split("\\.")[1];
        System.out.println("\n\n\n\n" + userId);
      System.out.println("=========="+userId);
      boolean isExistingUSer = userManager.checkForExistingUser(productId, userId);
      System.out.println("^^^^^^^^^^^^^^^^^^"+isExistingUSer);
      if (isExistingUSer) {

        User user = usersRepository.findById(userId).get();
        User data = usersRepository.findByUserEmail(user.getUserEmail());
        Teams teams = new Teams();
        teams.setMemberEmail(user.getUserEmail());
        teams.setMemberName(user.getUserName());
        teams.setUsersId(userId);
        productsService.updateTeam(teams,productId);
        System.out.println("User updated to team");
        Products products = productsRepository.findByProductId(productId);
        System.out.println(products);
        usersService.addProductToUser(user.getUserEmail(),products);
        System.out.println("user add to product");
        System.out.println("existing user....redirect to specific board");
//        String url = "http://localhost:8762/product-manager-ui/#/products/"+productId+"/about";
        redirectView.setUrl("http://localhost:4200/#/dashBoard/products/" + productId + "/about");
//        redirectView.setUrl(url);
        return redirectView;
      }
    }

    Map<String, Object> details = (Map<String, Object>) ((OAuth2Authentication) principal).getUserAuthentication().getDetails();
    Map<String, String> map = new LinkedHashMap<>();
    map.put("name", (String) details.get("name"));
    map.put("email", (String) details.get("email"));
    User user = userManager.saveUser(map.get("name"),map.get("email"));
    String jwtToken = userManager.generateJwtToken(user.getUserEmail());
    Cookie cookie = new Cookie("_planage_product", jwtToken);
    cookie.setPath("/");
    System.out.println("setting cookie");
    response.addCookie(cookie);
    String redirectUrl;
    if(state!= null && !state.equals("")){
      String productId = state.split("\\.")[0];
      User data = usersRepository.findByUserEmail(map.get("email"));
      String Id = data.getId();
      Teams teams = new Teams();
      teams.setMemberEmail(map.get("email"));
      teams.setMemberName(map.get("name"));
      teams.setUsersId(Id);
      productsService.updateTeam(teams,productId);
      System.out.println(teams);
      System.out.println("NON-existing user added to team");
      System.out.println(productsRepository.findByProductId(productId));
      Products products = productsRepository.findByProductId(productId);
      usersService.addProductToUser(map.get("email"),products);
      System.out.println("NON-existing user added to product");
//      redirectUrl = "http://localhost:8762/product-manager-ui/#/products/" + state.split("\\.")[0];
//      redirectUrl = redirectUrl.concat("/about");
      redirectUrl = "http://localhost:4200/#/dashBoard/products/" + state.split("\\.")[0];
      redirectUrl = redirectUrl.concat("/about");
    }else{
//      redirectUrl = "http://localhost:8762/product-manager-ui/#/dashBoard";
      redirectUrl = "http://localhost:4200/#/dashBoard";
    }
    redirectView.setUrl(redirectUrl);
    return redirectView;
  }
}
