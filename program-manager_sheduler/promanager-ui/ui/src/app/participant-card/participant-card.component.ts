import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-participant-card',
  templateUrl: './participant-card.component.html',
  styleUrls: ['./participant-card.component.sass']
})
export class ParticipantCardComponent implements OnInit {
@Input() data;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  getProgramDetail(programId: any) {

    this.router.navigate(['/selectionList', programId]);
  }
}
