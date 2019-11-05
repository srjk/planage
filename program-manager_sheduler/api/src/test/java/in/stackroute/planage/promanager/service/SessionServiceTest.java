package in.stackroute.planage.promanager.service;

import in.stackroute.planage.promanager.model.Session;
import in.stackroute.planage.promanager.repository.SessionRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.when;
import static org.junit.Assert.assertEquals;

@RunWith(MockitoJUnitRunner.class)
public class SessionServiceTest {
  @InjectMocks
  SessionService sessionService;
  @Mock
  SessionRepository sessionRepository;

  @Before
  public void setUp() throws Exception {
    MockitoAnnotations.initMocks(this);
  }

  @Test
  public void findAllSession() {
    Date date = new Date();
    Session sessionOne = new Session("1","1","html",date,date);
    Session sessionTwo = new Session("2","1","css",date,date);
    Session sessionThree = new Session("3","1","javascript",date,date);
    List<Session> sessionList = new ArrayList<>();
    sessionList.add(sessionOne);
    sessionList.add(sessionTwo);
    sessionList.add(sessionThree);
    when(sessionRepository.findAllByProgramId("1")).thenReturn(sessionList);
    List<Session> sessionListTwo= sessionService.findAllSession("1");
    assertEquals(3,sessionListTwo.size());

    verify(sessionRepository,times(1)).findAllByProgramId("1");
  }

  @Test
  public void findTaskById() {
    Date date = new Date();
    Session sessionOne = new Session("1","1","html",date,date);
    when(sessionRepository.findById("1")).thenReturn(Optional.of(sessionOne));
    Session session = sessionService.findTaskById("1");
    assertEquals(sessionOne,session);
     session = sessionService.findTaskById("2");
    assertEquals(null,session);

  }

  @Test
  public void saveSession() {
    Date date = new Date();
    Session sessionOne = new Session("1","1","html",date,date);
    when(sessionRepository.save(sessionOne)).thenReturn(sessionOne);
    Session session = sessionService.saveSession(sessionOne);
    assertEquals(sessionOne,session);
    verify(sessionRepository,times(1)).save(session);

  }

}