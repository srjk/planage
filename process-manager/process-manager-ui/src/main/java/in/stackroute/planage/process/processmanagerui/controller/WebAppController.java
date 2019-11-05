package in.stackroute.planage.product.productmanagerui.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebAppController {

    @RequestMapping("/")
    public String getWebApp(){
        return "index.html";
    }
}
