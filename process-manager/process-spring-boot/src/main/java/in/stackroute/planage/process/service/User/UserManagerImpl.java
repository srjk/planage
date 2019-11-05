package in.stackroute.planage.process.service.User;

import in.stackroute.planage.process.exception.BoardNotFoundException;
import in.stackroute.planage.process.model.boardModel.Board;
import in.stackroute.planage.process.model.boardModel.BoardList;
import in.stackroute.planage.process.model.boardModel.Subscriber;
import in.stackroute.planage.process.model.userModel.User;
import in.stackroute.planage.process.model.userModel.UsersResponse;
import in.stackroute.planage.process.repository.BoardRepository;
import in.stackroute.planage.process.repository.UserRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class UserManagerImpl implements UserManager {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private BoardRepository boardRepository;

  @Value("${jwt.secret}")
  private String jwtSecret;

  @Value("${jwt.email.secret}")
  private String emailSecretKet;

  @Override
  public User saveUser(String userName, String userEmail, String userProfile) {
    User user = userRepository.findByUserEmail(userEmail);
    if(user == null){
      List<BoardList> boardList = new ArrayList<>();
      User newUser = new User(userName, userEmail, userProfile, boardList);
      User addedUser =  userRepository.save(newUser);
      addedUser.setUserId(addedUser.get_id());
      return userRepository.save(addedUser);
    }else {
      return user;
    }
  }

  @Override
  public String generateJwtToken(String userEmail) {
    Claims claims = Jwts.claims();
    claims.put("email", userEmail);

    String token  =  Jwts.builder().setClaims(claims)
            .setExpiration(new Date(System.currentTimeMillis()+864_00_000)).signWith(SignatureAlgorithm.HS256, jwtSecret)
            .compact();

    return token;
  }

  @Override
  public User getUserDetails(String email) {
    User user = userRepository.findByUserEmail(email);
    return user;
  }

  @Override
  public List<UsersResponse> getAllUsers() {
    List<User> userList = userRepository.findAll();
    List<UsersResponse> usersResponses = new ArrayList<>();
    for(User user: userList){
      UsersResponse usersResponse = new UsersResponse(user.getUserId(), user.getUserEmail(), user.getUserName());
      usersResponses.add(usersResponse);
    }
    return usersResponses;
  }

  public String onVerifyEmail(String token, String boardId){
    try {
      Claims claims = Jwts.parser().setSigningKey(emailSecretKet).parseClaimsJws(token).getBody();
      String googleStateURL;
      if(claims.get("subscriberId") != null) {
        googleStateURL = boardId + '.' + claims.get("subscriberId");
      }else{
        googleStateURL = boardId;
      }
      return googleStateURL;
    }catch(Exception e){
      throw new BoardNotFoundException("UnAuthorized email token");
    }
  }

  @Override
  public void saveSubscriber(String subscriberId, String boardId) {
    boolean isBoardExist = false;
    Optional<User> user = userRepository.findById(subscriberId);
    Optional<Board> board = boardRepository.findById(boardId);

    // Check for boardid in user board list
    for(BoardList boardList : user.get().getBoardList()){
      if(boardList.getBoardId().equals(boardId)){
        isBoardExist = true;
        break;
      }
    }
    // Check if the user is alreay a subscriber of board. If yes, then we will not save his data again.
    if(!isBoardExist && board.isPresent()){
      user.get().getBoardList().add(0, new BoardList(board.get().getBoardId(), board.get().getBoardName(), board.get().getBoardOwner(), board.get().getCreatedAt()));
      board.get().getBoardSubscribers().add(new Subscriber(user.get().getUserId(), user.get().getUserName(), user.get().getUserEmail(), user.get().getUserProfile(), "online", false));
      boardRepository.save(board.get());
      userRepository.save(user.get());
    }
  }

  @Override
  public User onSaveBoardList(String boardId, String userId){
    Optional<User> user = userRepository.findById(userId);
    if (user.isPresent()) {
      Optional<Board> board = boardRepository.findById(boardId);
      board.ifPresent(value -> user.get().getBoardList().add(0, new BoardList(value.getBoardId(), value.getBoardName(), value.getBoardOwner(), value.getCreatedAt())));
      return userRepository.save(user.get());
    }else{
      return null;
    }
  }
} 
