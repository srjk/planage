package in.stackroute.planage.product.users.service.impl;

import in.stackroute.planage.product.Configuration.RabbitMqModel;
import in.stackroute.planage.product.Configuration.Sender;
import in.stackroute.planage.product.products.model.Products;
import in.stackroute.planage.product.products.model.Teams;
import in.stackroute.planage.product.users.model.Product;
import in.stackroute.planage.product.users.model.User;
import in.stackroute.planage.product.users.repository.UsersRepository;
import in.stackroute.planage.product.users.service.IUser;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.*;
import java.util.function.Function;

@Service
public class UsersService implements IUser {

    @Value("${jwt.secret}")
    private String secret;

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private Sender sender;

    @Autowired
    private RabbitMqModel rabbitMqModel;

    @Override
    public List<User> getAllUsers() {
        return usersRepository.findAll();
    }

    public User deleteProductOfMember(String productId, String userId){
        User user = usersRepository.findById(userId).get();
        if(user!=null){
            List<Product> productList = user.getProductList();
            int counter=0;
            for(Product product: productList){
                if(product.getProductId().equals(productId)){
                    break;
                }
                counter++;
            }
            productList.remove(counter);
            user.setProductList(productList);
            return usersRepository.save(user);
        }
        else {
            return user;
        }
    }

    public User getUserByUserEmail(String userEmail){
        User user = usersRepository.findByUserEmail(userEmail);
        if(user!=null) {
            return user;
        }
        return null;
    }

//    public List<Product> getProductOfUser(String userEmail){
//        User user = usersRepository.findByUserEmail(userEmail);
//        List<Product> productList = user.getProductList();
//        System.out.println("******************************************************************    "+productList);
//        return productList;
//    }

    public User addProductToUser(String email, Products product){
        System.out.println("addProductTo user method entered and email is++++++++"+email);
        System.out.println(product);
        boolean isExistProduct = false;
        User user = usersRepository.findByUserEmail(email);
        System.out.println("**********"+user);
        Product product1 = new Product();
        List<Product> productList = user.getProductList();
        System.out.println("Product List"+productList);
        String productId = product.getProductId();
        System.out.println("productID"+productId);
//        System.out.println(productList.isEmpty());
        if(productList!=null) {
           for(Product product2: productList ){
              System.out.println(product2);
              if(product2.getProductId().equals(productId)){
                 System.out.println("products"+ product2);
                 isExistProduct = true;
              }
           }
           System.out.println("Product exists ?"+isExistProduct);
           if(!isExistProduct) {
              System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++" + product.getProductName());
//              product1.setProductName(product.getProductName());
//              product1.setProductId(product.getProductId());
//              product1.setClient(product.getClient());
              productList.add(new Product(product.getProductName(),product.getProductId(),product.getClient()));
              user.setProductList(productList);
              System.out.println(user);
              return usersRepository.save(user);
           }
           else {
              return user;
           }
        }
        else {
            List<Product> productLists = new ArrayList<>();
            System.out.println("----" + product.getProductName());
            System.out.println("_____" + product.getClient());
            product1.setProductName(product.getProductName());
            product1.setProductId(productId);
            product1.setClient(product.getClient());
            System.out.println(product1);
            productLists.add(product1);
            System.out.println(productLists);
//        productList.add(new Product(product.getProductName(),product.getProductId(),product.getClient()));
            user.setProductList(productLists);
            System.out.println(user);
            User user1 = usersRepository.save(user);
            System.out.println(user1);
            return user1;
        }
    }

    @Override
    public User addUsers(String username, String email) {
        User users = usersRepository.findByUserEmail(email);
        if (users == null){
            User newUsers = new User();
            newUsers.setUserName(username);
            newUsers.setUserEmail(email);
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("userName",newUsers.getUserName());
            jsonObject.put("userEmail",newUsers.getUserEmail());
            jsonObject.put("userId",newUsers.getId());
//            sender.sendToQueue("user.added",rabbitMqModel.getSendUserExchange(),rabbitMqModel.getSendUserExchange(),jsonObject);
            newUsers = usersRepository.save(newUsers);
            return newUsers;
        } else {
            return usersRepository.findByUserEmail(email);
        }
    }

    public List<Product> getProductOfUser(String email){
        User user = usersRepository.findByUserEmail(email);
        if(user!=null) {
            List<Product> productList = user.getProductList();
            return productList;
        }
        return new ArrayList<>();
    }
}
