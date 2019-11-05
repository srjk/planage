package in.stackroute.planage.promanager.controller;

import in.stackroute.planage.promanager.model.Participant;
import in.stackroute.planage.promanager.model.ParticipantTask;
import in.stackroute.planage.promanager.service.ParticipantService;
import in.stackroute.planage.promanager.repository.ParticipantRepository;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class ParticipantController {
  @Autowired
  ParticipantService participantService;

  @PostMapping("/participant")
  public ResponseEntity<Participant> addparticipate(@RequestBody Participant participant)
  {
    System.out.println("this is the post api call");
    System.out.println(participant);
    return ResponseEntity.ok( participantService.addparticipate(participant));
  }

  @GetMapping("/participant/{email}/program/{programId}")
public ResponseEntity<?> getParticipantsPrograms(@PathVariable("email") String email, @PathVariable("programId") String programId,@RequestParam String calendar) {
    if (calendar.equals("true")) {
      System.out.println("inside true block");
      return ResponseEntity.ok(participantService.getParticipantProgram(email, programId));
    } else {
      System.out.println("inside else block");
      return ResponseEntity.ok(participantService.getParticipantForList(email, programId));
    }
  }
  @PostMapping("/participant/{participantId}/tasks")
  public ResponseEntity<Participant> setTaskStatus(@PathVariable("participantId") String participantId , @RequestBody ParticipantTask task)
  {
    System.out.println(participantId);
    System.out.println(task);
  return ResponseEntity.ok(participantService.setTaskStatus(participantId,task));
  }

  //
  @GetMapping("/participant/{email}")
  public ResponseEntity<?> getParticipate(@PathVariable("email") String email){
    return ResponseEntity.ok(participantService.getParticipantDetails(email));
  }
@GetMapping("/program/{programId}/participant")
public ResponseEntity<?> getProgramParticipant(@PathVariable("programId") String programId){
  System.out.println(programId);
  return ResponseEntity.ok(participantService.getProgramParticipant(programId));
}
}
