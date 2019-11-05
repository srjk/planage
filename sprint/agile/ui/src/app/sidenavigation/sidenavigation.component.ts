import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { SprintServiceService } from '../sprint/sprint-service.service';
import { CookieService } from 'ngx-cookie-service';
import { KanbanService } from '../kanban/service/kanban.service';

@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.scss']
})
export class SidenavigationComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  userEmail: string;
  constructor(private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute, private sprintService: SprintServiceService,
    private router: Router, private cookie: CookieService, private kanbanService: KanbanService) { }

  ngOnInit(): void {

    const token = this.cookie.get('jwt-token');

    this.userEmail = JSON.parse(atob(token.split('.')[1])).email;

    this.sprintService.setProduct(this.route.snapshot.params.id);
    this.kanbanService.setProductId(this.route.snapshot.params.id);
  }
}
