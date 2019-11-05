package in.stackroute.planage.sprint.statistics.Controller;

import in.stackroute.planage.sprint.kanban.model.SprintBoard;
import in.stackroute.planage.sprint.statistics.model.*;
//import in.stackroute.planage.sprint.statistics.service.ILeaderBoard;
//import in.stackroute.planage.sprint.statistics.service.IStatistics;
import in.stackroute.planage.sprint.statistics.service.ILeaderBoard;
import in.stackroute.planage.sprint.statistics.service.IStatistics;
import in.stackroute.planage.sprint.statistics.service.IVelocityChart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class StatisticsController {

    HashMap<String, Object> responseObject;
   @Autowired
   private IStatistics statisticsService;
    @Autowired
    private IVelocityChart velocityChartService;
    @Autowired
    private ILeaderBoard leaderBoardService;


//GET SPRINTSBOARD DATA
//    @GetMapping("/sprintboard")
//    public ResponseEntity<HashMap<String, Object>> retrievesprintboard() {
//
//        List<SprintsBoard> sprints = statisticsService.getAllList();
//        // SprintBoard sprints =velocityChartService.getKanbanBoardData();
//        //leaderBoardService.getBoardData();
//        responseObject = new HashMap<>();
//        responseObject.put("result", sprints);
//        responseObject.put("msg", "Success!");
//        return new ResponseEntity<>(responseObject, HttpStatus.OK);
//    }


//GET for burndownchart!!
//    @GetMapping("/products/{productId}/sprints/{sprintId}/burndownchart")
//    public ResponseEntity<HashMap<String, Object>> retrieveChartsByProductIdAndSprintId(@PathVariable String productId, @PathVariable String sprintId) {
//        BurnDownChart burnDownChart = statisticsService.getDataForCharts(productId, sprintId);
//        System.out.println("burnDownChart is+" + burnDownChart);
//        responseObject = new HashMap<>();
//        responseObject.put("result", burnDownChart);
//        responseObject.put("msg", "Success!");
//        return new ResponseEntity<>(responseObject, HttpStatus.OK);
//
//    }

//   UPDATE for burn down
//    @PutMapping("/products/{productId}/donelist")
//    public ResponseEntity<HashMap<String, Object>> enterValuesToBurnDownChart(@PathVariable String productId, @RequestBody TaskCompletion taskCompletion) {
//        responseObject = new HashMap<>();
//        BurnDownChart updateList = statisticsService.updateChart(productId, taskCompletion);
//        responseObject.put("result", updateList);
//        responseObject.put("msg", "Success!");
//        responseObject.put("error", "false");
//        return new ResponseEntity<>(responseObject, HttpStatus.OK);
//    }


    //GetMapping for all three charts
    @GetMapping("/products/{productId}/statistics")
    public ResponseEntity<HashMap<String, Object>> retrieveChartsByProductID(@PathVariable String productId, @RequestParam(required = false) String sprintId) {
//        if (sprintId == null) {
//            sprintId = "1";
//            System.out.println(sprintId);
//        }
//        else{
//            sprintId = sprintId;
//            System.out.println(sprintId);
//        }
        VelocityChart velocityChart = velocityChartService.getProductById(productId);
        LeaderBoard leaderBoard = leaderBoardService.getDataForLeaderBoard(productId, sprintId);
        BurnDownChart burnDownChart = statisticsService.getDataForCharts(productId, sprintId);

        Map<String, Object> result = new HashMap<String, Object>();
        result.put("velocityChart", velocityChart);
        result.put("leaderBoard", leaderBoard);
        result.put("burnDownChart", burnDownChart);
        responseObject = new HashMap<>();
        responseObject.put("result", result);
        responseObject.put("msg", "Success!");
        return new ResponseEntity<>(responseObject, HttpStatus.OK);
    }
// Update Velocity Chart
//    @PutMapping("/products/{productId}/sprint")
//    public ResponseEntity<HashMap<String, Object>> enterValuesToChart(@PathVariable String productId, @RequestBody SprintStats sprintStats) {
//        responseObject = new HashMap<>();
//        VelocityChart updateSprint = velocityChartService.updateProductById(productId, sprintStats);
//        responseObject.put("result", updateSprint);
//        responseObject.put("msg", "Success!");
//        responseObject.put("error", "false");
//        return new ResponseEntity<>(responseObject, HttpStatus.OK);
//    }

}


