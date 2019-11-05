import { Component, OnInit } from '@angular/core';
import { BurndownchartService } from '../services/burndownchart.service';
import { ActivatedRoute, Router, Routes, RouterModule } from '@angular/router';
import { SprintServiceService } from '../sprint/sprint-service.service';
import * as moment from 'moment';


@Component({
  selector: 'app-burndown',
  templateUrl: './burndown.component.html',
  styleUrls: ['./burndown.component.scss']
})
export class BurndownComponent implements OnInit {
  chartData: any;
  leaderBoardData: any= [];
  name = 'Apurva';

  constructor(private burndownchartservice: BurndownchartService,
    private sprintService: SprintServiceService, private route: ActivatedRoute, private router: Router) {

  }
  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: { position: 'bottom' }


  };
  productId;
  // 'day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7'
  // 12, 16, 15, 11
  // 5, 10, 9, 10, 12, 5, 6
  // 8, 4, 6, 1, 3, 5, 0
  public lineChartLabels = [];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [
    {
      data: [], label: 'Must', fill: false
    },
    { data: [], label: 'Try', fill: false },
    { data: [], label: 'Impossible', fill: false, }
  ];

  ngOnInit() {
    this.productId = this.sprintService.getProductId();
    console.log(this.productId);
    this.burndownchartservice.getChartData(this.productId)
      .subscribe((data: any) => {
        console.log(data);
        this.chartData = data.result.burnDownChart;
        console.log(this.chartData);
        // object.Due_Date__c = object.Due_Date__c.substring(0, 10); // 2018-03-25
        //   this.chartData.startDate.Due_Date__c = this.chartData.startDate.Due_Date__c.substring(0, 10);
        this.lineChartLabels.push((moment(this.chartData.startDate).format('ll')));
        this.lineChartData[0].data.push(this.chartData.totalMust);
        this.lineChartData[1].data.push(this.chartData.totalTry);
        this.lineChartData[2].data.push(this.chartData.totalStretch);
        this.chartData.taskCompletion.forEach((data) => {
          console.log(data);
          this.lineChartLabels.push(moment(data.completeDate).format('ll'));
          this.lineChartData[0].data.push(data.taskMust);
          this.lineChartData[1].data.push(data.taskTry);
          this.lineChartData[2].data.push(data.taskStretch);
        });
      });

    // this.burndownchartservice.getLeaderBoardData()
    //   .subscribe((data: any) => {
    //     this.leaderBoardData = data.result;
    //     console.log(this.leaderBoardData);
    //     console.log(this.leaderBoardData.productId);
    //   });
  }

}
