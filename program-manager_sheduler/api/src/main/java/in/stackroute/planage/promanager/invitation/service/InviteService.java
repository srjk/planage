package in.stackroute.planage.promanager.invitation.service;

import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import in.stackroute.planage.promanager.invitation.dto.MailRequest;
import in.stackroute.planage.promanager.invitation.dto.MailResponse;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.Map;

@Service
public class InviteService {

  @Autowired
  private JavaMailSender sender;

  @Autowired
  private Configuration config;

  @Value("${jwt.email.secret}")
  private String emailSecretKey;

  public MailResponse sendEmail(MailRequest request, Map<String, Object> model) {
    MailResponse response = new MailResponse();
    MimeMessage message = sender.createMimeMessage();
    try {
      // set mediaType
      MimeMessageHelper helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
              StandardCharsets.UTF_8.name());
      Claims claims = Jwts.claims();
      claims.put("memberEmail", request.getMemberEmail());
      if(request.getUserId()!= null){
        claims.put("userId", request.getUserId());
      }
      System.out.println("Claims: " + claims);
      String token  =  Jwts.builder().setClaims(claims)
              .setExpiration(new Date(System.currentTimeMillis()+864_00_000)).signWith(SignatureAlgorithm.HS256, emailSecretKey)
              .compact();
      model.put("token", token);
      model.put("productId",request.getProductId());
      model.put("userRole", request.getUserRole());
      Template t = config.getTemplate("email-template.ftl");
      String html = FreeMarkerTemplateUtils.processTemplateIntoString(t, model);
      helper.setTo(request.getMemberEmail());
      helper.setText(html, true);
      helper.setFrom("planageproject@gmail.com");
      sender.send(message);
      response.setMessage("mail send to : " + request.getMemberEmail());
      response.setStatus(Boolean.TRUE);
    } catch (MessagingException | IOException | TemplateException e) {
      response.setMessage("Mail Sending failure : "+e.getMessage());
      response.setStatus(Boolean.FALSE);
    }
    return response;
  }

//  public MailResponse sendEmail(MailRequest request, Map<String, Object> model) {
//    MailResponse response = new MailResponse();
//    MimeMessage message = sender.createMimeMessage();
//    String jwtToken = generateToken(request.getMemberEmail());
//    String productId = request.getProductId();
//    String userRole = request.getUserRole();
//    model.put("token", jwtToken);
//    model.put("productId", productId);
//    model.put("userRole", userRole);
//    System.out.println(request);
//    try {
//      MimeMessageHelper helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
//              StandardCharsets.UTF_8.name());
//      Template t = config.getTemplate("email-template.ftl");
//      String html = FreeMarkerTemplateUtils.processTemplateIntoString(t, model);
//      helper.setTo(request.getMemberEmail());
//      helper.setText(html, true);
//      helper.setSubject(request.getSubject());
//      helper.setFrom("planageproject@gmail.com");
//      sender.send(message);
//      response.setMessage("mail send to : " + request.getMemberEmail());
//      response.setStatus(Boolean.TRUE);
//    } catch (MessagingException | IOException | TemplateException e) {
//      response.setMessage("Mail Sending failure : " + e.getMessage());
//      response.setStatus(Boolean.FALSE);
//    }
//    return response;
//  }

//  public String generateToken(String email) {
//    Claims claims = Jwts.claims();
//    claims.put("email", email);
//    String jwtToken = Jwts.builder().setClaims(claims)
//            .setExpiration(new Date(System.currentTimeMillis() + 864_00_000)).signWith(SignatureAlgorithm.HS512, secret)
//            .compact();
//    return jwtToken;
//  }

}







