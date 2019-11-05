package in.stackroute.planage.product.products.service.impl;

import in.stackroute.planage.product.Configuration.RabbitMqModel;
import in.stackroute.planage.product.Configuration.Receiver;
import in.stackroute.planage.product.Configuration.Sender;
import in.stackroute.planage.product.products.model.Products;
import in.stackroute.planage.product.products.model.Teams;
import in.stackroute.planage.product.products.repository.ProductsRepository;
import in.stackroute.planage.product.products.service.IProduct;
import in.stackroute.planage.product.users.model.Product;
import in.stackroute.planage.product.users.model.User;
import in.stackroute.planage.product.users.repository.UsersRepository;
import in.stackroute.planage.product.users.service.impl.UsersService;
import org.json.simple.JSONObject;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Service
public class ProductsService implements IProduct, Serializable {

@Autowired
private ProductsRepository productsRepository;

@Autowired
private UsersService usersService;

@Autowired
private RabbitTemplate rabbitTemplate;

@Autowired
private Sender sender;

@Autowired
private RabbitMqModel rabbitMqModel;

    private final Receiver receiver;
    public ProductsService(Receiver receiver, RabbitTemplate rabbitTemplate) {
        this.receiver = receiver;
        this.rabbitTemplate = rabbitTemplate;
    }



    //get products by id
    @Override
    public Products getProductsById(String id) {
        Products products = productsRepository.findByProductId(id);
        if(id == null){
            return null;
        }
        else
            return products;
    }

    @Override
    public Products addProducts(Products products) {
        Products productsObject = productsRepository.save(products);
      System.out.println("+++++++++"+productsObject);
      System.out.println(productsObject.getProductId());
      usersService.addProductToUser(productsObject.getProductManagerEmail(),productsObject);
      System.out.println("added to user");
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("productId",products.getProductId());
        jsonObject.put("productName",products.getProductName());
        sender.sendToQueue("product.productBacklog.add",rabbitMqModel.getProductExchange(),rabbitMqModel.getProductBacklogQueueRoutingKey(),jsonObject);
        sender.sendToQueue("product.productRoadmap.add",rabbitMqModel.getProductExchange(),rabbitMqModel.getProductRoadmapQueueRoutingKey(),jsonObject);

        return productsObject;

    }

    //add member to team
    @Override
    public Products updateTeam(Teams team, String id){
        System.out.println("update team function entered");
        boolean newUser = true;
        System.out.println(id);
        String email = team.getMemberEmail();
        System.out.println(email);
        Products products = productsRepository.findByProductId(id);
        List<Teams> teamsList1 = products.getTeams();
        System.out.println(teamsList1);
        if(teamsList1.isEmpty()){
            teamsList1 = new ArrayList<>();
            System.out.println("Team List" + products);
            teamsList1.add(team);
            products.setTeams(teamsList1);
            messagingToExchnage(products);
            System.out.println("((((&&&&&&&&_)"+productsRepository.save(products));
            return productsRepository.save(products);
        }
        else {
            System.out.println(teamsList1);
            for (Teams teams : teamsList1) {
                System.out.println(teams.getMemberEmail());
                if (teams.getMemberEmail().equals(email)) {
                    newUser = false;
                }
            }
            System.out.println("(((((((((((((((++++++++)))))))))" + newUser);
            if (!newUser) {
                System.out.println("Team List" + products);
                teamsList1.add(team);
                products.setTeams(teamsList1);
                messagingToExchnage(products);
                System.out.println("^^^^^^^^^" + productsRepository.save(products));
                return productsRepository.save(products);
            }
            System.out.println("Product added"+products);
            return products;

        }
    }

    @Override
    public List<Teams> getTeam(String id){
//        System.out.println(id);
        Products products = productsRepository.findByProductId(id);
//        System.out.println(products);
        List<Teams> teamsList = new ArrayList<>();
        teamsList = products.getTeams();
        return teamsList;
    }

    //delete member from team
    @Override
    public Products deleteTeam(String memberId, String id) {
        String userId=null;
        Products products = productsRepository.findByProductId(id);
        System.out.println("HI from products "+products);
        List<Teams> teamsList= new ArrayList<Teams>();
        teamsList = products.getTeams();
        int counter=0;
        for(Teams member: teamsList){
            if(member.getMemberId().equals(memberId)){
                userId = member.getUsersId();
                break;
            }
            counter++;
        }
        teamsList.remove(counter);
//        teamsList.remove(teamsList.removeIf( m -> m.getMember_name().equals(member_name)));
        System.out.println(teamsList);
        products.setTeams(teamsList);
        User user = usersService.deleteProductOfMember(id,userId);
        return productsRepository.save(products);
    }

    @Override
    public List<Products> getAllProducts(){
        List<Products> products = productsRepository.findAll();
        return products;
    }

    public List<Products> getProductOfUserByEmail(String email){
        List<Products> productsList = productsRepository.findByProductManagerEmail(email);
        System.out.println("++++++++++++**********************"+productsList);
        return productsList;
    }

    public void messagingToExchnage(Products products){
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("productId",products.getProductId());
        jsonObject.put("productName",products.getProductName());
        jsonObject.put("client",products.getClient());
        jsonObject.put("description",products.getDescription());
        jsonObject.put("deadline",products.getDeadline());
        jsonObject.put("userEmail",products.getProductManagerEmail());
        jsonObject.put("team",products.getTeams());
        sender.sendToQueue("app.sprint.product",rabbitMqModel.getProductExchange(),"app.sprint.product",jsonObject);
        System.out.println("Message sent to exchange");
    }


}
