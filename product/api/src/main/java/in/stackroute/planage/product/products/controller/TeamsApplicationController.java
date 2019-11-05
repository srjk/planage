package in.stackroute.planage.product.products.controller;

import in.stackroute.planage.product.products.service.impl.TeamsService;
import in.stackroute.planage.product.products.model.Teams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class TeamsApplicationController {
    @Autowired
    private TeamsService teamsService;

    HashMap<String,Object> responseObject;

    @GetMapping(path = "/teams")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<HashMap<String, Object>> getTeams() {
        List<Teams> teams = teamsService.getTeams();
        responseObject = new HashMap<>();
        responseObject.put("result", teams);
        responseObject.put("msg", "Success!");
        responseObject.put("error", "false");
        return new ResponseEntity<>(responseObject, HttpStatus.OK);
    }

    @PostMapping(value= "/teams/add")
    public ResponseEntity<HashMap<String,Object>> addTeamMember(@RequestBody Teams teams){
        Teams teams1 = teamsService.addTeamMember(teams);
        responseObject.put("result", teams1);
        responseObject.put("msg","Success!");
        responseObject.put("error", "False");
        return new ResponseEntity<>(responseObject, HttpStatus.OK);
    }

    @DeleteMapping(path="/delete/{id}")
    public ResponseEntity<HashMap<String,Object>> deleteTeamMember(@PathVariable int id){
        teamsService.deleteTeamMember(id);
        return new ResponseEntity<>(responseObject,HttpStatus.OK);
    }
}
