package in.stackroute.planage.promanager.service;

import in.stackroute.planage.promanager.model.Session;
import in.stackroute.planage.promanager.repository.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SessionService {

  @Autowired
  SessionRepository sessionRepository;

    //Listing All Session
    public List<Session> findAllSession(String programId) {
        return sessionRepository.findAllByProgramId(programId);
    }


  public Session findTaskById(String id) {
    return sessionRepository.findById(id).orElse(null);
  }

  // Saving the Session
  public Session saveSession(Session session) {

    return sessionRepository.save(session);
  }

  // Deleting session
  public boolean deleteBySessionId(String sessionId) {
    sessionRepository.deleteById(sessionId);
    return true;
  }

  //Updating the Session
  public Session updateSession(Session session) {

    Session sessionOne = (Session) sessionRepository.findById(session.getId()).get();
    sessionOne.setText(session.getText());
    sessionOne.setStartDate(session.getStartDate());
    sessionOne.setEndDate(session.getEndDate());
    return (Session) sessionRepository.save(sessionOne);

  }
}

