package in.stackroute.planage.product.productmanagerui.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebAppController {

   @RequestMapping("/")
   public String getWebApp(){
       System.out.println("++++++++++++++++++++++++++++++in the webapp get request");
       return "index.html";
   }
}
