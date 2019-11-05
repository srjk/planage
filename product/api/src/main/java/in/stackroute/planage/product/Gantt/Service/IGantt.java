package in.stackroute.planage.product.Gantt.Service;

import in.stackroute.planage.product.Gantt.Model.Gantt;

import java.util.ArrayList;

public interface IGantt {
    Gantt getGanttData(String id);
    Gantt addData(Gantt gantt);
}
