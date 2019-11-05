package in.stackroute.planage.promanager.authentication.controller;

import in.stackroute.planage.promanager.authentication.model.User;
import in.stackroute.planage.promanager.authentication.repository.UserRepository;
import in.stackroute.planage.promanager.authentication.service.UserManager;
import in.stackroute.planage.promanager.authentication.service.UserService;
import in.stackroute.planage.promanager.invitation.dto.MailRequest;
import in.stackroute.planage.promanager.invitation.dto.MailResponse;
import in.stackroute.planage.promanager.invitation.service.InviteService;
import in.stackroute.planage.promanager.model.ProductCalender;
import in.stackroute.planage.promanager.service.ProductCalenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1")
public class UserAuthController {

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

  @GetMapping(path = "/users/{userEmail}")
  public ResponseEntity<User> getUserByEmail(@PathVariable String userEmail) {
    User user = usersService.getUserByUserEmail(userEmail);
    return new ResponseEntity<>(user, HttpStatus.OK);
  }

  @PostMapping(value = "/users/{userEmail}")
  public ResponseEntity<User> addProductToUser(@PathVariable String userEmail, @RequestBody ProductCalender products) {
    User user = usersService.addProductToUser(userEmail, products);
    return new ResponseEntity<>(user, HttpStatus.OK);
  }

  @PostMapping("/products/{id}/sendingEmail")
  public ResponseEntity<MailResponse> onSendEmail(@PathVariable String id, @RequestBody MailRequest mailRequest) {
    Map<String, Object> model = new HashMap();
    model.put("Name", "Planage");
    model.put("location", "Bangalore,India");
    return ResponseEntity.ok(emailService.sendEmail(mailRequest, model));
  }

  @GetMapping("/products/accept")
  public RedirectView onAcceptInvitation(@RequestParam("token") String token,
                                         @RequestParam("productId") String productId) {
    RedirectView redirectView = new RedirectView();
    String googleStateURL = userManager.onVerifyEmail(token, productId);
    System.out.println("Redirecting to login page...");
//        redirectView.setUrl("http://localhost:8084/users?state="+googleStateURL);
    redirectView.setUrl("http://localhost:8081/users?state=" + googleStateURL);
    return redirectView;
  }
}
