package in.stackroute.planage.process.repository;

import in.stackroute.planage.process.model.boardModel.Board;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/*
* Persistence layer which will use mongoDB database for CRUD operations.
* MongoRepository interface will take two argument : first one will be the collection class name and second one will be
* the type of unique id.
 */

@Repository
public interface BoardRepository extends MongoRepository<Board, String> {
}
