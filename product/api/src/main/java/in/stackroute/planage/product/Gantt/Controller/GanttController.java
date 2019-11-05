package in.stackroute.planage.product.Gantt.Controller;

import in.stackroute.planage.product.Gantt.Model.Gantt;
import in.stackroute.planage.product.Gantt.Service.impl.GanttService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1")
public class GanttController {

    @Autowired
    GanttService ganttService;

    @GetMapping(path="/productRoadMap/{id}")
    public ResponseEntity<Gantt> getGanttData(@PathVariable String id) {
        Gantt gantt = ganttService.getGanttData(id);
        return new ResponseEntity<>(gantt, HttpStatus.OK);
    }

}
