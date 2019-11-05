import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { BacklogService } from '../service/backlog.service';
import { UserStoryService } from '../service/user-story.service';
import { SprintPlanService } from '../sprint-planning/sprint-plan.service';
import { GanttService } from '../gantt.service';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  productId;
  hideText= false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  selectedProductData;
  customStyle = {
    backgroundColor: "#035382",
    borderRadius: "50%",
    color: "white",
    cursor: "pointer",
  };
  screenHeight: number;
  screenWidth: number;
  constructor(private breakpointObserver: BreakpointObserver,
              private product_service: ProductsService, private activatedRoute: ActivatedRoute, private router: Router,
              private backlogService: BacklogService,
              private userStoryService: UserStoryService,
              private sprintPlanService: SprintPlanService,
              private ganttService: GanttService) {
                this.getScreenSize();
               }

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.params.id;
    this.product_service.setProductId(this.productId);
    this.backlogService.setProductId(this.productId);
    this.userStoryService.setProductId(this.productId);
    this.ganttService.setProductId(this.productId);
    this.sprintPlanService.setProductId(this.productId);
    this.product_service.getSelectedProduct().subscribe((data)=> {
      this.selectedProductData = data;
    })
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        if(this.screenWidth<1220) {
          this.hideText= true;
        } else {
          this.hideText = false
        }
  }
}
