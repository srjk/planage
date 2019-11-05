package in.stackroute.planage.promanager.invitation.controller;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import in.stackroute.planage.promanager.authentication.service.UserService;
import in.stackroute.planage.promanager.invitation.dto.MailRequest;
import in.stackroute.planage.promanager.invitation.dto.MailResponse;
import in.stackroute.planage.promanager.invitation.service.InviteService;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1")
public class InviteController {
  @Autowired
  private InviteService service;

  @Autowired
  private UserService usersService;

  @Value("${jwt.secret}")
  private String secret;

//  @PostMapping("products/{id}/sendingEmail")
//  public MailResponse sendEmail(@PathVariable String id, @RequestBody MailRequest request) {
//    System.out.println("email");
//    Map<String, Object> model = new HashMap<>();
//    model.put("Name", "Planage");
//    model.put("location", "Bangalore,India");
//    return service.sendEmail(request, model);
//  }

  @GetMapping("product/accept")
  public UsernamePasswordAuthenticationToken verifyToken(@RequestParam String token, @RequestParam String productId, @RequestParam String userRole) {
    System.out.println("token is ++++++++++" + token + "\n\n\n\n\n\n\n");
    if (token != null) {
      // parse the token.
      System.out.println("product/accept");
      String user = JWT.require(Algorithm.HMAC512(secret.getBytes()))
              .build()
              .verify(token)
              .getSubject();

      System.out.println("dasdada" + Jwts.parser().setSigningKey(secret).parseClaimsJws(token));

      if (user != null) {
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(user, null, new ArrayList<>());
        System.out.println(usernamePasswordAuthenticationToken);
        return usernamePasswordAuthenticationToken;
      }
      return null;
    }
    return null;
  }

}
