import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PersonalCalendarComponent } from './personal-calendar/personal-calendar.component';
import { AssigneeComponent } from './assignee/assignee.component';
import { AssigneeCalendarComponent } from './assignee-calendar/assignee-calendar.component';
import { TaskComponent } from './task/task.component';
import { ProgramComponent } from './program/program.component';
import { AddparticipantComponent } from './addparticipant/addparticipant.component';
import { SlectionlistComponent } from './slectionlist/slectionlist.component';
import { ProgramTasksComponent } from './program-tasks/program-tasks.component';
import { ReleaseTaskComponent } from './release-task/release-task.component';
import { LoginComponent } from './login/login.component';
import { ParticipantComponent } from './participant/participant.component';
import { AuthGardService } from './services/auth-gard.service';
import { ProgramTaskComponent } from './program-task/program-task.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'selectionList/:id', component: SlectionlistComponent, canActivate: [AuthGardService]
  },
  {
    path: 'task/:id', component: ProgramTaskComponent, canActivate: [AuthGardService]
  },
  {
    path: 'participant', component: ParticipantComponent, canActivate: [AuthGardService]
  },
  {
    path: 'addparticipant', component: AddparticipantComponent, canActivate: [AuthGardService]
  },
  {
    path: 'programs', component: ProgramComponent, canActivate: [AuthGardService]
  },
  {
    path: 'productdashboard', component: ProductComponent, canActivate: [AuthGardService]
  },
  {
    path: 'productform', component: ProductFormComponent, canActivate: [AuthGardService]
  },
  {
    path: 'addtask', component: TaskComponent, canActivate: [AuthGardService]
  },
  {
    path: 'addtasktoprogram', component: ProgramTasksComponent, canActivate: [AuthGardService]
  },
  {
    path: 'relesetask', component: ReleaseTaskComponent, canActivate: [AuthGardService]
  },
  {
    path: 'calendar', component: CalendarComponent, canActivate: [AuthGardService]
  },
  {
    path: 'participate', component: PersonalCalendarComponent, canActivate: [AuthGardService]
  },
  {
    path: 'assignee', component: AssigneeComponent, canActivate: [AuthGardService]
  },
  {
    path: 'assigneecalendar', component: AssigneeCalendarComponent, canActivate: [AuthGardService]
  },
  {
    path: 'releasetask/:id', component: ReleaseTaskComponent, canActivate: [AuthGardService]
  },
  {
    path: '', redirectTo: '/productdashboard', pathMatch: 'full'
  }
];

@Component({
  template: `<router-outlet></router-outlet> `
})

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

// tslint:disable-next-line: component-class-suffix
export class AppRoutingModule { }
export const AppRouting = [];
