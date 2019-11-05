package in.stackroute.planage.process.controller;

import in.stackroute.planage.process.model.userModel.User;
import in.stackroute.planage.process.service.User.UserManager;
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

@Controller
@CrossOrigin("*")
public class AuthController {

  @Autowired
  public UserManager userManager;

  @GetMapping("/")
  public RedirectView getMapping() {
    RedirectView redirectView = new RedirectView();
    redirectView.setUrl("http://localhost:8080/users");
    return redirectView;
  }

  @GetMapping("/users")
  @ResponseBody
  public RedirectView user(Principal principal, HttpServletResponse response, @RequestParam(value = "state", required = false) String state) {

    RedirectView redirectView = new RedirectView();
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

    // When user is coming from email invitation link
    if(state != null && !state.equals("")) {
      if(state.indexOf('.') != -1) {
        String boardId = state.split("\\.")[0];
        String subscriberId = state.split("\\.")[1];
        userManager.saveSubscriber(subscriberId, boardId);
        redirectView.setUrl("http://localhost:4200/board/" + boardId);
        return redirectView;
      }
    }

    Map<String, Object> details = (Map<String, Object>) ((OAuth2Authentication) principal).getUserAuthentication().getDetails();
    Map<String, String> map = new LinkedHashMap<>();
    map.put("name", (String) details.get("name"));
    map.put("email", (String) details.get("email"));
    map.put("profile", (String) details.get("picture"));

    User user = userManager.saveUser(map.get("name"),map.get("email"), map.get("profile"));

    String jwtToken = userManager.generateJwtToken(user.getUserEmail());
    Cookie cookie = new Cookie("__planage_process", jwtToken);
    cookie.setPath("/");

    response.addCookie(cookie);

    String redirectUrl;
    if(state!= null && !state.equals("")){
      String boardId = state.split("\\.")[0];
      userManager.saveSubscriber(user.getUserId(), boardId);
      redirectUrl = "http://localhost:4200/board/" + state.split("\\.")[0];
    }else{
      redirectUrl = "http://localhost:4200/";
    }
    redirectView.setUrl(redirectUrl);
    return redirectView;
  }
}
