package in.stackroute.planage.sprint.kanban.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Document
@ToString
public class SprintBoard {
    @Id
    private String id;
    private String productId;
    private String productName;
    private String sprintId;
    private String sprintName;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ")
    private Date startDate;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ")
    private Date endDate;
    private String status;
    private int lastActiveSprint;
    private List<Column> columns = new ArrayList<>();
    private int totalTaskCount;
    private int totalMustTask;
    private int totalTryTask;
    private int totalStretchTask;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getSprintId() {
        return sprintId;
    }

    public void setSprintId(String sprintId) {
        this.sprintId = sprintId;
    }

    public String getSprintName() {
        return sprintName;
    }

    public void setSprintName(String sprintName) {
        this.sprintName = sprintName;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getLastActiveSprint() {
        return lastActiveSprint;
    }

    public void setLastActiveSprint(int lastActiveSprint) {
        this.lastActiveSprint = lastActiveSprint;
    }

    public List<Column> getColumns() {
        return columns;
    }

    public void setColumns(List<Column> columns) {
        this.columns = columns;
    }

    public int getTotalTaskCount() {
        return totalTaskCount;
    }

    public void setTotalTaskCount(int totalTaskCount) {
        this.totalTaskCount = totalTaskCount;
    }

    public int getTotalMustTask() {
        return totalMustTask;
    }

    public void setTotalMustTask(int totalMustTask) {
        this.totalMustTask = totalMustTask;
    }

    public int getTotalTryTask() {
        return totalTryTask;
    }

    public void setTotalTryTask(int totalTryTask) {
        this.totalTryTask = totalTryTask;
    }

    public int getTotalStretchTask() {
        return totalStretchTask;
    }

    public void setTotalStretchTask(int totalStretchTask) {
        this.totalStretchTask = totalStretchTask;
    }

    public SprintBoard() {
        this.totalTaskCount = 0;
        this.totalMustTask = 0;
        this.totalTryTask = 0;
        this.totalStretchTask = 0;
    }
}
