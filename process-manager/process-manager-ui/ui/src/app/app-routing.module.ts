import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './process/dashboard/dashboard.component';
import { PageNotFoundComponent } from './process/page-not-found/page-not-found.component';
import { BoardComponent } from './process/board/board.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'board/:id',
    component: BoardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'logout',
    component: AppComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [
  BoardComponent,
  DashboardComponent,
  PageNotFoundComponent,
  LoginComponent,
  AppComponent
];

