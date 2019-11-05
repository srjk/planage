package in.stackroute.planage.product.products.service.impl;

import in.stackroute.planage.product.products.model.Products;
import in.stackroute.planage.product.products.model.Teams;
import in.stackroute.planage.product.products.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {
    private JavaMailSender javaMailSender;

    @Autowired
    public NotificationService(JavaMailSender javaMailSender){
        this.javaMailSender = javaMailSender;
    }
    @Autowired
    private ProductsRepository productsRepository;

    public void sendNotification(String id, Teams teams) throws MailException {
        //send email
        Products products = productsRepository.findByProductId(id);
        String userId = teams.getUsersId();
        SimpleMailMessage mail = new SimpleMailMessage();
//        if(userId!=null) {
            mail.setTo(teams.getMemberEmail());
            mail.setFrom("planageproduct@gmail.com");
            mail.setSubject("Welcome to planage");
            mail.setText("u have been added to " + products.getProductName());

            System.out.println("mail notification sent");
            javaMailSender.send(mail);
//        }
    }

}
