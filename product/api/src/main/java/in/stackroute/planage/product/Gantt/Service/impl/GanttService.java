package in.stackroute.planage.product.Gantt.Service.impl;

import in.stackroute.planage.product.Gantt.Model.Gantt;
import in.stackroute.planage.product.Gantt.Service.IGantt;
import in.stackroute.planage.product.Gantt.repository.GanttRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
@Service
public class GanttService implements IGantt {

    @Autowired
    GanttRepository ganttRepository;

    @Override
    public Gantt getGanttData(String id) {
        Gantt gantt = ganttRepository.findByProductId(id);
       return gantt;
    }

    @Override
    public Gantt addData(Gantt gantt){
        return ganttRepository.save(gantt);
    }
}
