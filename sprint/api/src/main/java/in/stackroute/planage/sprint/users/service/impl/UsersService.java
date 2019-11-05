package in.stackroute.planage.sprint.users.service.impl;

import in.stackroute.planage.sprint.sprintPlanning.model.Product;
import in.stackroute.planage.sprint.sprintPlanning.repository.ProductRepository;
import in.stackroute.planage.sprint.users.model.UserProduct;
import in.stackroute.planage.sprint.users.model.Users;
import in.stackroute.planage.sprint.users.repository.UsersRepository;
import in.stackroute.planage.sprint.users.service.IUser;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.function.Function;

@Service
public class UsersService implements IUser {

    @Value("${jwt.secret}")
    private String secret;

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Users> getAllUsers() {
        return usersRepository.findAll();
    }

    @Override
    public Users addUsers(String username, String email) {
        Users users = usersRepository.findByUserEmail(email);
        if (users == null){
            Users newUsers = new Users();
            newUsers.setUserName(username);
            newUsers.setUserEmail(email);
            return usersRepository.save(newUsers);
        } else {
            return usersRepository.findByUserEmail(email);
        }
    }

    public List<Product> getProductOfUser(String userEmail){
        List<Product> productList = productRepository.findByUserEmail(userEmail);
        return productList;
    }

    public Users addProductToUser(Product product,String userEmail){
        Users users = usersRepository.findByUserEmail(userEmail);
        List<UserProduct> userProductList = users.getProducts();
        UserProduct userProduct = new UserProduct();
        userProduct.setProductName(product.getProductName());
        userProductList.add(userProduct);
        users.setProducts(userProductList);
        return usersRepository.save(users);
    }


    public String generateToken(Users users) {
        Claims claims = Jwts.claims();
        claims.put("email", users.getUserEmail());
        claims.put("username", users.getUserName());

        String jwtToken = Jwts.builder().setClaims(claims)
                .setExpiration(new Date(System.currentTimeMillis() + 864_00_000)).signWith(SignatureAlgorithm.HS512, secret)
                .compact();
        return jwtToken;
    }

    public Boolean validateToken(String token, Users users) {
        final String username = getUsernameFromToken(token);
        return (username.equals(users.getUserName()) && !isTokenExpired(token));
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
    //for retrieveing any information from token we will need the secret key
    private Claims getAllClaimsFromToken(String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
    }

    //check if the token has expired
    private Boolean isTokenExpired(String token) {
        final Date expiration = getExpirationDateFromToken(token);
        return expiration.before(new Date());
    }
}
