package in.stackroute.planage.promanager.service;

import in.stackroute.planage.promanager.config.RabbitMQConfigModel;
import in.stackroute.planage.promanager.model.Participant;
import in.stackroute.planage.promanager.model.ParticipantTask;
import in.stackroute.planage.promanager.model.Rseponse;
import in.stackroute.planage.promanager.model.Task;
import in.stackroute.planage.promanager.repository.ParticipantRepository;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class ParticipantService {

  @Autowired
  RabbitMQConfigModel rabbitMQConfigModel;

  @Autowired
  ParticipantRepository participantRepository;

  @Autowired
  TaskService taskService;

  private Producer producer;

  public ParticipantService(Producer producer) {
    this.producer = producer;
  }


  public Participant addparticipant(Participant participant) {
    String programId = participant.getProgramId();
    List<ParticipantTask> tasklist = taskService.getTask(programId);
    participant.setTasks(tasklist);
//    producer.sendToQueue(rabbitMQConfigModel.getExchange(), rabbitMQConfigModel.getProgramToAssingeeRoutingKey(), tasklist);
    return participantRepository.save(participant);
  }

  public Participant addparticipate(Participant participant) {
    System.out.println(participant);
    Participant participant1= participantRepository.findByEmailAndProgramId(participant.getEmail(),participant.getProgramId());
    System.out.println(participant1);
    if(participant1!=null)
    {
      return participant;
  }else
    {
      return participantRepository.save(participant);
    }
  }

  public Participant setTaskStatus(String participantId, ParticipantTask task) {
    Participant participant = participantRepository.findById(participantId).orElse(null);
    List<ParticipantTask> tasks = participant.getTasks();
    for (ParticipantTask task1 : tasks) {
      if (task.getTaskId().equals(task1.getTaskId())) {
        task1.setStatus(task.isStatus());
      }
    }
    participant.setTasks(tasks);
    return participantRepository.save(participant);
  }

  public JSONObject getParticipantForList(String email, String programId) {
    DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
    Participant participant = participantRepository.findByEmailAndProgramId(email, programId);
    List<ParticipantTask> tasks = participant.getTasks();
    Set<String> dates = new HashSet<>();
    List<Rseponse> rseponseList = new ArrayList<>();
    if (tasks != null) {
      for (ParticipantTask task : tasks) {
        dates.add(dateFormat.format(task.getDueDate()));
      }
      List<String> array = new ArrayList<>(dates);
      Collections.sort(array);
      for (String date : array) {
        Rseponse rseponse = new Rseponse();
        rseponse.setDate(date);
        List<ParticipantTask> taskList = new ArrayList<>();
        for (ParticipantTask task : tasks) {
          if (date.equals(dateFormat.format(task.getDueDate()))) {
            taskList.add(task);
          }
          System.out.println(taskList);
          rseponse.setTasks(taskList);
          System.out.println(rseponse);
        }
        rseponseList.add(rseponse);
      }
    }
    JSONObject participantResponse = new JSONObject();
    participantResponse.put("id", participant.getId());
    participantResponse.put("name", participant.getName());
    participantResponse.put("email", participant.getEmail());
    participantResponse.put("productId", participant.getProductId());
    participantResponse.put("programId", participant.getProgramId());
    participantResponse.put("text", participant.getText());
    participantResponse.put("startDate", participant.getStartDate());
    participantResponse.put("endDate", participant.getEndDate());
    participantResponse.put("tasks", rseponseList);
    System.out.println(rseponseList);
    System.out.println(participantResponse);
    return participantResponse;
  }

  public List<Participant> getParticipantDetails(String email) {
    return participantRepository.findAllByEmail(email);
  }

  public Participant getParticipantProgram(String email, String programId) {
    return participantRepository.findByEmailAndProgramId(email, programId);
  }

  public List<Participant> addTaskToParticipant(Task task) {
    String programId = task.getProgramId();
    List<Participant> participantList = participantRepository.findAllByProgramId(programId);
    for ( Participant participant : participantList ) {
      List<ParticipantTask> participantTaskList = participant.getTasks();
      if (participantTaskList == null) {
        participantTaskList = new ArrayList<>();
      }
      ParticipantTask pt = new ParticipantTask();
      pt.setTaskId(task.getTaskId());
      pt.setTaskName(task.getTaskName());
      pt.setDueDate(task.getDueDate());
      participantTaskList.add(pt);
      participant.setTasks(participantTaskList);
      System.out.println("+++++++++++++task added++++++++++++++++++++++");
      participantRepository.save(participant);
    }
    return participantList;
  }

  public List<Participant> getProgramParticipant(String programId)
  {
    System.out.println(participantRepository.findByProgramId(programId));
    if(participantRepository.findByProgramId(programId)!=null){
    return  participantRepository.findByProgramId(programId);
  } else{
    return new ArrayList<>();}

}
}