import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {PersonService} from '../services/person.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Session, sessionData} from '../model/session';

import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.sass']
})
export class SessionListComponent implements OnInit {
  @Input() data;
  private paginator: MatPaginator;
  @ViewChild(MatPaginator, {static: false}) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  displayedColumns: string[] = ['text', 'startdate', 'starttime', 'enddate', 'endtime'];
  ELEMENT_DATA: sessionData[] = [];
  dataSource: MatTableDataSource<sessionData>;
  schedulerDataSource: Session[];

  constructor(private personService: PersonService ) {
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  }

  ngOnInit() {

    this.personService.getSession(this.data).subscribe((data: Session[]) => {
      data.forEach((session: Session) => {
     this.ELEMENT_DATA.push({text: session.text, startdate: new Date(session.startDate), enddate: new Date(session.endDate)});
      });
    });

  }
  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

