import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../services/participant.service';
import { Program } from '../model/product';
import { Participant } from '../model/participant';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.sass']
})
export class ParticipantComponent implements OnInit {
  programs: Participant[];
  userEmail: string;
  private isCookiePresent = false;

  constructor(private participantservice: ParticipantService,
    private Cookie: CookieService,
    private userservice: UserService) { }

  ngOnInit() {
    if (this.Cookie.check('__scheduler')) {
      this.isCookiePresent = true;
    }
    this.userservice.setUserAuthStatus(this.Cookie.check('__scheduler'));
    const token = this.Cookie.get('__scheduler');
    // Retrieve the user email from jwt token retrieved from cookie
    this.userEmail = JSON.parse(atob(token.split('.')[1])).email;
    this.participantservice.getParticipantPrograms(this.userEmail).subscribe(data => {
      this.programs = data;
    }

    );

  }

}
