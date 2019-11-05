package in.stackroute.planage.process.controller;

import in.stackroute.planage.process.model.mailModel.MailRequest;
import in.stackroute.planage.process.model.mailModel.MailResponse;
import in.stackroute.planage.process.model.userModel.User;
import in.stackroute.planage.process.model.userModel.UsersResponse;
import in.stackroute.planage.process.service.SMTP.EmailService;
import in.stackroute.planage.process.service.User.UserManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1")
public class UserController {

  @Autowired
  public UserManager userManager;

  @Autowired
  public EmailService emailService;

  @GetMapping("/users/{useremail}/details")
  public User getUserDetails(@PathVariable String useremail){
    User user = userManager.getUserDetails(useremail);
    return user;
  }

  @GetMapping("/users")
  public ResponseEntity<List<UsersResponse>> getAllUsers(){
    return ResponseEntity.ok(userManager.getAllUsers());
  }

  @PostMapping("/users/email")
  public ResponseEntity<MailResponse> onSendEmail(@RequestBody MailRequest mailRequest){
    Map<String, Object> model = new HashMap();
    model.put("senderName", mailRequest.getSenderName());
    model.put("boardId",mailRequest.getBoardId());
    model.put("subscriberEmail", mailRequest.getTo());

    return ResponseEntity.ok(emailService.sendEmail(mailRequest, model));
  }

  @GetMapping("/users/boards/invite")
  public RedirectView onAcceptInvitation(@RequestParam("token") String token,
                                 @RequestParam("boardId") String boardId){

    RedirectView redirectView = new RedirectView();
    String googleStateURL = userManager.onVerifyEmail(token, boardId);
    redirectView.setUrl("http://localhost:8080/users?state="+googleStateURL);
    return redirectView;
  }
}
