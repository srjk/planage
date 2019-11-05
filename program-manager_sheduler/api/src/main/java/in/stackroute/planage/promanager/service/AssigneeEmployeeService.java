package in.stackroute.planage.promanager.service;

import java.util.List;

import in.stackroute.planage.promanager.model.Assignee;
import in.stackroute.planage.promanager.repository.AssigneeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AssigneeEmployeeService {

  @Autowired
  AssigneeRepository assigneeEmployeeRepository;

  public List<Assignee> getEmployee(String email) {
    return assigneeEmployeeRepository.findAllByEmail(email);
  }

  public List<Assignee> getAllEmployee() {
    return assigneeEmployeeRepository.findAll();
  }

  public Assignee saveAssignee(Assignee assignee) {
    return assigneeEmployeeRepository.save(assignee);
  }

  public boolean deleteAssignees(Assignee assignee) {
    assigneeEmployeeRepository.deleteByEmailAndProgramId(assignee.getEmail(), assignee.getProgramId());
    return true;
  }

}
