package in.stackroute.planage.product.users.service.impl;


import in.stackroute.planage.product.backlog.repository.ProductRepository;
import in.stackroute.planage.product.exception.ProductNotFoundException;
import in.stackroute.planage.product.products.model.Products;
import in.stackroute.planage.product.products.repository.ProductsRepository;
import in.stackroute.planage.product.users.model.Product;
import in.stackroute.planage.product.users.model.User;
import in.stackroute.planage.product.users.repository.UsersRepository;
import org.springframework.stereotype.Service;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class UserManager {
  @Autowired
  private UsersRepository userRepository;
  @Autowired
  private ProductsRepository productsRepository;

  @Autowired
  private UsersService usersService;

  @Value("${jwt.secret}")
  private String jwtSecret;
  @Value("${jwt.email.secret}")
  private String emailSecretKet;

  public User saveUser(String userName, String userEmail) {
    User user = userRepository.findByUserEmail(userEmail);
    if(user == null){
      User userData = new User();
      userData.setUserEmail(userEmail);
      userData.setUserName(userName);
     User user1 = userRepository.save(userData);
     return userRepository.save(user1);
    }else {
      return user;
    }
  }

    public String generateJwtToken(String userEmail) {
    Claims claims = Jwts.claims();
    claims.put("email", userEmail);
    String token  =  Jwts.builder().setClaims(claims)
            .setExpiration(new Date(System.currentTimeMillis()+864_00_000)).signWith(SignatureAlgorithm.HS256, jwtSecret)
            .compact();
    return token;
  }


  public String onVerifyEmail(String token, String productId){
    try {
      Claims claims = Jwts.parser().setSigningKey(emailSecretKet).parseClaimsJws(token).getBody();
      String googleStateURL;
      if(claims.get("userId") != null) {
        googleStateURL = productId + '.' + claims.get("userId");
        System.out.println(googleStateURL);
      }else{
        googleStateURL = productId;
      }
      System.out.println("&&&&&&&&&&"+googleStateURL);
      // user api internally calls login api on google console
      //
      return googleStateURL;
    }catch(Exception e){
      throw new ProductNotFoundException("UnAuthorized email token");
    }
  }

  public boolean checkForExistingUser(String productId, String userId) {
    boolean isUserExist = false;
    System.out.println("Checking for user existance");
    System.out.println(Optional.ofNullable(userRepository.findById(userId)).isPresent());
    if (Optional.ofNullable(userRepository.findById(userId)).isPresent()) {
//      usersService.addProductToUser(userRepository.findById(userId).get().getUserEmail(),productsRepository.findByProductId(productId));
      isUserExist = true;
    }
    System.out.println("user exists ?  "+isUserExist);
    return isUserExist;
  }

}

