import { Component, OnInit } from '@angular/core';
import { BurndownchartService } from '../services/burndownchart.service';
import { ActivatedRoute, Router, Routes, RouterModule } from '@angular/router';
import { SprintServiceService } from '../sprint/sprint-service.service';
@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  leaderBoardData: any;
  name = 'Apurva';
  productId;

  constructor(private burndownchartservice: BurndownchartService, private sprintService: SprintServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.productId = this.sprintService.getProductId();
    this.burndownchartservice.getLeaderBoardData(this.productId)
      .subscribe((data: any) => {
        console.log('this ibs leader board', data);
        this.leaderBoardData = data.result.leaderBoard;
        console.log(this.leaderBoardData);
        console.log(this.leaderBoardData.productId);
      });
  }

}
