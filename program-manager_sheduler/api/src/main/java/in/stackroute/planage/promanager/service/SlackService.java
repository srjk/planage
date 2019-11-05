package in.stackroute.planage.promanager.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import in.stackroute.planage.promanager.model.Slack;
import in.stackroute.planage.promanager.model.SlackMessage;
import in.stackroute.planage.promanager.repository.SlackRepository;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class SlackService {

  @Autowired
  SlackRepository slackRepository;

  public Slack addWebhook(String productId, String webhook) {
    Slack slack = new Slack();
    slack.setProgramId(productId);
    slack.setSlackWebHook(webhook);
    return slackRepository.save(slack);
  }

  public static void sendMessage(SlackMessage message, String webhook) {
    CloseableHttpClient client = HttpClients.createDefault();
    HttpPost httpPost = new HttpPost(webhook);
    try {
      ObjectMapper objectMapper = new ObjectMapper();
      String json = objectMapper.writeValueAsString(message);
      StringEntity entity = new StringEntity(json);
      httpPost.setEntity(entity);
      httpPost.setHeader("Accept", "application/json");
      httpPost.setHeader("Content-type", "application/json");
      client.execute(httpPost);
      client.close();
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

}

