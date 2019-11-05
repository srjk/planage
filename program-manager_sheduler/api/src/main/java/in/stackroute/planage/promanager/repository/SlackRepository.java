package in.stackroute.planage.promanager.repository;

import in.stackroute.planage.promanager.model.Slack;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SlackRepository extends MongoRepository<Slack, String> {
}
