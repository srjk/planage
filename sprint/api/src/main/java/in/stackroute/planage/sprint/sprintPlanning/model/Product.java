package in.stackroute.planage.sprint.sprintPlanning.model;

import lombok.*;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

    @Getter
    @Setter
    @Document
    @ToString
    @AllArgsConstructor
    @JsonIgnoreProperties(ignoreUnknown = true)
    public class Product implements Serializable {
        @Id
        private String id;
        private String productId;
        private String productName;
        private String userEmail;
        private String description;
        private String client;
        private Date deadline;
//        private String productManagerEmail;
            private List<Teams> team;

        public Product(){

        }

    }
