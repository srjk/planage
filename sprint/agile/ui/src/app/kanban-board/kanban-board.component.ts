import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { SprintDataService } from "../services/sprint-data.service";
import { KanbanBoardService } from "../services/kanban-board.service";
import { NgRedux, select } from "@angular-redux/store";
import { Action } from "../store/sprint.actions";
import { Isprint } from "../model/ISprint";
import { Observable } from "rxjs";
import { IList } from "../model/ISprint";
import { SprintBoardInterface } from "../sprint-board-interface";
import { ColumnInterface } from "../column-interface";

@Component({
  selector: "app-kanban-board",
  templateUrl: "./kanban-board.component.html",
  styleUrls: ["./kanban-board.component.scss"]
})
export class KanbanBoardComponent implements OnInit {
  @select() column$: Observable<ColumnInterface[]>;
  public currentList: IList[];
  public tog: boolean = false;
  public name: string;
  list: SprintBoardInterface;
  listInformation = this.formBuilder.group({
    listName: [
      "",
      [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern("^[a-zA-Z0-9 ]*")
      ]
    ]
  });

  public data: ColumnInterface[];
  listId: string;

  constructor(
    private formBuilder: FormBuilder,
    private sprintdata: SprintDataService,
    private kanbanService: KanbanBoardService,
    private ngRedux: NgRedux<Isprint>
  ) { }

  ngOnInit() {
    this.column$.subscribe(result => {
      console.log("Subscribing to list...", result);
    });

    this.sprintdata.getList().subscribe((data: any) => {
      this.list = data.column;
      console.log(data.column);
    });

    this.kanbanService
      .getDummyData()
      .subscribe((data: SprintBoardInterface) => {
        // data.column.map(id => {

        // });
        this.data = data.column;
        console.log("this is data", this.data);
      });
  }

  addList() {
    // console.log(this.listInformation.value.listName)
    // console.log("listint", this.listInformation.value.listName)
    const obj = {
      columnName: this.listInformation.value.listName
    };
    this.kanbanService.addList('1', '1', { columnName: this.listInformation.value.listName }).subscribe((element) => {
      this.data = element.column;

    });
    this.tog = false;
  }

  toggle() {
    this.tog = !this.tog;
    console.log(this.tog);
  }
}
