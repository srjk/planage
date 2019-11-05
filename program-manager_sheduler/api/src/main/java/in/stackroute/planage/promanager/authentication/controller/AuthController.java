package in.stackroute.planage.promanager.authentication.controller;

import in.stackroute.planage.promanager.authentication.model.User;
import in.stackroute.planage.promanager.authentication.repository.UserRepository;
import in.stackroute.planage.promanager.authentication.service.UserManager;
import in.stackroute.planage.promanager.authentication.service.UserService;
import in.stackroute.planage.promanager.invitation.service.InviteService;
import in.stackroute.planage.promanager.service.ProductCalenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.security.Principal;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;


@Controller
@CrossOrigin("*")
public class AuthController {

  @Value("${host.url}")
  String url;

  @Autowired
  UserService usersService;

  @Autowired
  InviteService emailService;

  @Autowired
  UserManager userManager;

  @Autowired
  public UserRepository usersRepository;

  @Autowired
  public ProductCalenderService productsService;

  HashMap<String, Object> responseObject;

  @GetMapping("/")
  public RedirectView getMapping() {
    System.out.println("**********"+"coming for login...");
    RedirectView redirectView = new RedirectView();
    redirectView.setUrl("/user");
    return redirectView;
  }

  @GetMapping("/user")
  @ResponseBody
  public RedirectView user(Principal principal, HttpServletResponse response, @RequestParam(value = "state", required = false) String state) {
    String userId;
    String userRole;
    RedirectView redirectView = new RedirectView();
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    if (state != null && !state.equals("")) {
      String productId = state.split("\\.")[0];
      userId = state.split("\\.")[1];
      userRole = state.split("\\.")[2];
      boolean isExistingUser = userManager.checkForExistingUser(productId, userId);
      if (isExistingUser) {
        User user = usersRepository.findById(userId).orElse(null);
        if (user.getUserRole().equals("assignee")) {
          //        redirectView.setUrl("http://localhost:8082/program-manager-ui/#/productdashboard");
          redirectView.setUrl(this.url + "#/productdashboard/");
        } else if (user.getUserRole().equals("participant")) {
          redirectView.setUrl(this.url + "#/participant/");
        }
        return redirectView;
      }
    }
    Map<String, Object> details = (Map<String, Object>) ((OAuth2Authentication) principal).getUserAuthentication().getDetails();
    Map<String, String> map = new LinkedHashMap<>();
    map.put("name", (String) details.get("name"));
    map.put("email", (String) details.get("email"));
    User user = userManager.saveUser(map.get("name"), map.get("email"));
    String jwtToken = userManager.generateJwtToken(user.getEmail());
    Cookie cookie = new Cookie("__scheduler", jwtToken);
    cookie.setPath("/");
    response.addCookie(cookie);
    String redirectUrl;
    if (state != null && !state.equals("")) {
      String productId = state.split("\\.")[0];
      User data = usersRepository.findByEmail(map.get("email"));
      String Id = data.getId();
      String role = data.getUserRole();
      if (role.equals("assignee")) {
        //        redirectView.setUrl("http://localhost:8082/program-manager-ui/#/productdashboard");
        redirectView.setUrl(this.url + "#/productdashboard/");
      } else if (role.equals("participant")) {
        redirectView.setUrl(this.url + "#/participant/");
      }
//      redirectUrl = "http://localhost:8762/product-manager-ui/#/products/" + state.split("\\.")[0];
//      redirectUrl = redirectUrl.concat("/about");
//      redirectUrl = "http://localhost:8082/#/productdashboard/" + state.split("\\.")[0];
//      redirectUrl = redirectUrl.concat("/about");
    } else {
      User data = usersRepository.findByEmail(map.get("email"));
      String Id = data.getId();
      String role = data.getUserRole();
      if (role.equals("assignee")) {
        //        redirectView.setUrl("http://localhost:8082/program-manager-ui/#/productdashboard");
        redirectView.setUrl(this.url + "#/productdashboard/");
      } else if (role.equals("participant")) {
        redirectView.setUrl(this.url + "#/participant/");
      }
//      redirectUrl = "http://localhost:8762/product-manager-ui/#/dashBoard";
//      redirectView.setUrl("http://localhost:8082/#//");
    }
//    redirectView.setUrl(redirectUrl);
    return redirectView;
  }
}



