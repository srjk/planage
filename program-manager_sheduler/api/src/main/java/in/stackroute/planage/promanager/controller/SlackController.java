package in.stackroute.planage.promanager.controller;

import in.stackroute.planage.promanager.model.Assignee;
import in.stackroute.planage.promanager.model.Slack;
import in.stackroute.planage.promanager.service.SlackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class SlackController {

  @Autowired
  public SlackService slackService;

  @PostMapping("/program/{programId}/{webhook}")
  public ResponseEntity<Slack> addWebhook(@PathVariable String programId, @PathVariable String webhook) {
    return ResponseEntity.ok(slackService.addWebhook(programId, webhook));
  }
}
