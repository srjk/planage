import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-no-active',
  templateUrl: './no-active.component.html',
  styleUrls: ['./no-active.component.sass']
})
export class NoActiveComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  routeToPlanSprint() {
    console.log("HI this is called")
    this.router.navigate(['../sprints'], {relativeTo: this.route})
  } 
}
