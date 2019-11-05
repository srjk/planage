package in.stackroute.planage.sprint.sprintPlanning.service;

import in.stackroute.planage.sprint.sprintPlanning.model.Product;
import in.stackroute.planage.sprint.sprintPlanning.model.Sprint;
import in.stackroute.planage.sprint.sprintPlanning.model.Task;
import in.stackroute.planage.sprint.sprintPlanning.model.Userstory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ISprint {

    public Sprint addSprint(Sprint sprint);

    public List<Userstory> getUserstory(String sprintId, String productId);

    public Sprint addUserstory(String productId, String sprintId, List<Userstory> userstory);

    // For Selected UserStory

    public Sprint selectedUserstory(String productId, String sprintId, List<Userstory> userstory);

    public List<Userstory> getSelectedUserstory(String sprintId, String productId);


    public Sprint deleteUserstory(String productId, String sprintId, String userstoryId);

    public Sprint addTasks(String productId, String sprintId, String userstoryId,String userstoryName,Task task);

    public Sprint deleteTask(String productId, String sprintId, String userstoryId, String taskId);

    public List<Sprint> getAllSprintsOfProduct(String ProductId, Pageable pageable);

    public Product addProduct(Product product);

    public List<Product> getAllProduct();




    }
