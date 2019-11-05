package in.stackroute.planage.process.service.board;

import in.stackroute.planage.process.exception.BoardNotFoundException;
import in.stackroute.planage.process.model.boardModel.Board;
import in.stackroute.planage.process.model.boardModel.BoardList;
import in.stackroute.planage.process.model.userModel.User;
import in.stackroute.planage.process.repository.BoardRepository;
import in.stackroute.planage.process.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BoardMongoDbService implements BoardManager {

  @Autowired
  public BoardRepository boardRepository;

  @Autowired
  public UserRepository userRepository;

  @Override
  public Board getBoardById(String boardId, String userId) {
    Optional<Board> board = boardRepository.findById(boardId);
    if(!board.isPresent()){
      throw new BoardNotFoundException("Requested board is not found");
    }else{
      Optional<User> users = userRepository.findById(userId);
      boolean flag = false;
      if(users.isPresent()){
       for(BoardList boardList: users.get().getBoardList()){
         if(boardList.getBoardId().equals(boardId)){
           flag = true;
           break;
         }
       }
      }
      if(flag){
        return board.get();
      }else{
        throw new BoardNotFoundException("Requested board is not found");
      }
    }
  }
}
