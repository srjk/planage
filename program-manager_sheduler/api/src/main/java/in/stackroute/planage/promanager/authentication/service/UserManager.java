package in.stackroute.planage.promanager.authentication.service;

import in.stackroute.planage.promanager.authentication.model.User;
import in.stackroute.planage.promanager.authentication.repository.UserRepository;
import in.stackroute.planage.promanager.exception.ProductNotFound;
import in.stackroute.planage.promanager.model.ProductCalender;
import in.stackroute.planage.promanager.repository.ProductCalenderRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class UserManager {
  @Autowired
  private UserRepository userRepository;
  @Autowired
  private ProductCalenderRepository productsRepository;

  @Value("${jwt.secret}")
  private String jwtSecret;
  @Value("${jwt.email.secret}")
  private String emailSecretKet;

  public User saveUser(String userName, String userEmail) {
    User user = userRepository.findByEmail(userEmail);
    if (user == null) {
      User userData = new User();
      userData.setEmail(userEmail);
      userData.setText(userName);
      userData.setUserRole("assignee");
      User user1 = userRepository.save(userData);
      return userRepository.save(user1);
    } else {
      return user;
    }
  }

  public String generateJwtToken(String userEmail) {
    Claims claims = Jwts.claims();
    claims.put("email", userEmail);
    String token = Jwts.builder().setClaims(claims)
            .setExpiration(new Date(System.currentTimeMillis() + 864_00_000)).signWith(SignatureAlgorithm.HS256, jwtSecret)
            .compact();
    return token;
  }

  public String onVerifyEmail(String token, String productId) {
    try {
      Claims claims = Jwts.parser().setSigningKey(emailSecretKet).parseClaimsJws(token).getBody();
      String googleStateURL;
      if (claims.get("userId") != null) {
        googleStateURL = productId + '.' + claims.get("userId") + '.' + claims.get("userRole");
      } else {
        googleStateURL = productId;
      }
      return googleStateURL;
    } catch (Exception e) {
      throw new ProductNotFound("UnAuthorized email token");
    }
  }

  public boolean checkForExistingUser(String productId, String userId) {
    boolean isUserExist = false;
    System.out.println("inside check for user");
    if (Optional.ofNullable(userRepository.findById(userId)).isPresent()) {
      ProductCalender product = productsRepository.findById(productId).orElse(null);
      ProductCalender product1 = new ProductCalender();
      product1.setProductName(product.getProductName());
      User user = userRepository.findById(userId).get();
      List<String> productList = user.getProductNameList();
      productList.add(product1.getProductName());
      user.setProductNameList(productList);
      isUserExist = true;
    }
    return isUserExist;
  }

}
