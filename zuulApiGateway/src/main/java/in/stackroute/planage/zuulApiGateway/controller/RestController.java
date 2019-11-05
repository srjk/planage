package in.stackroute.planage.zuulApiGateway.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RestController {

        @GetMapping("/scheduler")
            private String redirectToProgram() {
            return "forward:scheduler";
        }
        @GetMapping("/agile")
            private String redirectToAdminUI(ModelMap model) {
            return "forward:agile";
        }
        @GetMapping("/scrum")
            private String redirectToProduct(ModelMap model) {
            return "forward:scrum";
        }
        @GetMapping("/process")
            private String redirectToProducts(ModelMap model) {
            return "forward:process";
        }
}