import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Gantt } from '../igantt';
import { GanttService } from '../gantt.service';

declare const ganttChart: any;
declare const daysToMilliseconds: any;

@Component({
  selector: 'app-gantt-chart',
  templateUrl: './gantt-chart.component.html',
  styleUrls: ['./gantt-chart.component.sass']
})
export class GanttChartComponent implements OnInit {
  private GanttData: Gantt = {};
  private Sprint = [];
  private array= [];
  private dependency = '';
  private dependencyArray = []; 
  private message="";

  constructor(private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document,
    private ganttService: GanttService) { }

  ngOnInit() {
    this.ganttService.getItems()
      .subscribe(data => {
        this.GanttData = (data);
        console.log(this.GanttData);
        let counter = 0;
        if(this.GanttData.sprint!=null){
        this.GanttData.sprint.forEach((sprint) => {
          sprint.userStory.forEach((data) => {
            if(!data.startDate==null){
            console.log(data);
            this.array.push(data.id)
            this.array.push(data.userStoryName)
            // console.log(data.startDate.getUTCFullYear);
            this.array.push(data.startDate.getUTCFullYear);
            if(data.endDate==null){
              this.array.push(null)
              this.array.push(daysToMilliseconds(7))
            }
            else{
                this.array.push(data.endDate.getUTCFullYear)
                this.array.push(null)
            }
            this.array.push(100)
            if (data.dependency==null) 
            { 
              this.array.push(null);
            }
            else 
            { 
              this.dependencyArray = data.dependency.map(data=>data.userStoryId);
              console.log(this.dependencyArray);
              this.dependency = this.dependencyArray.join(",");
              this.array.push(this.dependency);
            }
            console.log(this.array);
            this.Sprint.push(this.array);
            this.array= [];
            console.log(this.Sprint)
            counter ++;
            ganttChart(this.Sprint);
            //this.Sprint[0].push(data.dependency)
            //this.UserStory.concat([...data])
          }
          else{
            document.getElementById("message").innerHTML="User story have not been started";
          }
          });
        }); 
        
     }
     else{
       document.getElementById("message").innerHTML="Sprints are not yet planned";
     }
    })
    
  }
}


