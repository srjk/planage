package in.stackroute.planage.promanager.authentication.service;

import in.stackroute.planage.promanager.authentication.model.User;
import in.stackroute.planage.promanager.authentication.repository.UserRepository;
import in.stackroute.planage.promanager.model.ProductCalender;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.function.Function;

@Service
public class UserService {

  @Value("${jwt.secret}")
  private String secret;

  @Autowired
  private UserRepository usersRepository;
  public User addProductToUser(String email, ProductCalender product) {
    User user = usersRepository.findByEmail(email);
    String product1 = product.getId();
    List<String> productList = user.getProductNameList();
    System.out.println("+++++++++++++++++++here");
    if (productList == null) {
      System.out.println("+++++++++++++++++++++++null");
      List<String> p = new ArrayList<>();
      p.add(product1);
      user.setProductNameList(p);
    } else {
      System.out.println("+++++++++++++++++++++++not null");
      productList.add(product1);
      user.setProductNameList(productList);
    }
    return usersRepository.save(user);
  }

  public List<User> getAllUsers() {
    return usersRepository.findAll();
  }

  public User addUsers(String username, String email) {
    User users = usersRepository.findByEmail(email);
    if (users == null) {
      User newUsers = new User();
      newUsers.setText(username);
      newUsers.setEmail(email);
      newUsers.setUserRole("assignee");
      return usersRepository.save(newUsers);
    } else {
      return usersRepository.findByEmail(email);
    }
  }

  public String generateToken(User users) {
    Claims claims = Jwts.claims();
    claims.put("email", users.getEmail());
    claims.put("username", users.getText());
    String jwtToken = Jwts.builder().setClaims(claims)
            .setExpiration(new Date(System.currentTimeMillis() + 864_00_000)).signWith(SignatureAlgorithm.HS512, secret)
            .compact();
    return jwtToken;
  }

  public Boolean validateToken(String token, User users) {
    final String username = getUsernameFromToken(token);
    return (username.equals(users.getText()) && !isTokenExpired(token));
  }

  public String getUsernameFromToken(String token) {
    return getClaimFromToken(token, Claims::getSubject);
  }

  public Date getExpirationDateFromToken(String token) {
    return getClaimFromToken(token, Claims::getExpiration);
  }

  public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
    final Claims claims = getAllClaimsFromToken(token);
    return claimsResolver.apply(claims);
  }

  private Claims getAllClaimsFromToken(String token) {
    return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
  }

  private Boolean isTokenExpired(String token) {
    final Date expiration = getExpirationDateFromToken(token);
    return expiration.before(new Date());
  }

  public User getuser(String email) {
    return usersRepository.findByEmail(email);
  }

  public List<User> getAllUser() {
    return usersRepository.findAll();
  }

  public User saveUser(User user) {
    return usersRepository.save(user);
  }

  public User getUserByUserEmail(String userEmail) {
    User user = usersRepository.findByEmail(userEmail);
    return user;
  }

public  List<User> getAllUserByRole(){
    return usersRepository.findByUserRole("assignee");
}


}

