package in.stackroute.planage.sprint.kanban.service;

import in.stackroute.planage.sprint.configuration.Receiver;
import in.stackroute.planage.sprint.kanban.model.Column;
import in.stackroute.planage.sprint.kanban.model.FreezeSprint;
import in.stackroute.planage.sprint.kanban.model.SprintBoard;
import in.stackroute.planage.sprint.kanban.model.Task;
import in.stackroute.planage.sprint.kanban.repository.FreezeSprintRepository;
import in.stackroute.planage.sprint.kanban.repository.SprintBoardRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Service
public class SprintBoardService implements ISprintBoard {
    @Autowired
    SprintBoardRepository sprintBoardRepository;

    @Autowired
    FreezeSprintRepository freezeSprintRepository;

    private static final Logger log = LoggerFactory.getLogger(SprintBoard.class);

    private final RabbitTemplate rabbitTemplate;

    public SprintBoardService( RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    public List<SprintBoard> getAllData() {
        return sprintBoardRepository.findAll();
    }

    //Current sprint data

    public SprintBoard getDataOfProduct(String productId) {
        return sprintBoardRepository.findByProductId(productId).get();
    } // data of the product

    public SprintBoard addSprint(SprintBoard sprintBoard) {
        return sprintBoardRepository.save(sprintBoard);
    }

    public SprintBoard getSprintData(String sprintId, String productId) {
        return sprintBoardRepository.findBySprintIdAndProductId(sprintId, productId);
    } //data for any previous sprint board


    public SprintBoard updateSprintBoard(String sprintId, String productId, Column column) {
        SprintBoard sprintBoardData = sprintBoardRepository.findBySprintIdAndProductId(sprintId, productId);
        sprintBoardData.getColumns().add(column);
        return sprintBoardRepository.save(sprintBoardData);
    }


    @Override
    public SprintBoard createBacklog(String productId, String sprintId, Task task, String sprintName) {
        log.info("this is the updtae sprint" + productId);
        log.info("this is the updtae sprint" + sprintId);
//        System.out.println("this is the updtae sprint" + userstoryId);
        log.info("this is the updtae sprint" + task);
        System.out.println(sprintId+ "::::" + productId);
        System.out.println("\n\n\n\n\n\n\n");
        System.out.println(productId + "    " + sprintId);

        SprintBoard sprintBoard = sprintBoardRepository.findByProductId(productId).get();
        System.out.println(sprintBoard);
        System.out.println("\n\n\n\n\n\n");
        if ((sprintBoard.getColumns()).size() == 0) {
//            SprintBoard sprintBoard1 = new SprintBoard();
            sprintBoard.setSprintId(sprintId);
            sprintBoard.setProductId(productId);
            sprintBoard.setStatus("live");
            sprintBoard.setStartDate(new Date());
            sprintBoard.setSprintName(sprintName);
            int lastActiveSprint = sprintBoard.getLastActiveSprint();
            lastActiveSprint++;
            sprintBoard.setLastActiveSprint(lastActiveSprint);
            Column column = new Column();
            column.setColumnName("Backlog");
            List<Task> taskList = new ArrayList<>();
            taskList.add(task);
            column.setTasks(taskList);
            sprintBoard.setColumns(Arrays.asList(column));
            sprintBoard = sprintBoard;
        } else {
            List<Column> columnList = sprintBoard.getColumns();
            for (Column column : columnList) {
                if (column.getColumnName().equals("Backlog")) {
                    List<Task> taskList = column.getTasks();
                    taskList.add(task);
                    column.setTasks(taskList);
                }
                sprintBoard.setColumns(columnList);
            }
        }
        sprintBoard.setTotalTaskCount(sprintBoard.getTotalTaskCount()+1);
        switch (task.getTaskCategory()) {
            case "Must" :
                sprintBoard.setTotalMustTask(sprintBoard.getTotalMustTask()+1);
                break;
            case "Try" :
                sprintBoard.setTotalTryTask(sprintBoard.getTotalTryTask()+1);
                break;
            case "Stretch" :
                sprintBoard.setTotalStretchTask(sprintBoard.getTotalStretchTask()+1);
        }
         return sprintBoardRepository.save(sprintBoard);
    }


//        public SprintBoard updateSprintColumn(String sprintId, String productId, Column column) {
//                SprintBoard sprintBoardData = sprintBoardRepository.findBySprintIdAndProductId(sprintId, productId);
//                List<Column> list = sprintBoardData.getColumn();
//                list.add(column);
//                sprintBoardData.setColumn(list);
//                return sprintBoardRepository.save(sprintBoardData);
//
//            }


    @Override
    public SprintBoard deleteSprintColumn(String productId, String sprintId, String id) {
        System.out.println("hi from service");
        System.out.println(sprintBoardRepository.findBySprintIdAndProductId(sprintId, productId));
        SprintBoard sprintBoard1 = sprintBoardRepository.findBySprintIdAndProductId(sprintId, productId);
        int counter = 0;
        for (Column column : sprintBoard1.getColumns()) {
            if (column.getColumnId().equals(id)) {
                break;
            }
            counter++;
        }
        List<Column> listOfColumns = sprintBoard1.getColumns();
        listOfColumns.remove(counter);
        sprintBoard1.setColumns(listOfColumns);
        return sprintBoardRepository.save(sprintBoard1);
    }
//Delete Sprint!!!
//    @Override
//    public void deleteSprintBoard(String productId, String sprintId) {
//        SprintBoard sprintBoard = sprintBoardRepository.findBySprintIdAndProductId(productId, sprintId);
//        SprintBoard updatedSprint = sprintBoardRepository.save(sprintBoard);
//       // System.out.println("vkjllkj"+updatedSprint);
//        rabbitTemplate.convertAndSend("DirectExchange", "sprintStats", updatedSprint);
//        sprintBoardRepository.deleteByProductIdAndSprintId(productId, sprintId);


    // }

    @Override
    public FreezeSprint addToFreezeSprint(FreezeSprint freezeSprint) {
        FreezeSprint savedFreezedSprint = freezeSprintRepository.save(freezeSprint);
        rabbitTemplate.convertAndSend("DirectExchange", "sprintStats", freezeSprint);

        return savedFreezedSprint;
    }

//    @Override
//    public FreezeSprint addToFreezeSprint(String productId, String sprintId, SprintBoard sprintBoard) {
////        FreezeSprint freezeSprint = freezeSprintRepository.findByProductIdAndSprintId(productId,sprintId);
//        return freezeSprintRepository.save(sprintBoard);
//    }


}