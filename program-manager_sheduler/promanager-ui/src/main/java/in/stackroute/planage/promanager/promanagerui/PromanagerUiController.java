package in.stackroute.planage.promanager.promanagerui;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
@RequestMapping("/")
public class PromanagerUiController {

  public String redirect()
  {
    System.out.println("in controller");
    return "index.html";
  }
}
