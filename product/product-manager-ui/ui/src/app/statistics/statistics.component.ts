import { Component, OnInit } from '@angular/core';
import { UserStoryInterface } from '../model/user-story-interface';
import { UserStoryService } from '../service/user-story.service';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.sass']
})
export class StatisticsComponent implements OnInit {
  colours = ["rgba(224, 108, 112, 1)",
            "rgba(225, 109, 113, 2)",
            "rgba(226, 110, 114, 3)"]

  public pieChartLabels = ['Completed user story', 'Uncompleted user story', 'Work in progress user story'];
  public pieChartdata = [];
  public pieChartType = 'pie';
  private userStoryList: UserStoryInterface[] = [];
  private ongoingUserStory = 0;
  private yetToBeStarted = 0;
  private completedUserStory = 0;
  private productName: string;
  constructor(private spinner: NgxSpinnerService,private userStoryService: UserStoryService) { }

  ngOnInit() {
    this.spinner.show();
    setTimeout(data=>{
      this.spinner.hide();
    this.userStoryService.getUserStoryOfProduct()
    .subscribe(data=>{
      this.userStoryList=this.userStoryList.concat(data);
      console.log("*********",this.userStoryList);
      if(this.userStoryList.length!=0){
      this.userStoryList.forEach((data) => {
        console.log(data);
        if (data.startDate != null && data.endDate == null) {
          this.ongoingUserStory++;
    
        } else if (data.startDate == null && data.endDate == null) {
          this.yetToBeStarted++;
    
        } else {
          this.completedUserStory++;
        }
        
      });
      console.log(this.yetToBeStarted);
      this.pieChartdata.push(this.completedUserStory);
      this.pieChartdata.push(this.ongoingUserStory);
      this.pieChartdata.push(this.yetToBeStarted);
      console.log(this.pieChartdata);
    }
    else{
      document.getElementById("message").innerHTML="Currently there are no UserStory";
    }
    });
  },1000);
  }

}
