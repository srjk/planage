package in.stackroute.planage.sprint.agile.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@CrossOrigin("*")
public class AgileController {

    @GetMapping("/")
    public String getWebApp() {
        System.out.println("***UI controller call");
        return "index.html";
    }
}
