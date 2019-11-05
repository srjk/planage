package in.stackroute.planage.sprint.statistics.service.Impl;

import in.stackroute.planage.sprint.configuration.Receiver;
import in.stackroute.planage.sprint.kanban.model.Column;
import in.stackroute.planage.sprint.kanban.model.FreezeSprint;
import in.stackroute.planage.sprint.kanban.model.Task;
import in.stackroute.planage.sprint.statistics.Repository.LeaderBoardRepository;
import in.stackroute.planage.sprint.statistics.model.BurnDownChart;
import in.stackroute.planage.sprint.statistics.model.LeaderBoard;
import in.stackroute.planage.sprint.statistics.model.TeamMember;
import in.stackroute.planage.sprint.statistics.service.ILeaderBoard;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class LeaderboardService implements ILeaderBoard {

    @Autowired
    private LeaderBoardRepository leaderBoardRepository;

    private LeaderBoard leaderBoard;
    private static final Logger log = LoggerFactory.getLogger(BurnDownChart.class);

    @Override
    public void getBoardData(String productId,String sprintId, List<Task> task) {
        LeaderBoard leaderBoard = new LeaderBoard();

        leaderBoard.setProductId(productId);
        leaderBoard.setSprintId(sprintId);

        int taskMust = 0, taskTry = 0, taskStretch = 0;
        List<String> l1 = new ArrayList();
        for (Task taskList : task) {
            l1.add(taskList.getTaskAssignedTo());
        }
        Set<String> u1 = new HashSet<String>(l1);
        log.info(String.valueOf(u1));
        List<TeamMember> teamMembers = new ArrayList<>();


        for (String unique : u1) {
            for (Task taskList : task) {
                if (taskList.getTaskAssignedTo().equalsIgnoreCase(unique)) {
                    if (taskList.getTaskCategory().contains("Must")) {
                        taskMust++;
                    } else if (taskList.getTaskCategory().contains("Try")) {
                        taskTry++;
                    } else {
                        taskStretch++;
                    }

                }

            }
            TeamMember teamMember = new TeamMember(unique, taskMust, taskTry, taskStretch);
            teamMembers.add(teamMember);

            taskMust = 0;
            taskTry = 0;
            taskStretch = 0;
        }
        log.info(String.valueOf(teamMembers));
        leaderBoard.setTeamMember(teamMembers);
        System.out.println(leaderBoard);
        leaderBoardRepository.save(leaderBoard);

    }


    @Override
    public LeaderBoard getDataForLeaderBoard(String productId, String sprintId) {
        LeaderBoard leaderBoard = leaderBoardRepository.findByProductIdAndSprintId(productId, sprintId);
        return leaderBoard;
    }

}