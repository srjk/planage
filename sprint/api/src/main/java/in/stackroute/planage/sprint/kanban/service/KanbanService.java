package in.stackroute.planage.sprint.kanban.service;

import in.stackroute.planage.sprint.kanban.model.SprintBoard;
import in.stackroute.planage.sprint.kanban.repository.KanbanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class KanbanService {

    @Autowired
    KanbanRepository kanbanRepository;

    public Optional<SprintBoard> getKanbanOfProduct(String productId) {
        return kanbanRepository.findByProductId(productId);
    }
    public SprintBoard addKanbanOfProduct(SprintBoard sprintBoard) {
        return kanbanRepository.save(sprintBoard);
    }
}
