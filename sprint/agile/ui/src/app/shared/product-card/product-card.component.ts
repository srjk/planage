import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SprintBoardComponent } from '../../sprint/sprint-board/sprint-board.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor(private router: Router) { }

  priorityData=[];
  @Input() data;
  @Output() viewSprintData = new EventEmitter();
  productId: string;
  ngOnInit() {
    this.productId = this.data.productId;
    }

  viewSprint() {
    this.viewSprintData.emit(this.data);
    console.log(this.productId);
    this.router.navigate(['/products', this.productId]);
  }

  priority(data){

    this.priorityData=data;

  }
}
