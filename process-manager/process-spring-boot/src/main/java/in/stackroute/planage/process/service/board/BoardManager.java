package in.stackroute.planage.process.service.board;

/*
* This is service layer which will define the required methods.
* Here all the CRUD operations for boards, groups and rows is defined
 */

import in.stackroute.planage.process.model.boardModel.Board;

public interface BoardManager {
  Board getBoardById(String boardId, String userId);
}
