package in.stackroute.planage.process.service.SMTP;

import freemarker.template.Configuration;
import in.stackroute.planage.process.model.mailModel.MailRequest;
import in.stackroute.planage.process.model.mailModel.MailResponse;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import freemarker.template.Template;
import freemarker.template.TemplateException;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

@Service
public class EmailService {

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
      claims.put("subscriberEmail", request.getTo());
      if(request.getSubscriberId()!= null){
        claims.put("subscriberId", request.getSubscriberId());
      }

      String token  =  Jwts.builder().setClaims(claims)
              .setExpiration(new Date(System.currentTimeMillis()+864_00_000)).signWith(SignatureAlgorithm.HS256, emailSecretKey)
              .compact();

      model.put("emailToken", token);

      Template t = config.getTemplate("email.ftl");
      String html = FreeMarkerTemplateUtils.processTemplateIntoString(t, model);

      helper.setTo(request.getTo());
      helper.setText(html, true);
      helper.setFrom("planageproject@gmail.com");
      helper.setSubject("Invitation link");
      sender.send(message);

      response.setMessage("mail send to : " + request.getTo());
      response.setStatus(Boolean.TRUE);

    } catch (MessagingException | IOException | TemplateException e) {
      response.setMessage("Mail Sending failure : "+e.getMessage());
      response.setStatus(Boolean.FALSE);
    }

    return response;
  }
}
