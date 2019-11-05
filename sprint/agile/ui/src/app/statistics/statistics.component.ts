import { Component, OnInit } from '@angular/core';

import { ChartsService } from '../services/charts.service';
import { ActivatedRoute, Router, Routes, RouterModule } from '@angular/router';
import { SprintServiceService } from '../sprint/sprint-service.service';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  sprint: any;

  // tslint:disable-next-line: max-line-length
  constructor(private chartsservice: ChartsService, private sprintservice: SprintServiceService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => console.log(params));


  }
  // public chartColors: any[] = [
  //   {
  //     backgroundColor: ['#FF7360', '#6FC8CE']
  //   }];




  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {position: 'bottom'}


  };
  // 'Sprint1', 'Sprint2', 'Sprint3', 'Sprint4', 'Sprint5', 'Sprint6', 'Sprint7'
  // 12, 16, 15, 11, 8, 7, 9
  // 5, 10, 9, 10, 12, 5, 6
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {
      data: [], label: 'Committed'
    },
    { data: [], label: 'Completed' }
  ];

  // public chartColors: any[] = [

  //    barChartData[0].backgroundColor = 'red',
  //   ];


productId;

  ngOnInit() {
    this.productId = this.sprintservice.getProductId();
    console.log( this.productId);
    this.chartsservice.getSprintData(this.productId)
      .subscribe((data: any) => {
        console.log('console in service methos call', data);
        this.sprint = data.result.velocityChart;
        console.log(this.sprint);

        this.sprint.sprintStats.forEach((data) => {
          console.log(data);
          this.barChartLabels.push(data.sprintName);
          // this.barChartData[0].backgroundColor = 'red';
          this.barChartData[0].data.push(data.taskCommitted);
          this.barChartData[1].data.push(data.taskCompleted);

          // })

        });

      });



  }

}
