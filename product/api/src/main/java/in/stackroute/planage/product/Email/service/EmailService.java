package in.stackroute.planage.product.Email.service;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Date;
import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;

import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.JWT;
import in.stackroute.planage.product.Email.dto.MailRequest;
import in.stackroute.planage.product.Email.dto.MailResponse;
import in.stackroute.planage.product.products.model.Teams;
import in.stackroute.planage.product.users.model.User;
import in.stackroute.planage.product.users.service.impl.UsersService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;


import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;

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
			System.out.println("team name:++++"+request.getTeamName());
			model.put("teamName",request.getTeamName());
			if(request.getMemberName()!=null){
				model.put("memberName", request.getMemberName());
			}
			else {
				model.put("memberName", "");
			}
			Template t = config.getTemplate("email-template.ftl");
			String html = FreeMarkerTemplateUtils.processTemplateIntoString(t, model);
			helper.setTo(request.getMemberEmail());
			helper.setText(html, true);
			helper.setFrom("planageproject@gmail.com");
			System.out.println(request.getSubject());
			helper.setSubject(request.getSubject());
			sender.send(message);
			response.setMessage("mail send to : " + request.getMemberEmail());
			response.setStatus(Boolean.TRUE);
		} catch (MessagingException | IOException | TemplateException e) {
			response.setMessage("Mail Sending failure : "+e.getMessage());
			response.setStatus(Boolean.FALSE);
		}
		return response;
	}















}
