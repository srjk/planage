package in.stackroute.planage.promanager.controller;

import in.stackroute.planage.promanager.model.Session;
import in.stackroute.planage.promanager.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class SessionController {

    @Autowired
    SessionService sessionService;

    @GetMapping("/sessions/{programId}")
    public ResponseEntity<List<Session>> getAllTasks(@PathVariable("programId") String programId) {
        return ResponseEntity.ok(sessionService.findAllSession(programId));
    }

    @PostMapping("/sessions")
    public ResponseEntity<Session> createSession(@RequestBody Session session) {
        return ResponseEntity.ok(sessionService.saveSession(session));
    }

    @DeleteMapping("/sessions/{sessionId}")
    public ResponseEntity<?> deleteSession(@PathVariable String sessionId) {
        return ResponseEntity.ok(sessionService.deleteBySessionId(sessionId));
    }

    @PutMapping("/sessions")
    public ResponseEntity<Session> updateSession(@RequestBody Session session) {

        return ResponseEntity.ok(sessionService.updateSession(session));
    }
}

