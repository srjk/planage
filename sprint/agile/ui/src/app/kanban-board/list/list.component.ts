import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { SprintDataService } from '../../services/sprint-data.service';
import { Action } from '../../store/sprint.actions';
import { NgRedux, select } from '@angular-redux/store';
import { Isprint } from '../../model/ISprint';
import { ColumnInterface } from '../../column-interface';
import { KanbanBoardService } from '../../services/kanban-board.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {



  togg: boolean = false;
  public tasks;
  public columns = [];
  public connectedList = [];


  listData: ColumnInterface;
  @Input()
  column: ColumnInterface[];
  constructor(private sprintdata: SprintDataService, private KanbanService: KanbanBoardService,private ngRedux: NgRedux<Isprint>) { }

  ngOnInit() {
    console.log(this.column);
    for (let ids of this.column) {
      this.connectedList.push(ids.id);
    }

  }


  drop(event: CdkDragDrop<string[]>) {
    console.log(event.previousContainer.id);
    console.log(event.container.id);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.ngRedux.dispatch({ type: Action.UPDATE_LIST, payload: this.column });
    console.log('From this column', event.previousContainer.data);
    console.log('To this column', event.container.data);
    console.log('this is the list data in redux', this.column);

  }



  addcol() {
    this.togg = !this.togg;
    console.log(this.togg);
  }
  deletecol(id) {
    this.KanbanService.deletecol('product1', 'week-1', id).subscribe((data) => {
      this.column = data;
    });
    console.log('ths is the delcol func', id);
  }

}
