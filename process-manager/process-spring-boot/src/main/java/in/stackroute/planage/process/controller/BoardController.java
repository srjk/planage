package in.stackroute.planage.process.controller;

import in.stackroute.planage.process.model.boardModel.Board;
import in.stackroute.planage.process.service.board.BoardManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1")
public class BoardController {

  @Autowired
  public BoardManager boardManager;

  @GetMapping("users/{userId}/boards/{boardid}")
  public ResponseEntity<Board> getBoardById(@PathVariable("boardid") String boardid,
                                            @PathVariable("userId") String userId ){
    return ResponseEntity.ok(boardManager.getBoardById(boardid, userId));
  }
}
