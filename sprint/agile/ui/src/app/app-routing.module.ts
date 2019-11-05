import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserStoryComponent } from './user-story/user-story.component';
import { TasksPlanningComponent } from './tasks-planning/tasks-planning.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { BurndownComponent } from './burndown/burndown.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { SprintBoardComponent } from './sprint/sprint-board/sprint-board.component';
import { ProductComponent } from './shared/product/product.component';
import { UserstoryListComponent } from './sprint/userstory-list/userstory-list.component';
import { TaskPlanningComponent } from './sprint/task-planning/task-planning.component';
import { ChartsComponent } from './charts/charts.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { UserInfoComponent } from './user-info/user-info.component';
import {BoardComponent} from './kanban/board/board.component'
import { NoActiveComponent } from './error-handling/no-active/no-active.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/user-info', pathMatch: 'full'
  },
  {
    path: 'products/:id',
    component: SidenavigationComponent,
    children: [
      {
        path: '',
        redirectTo: 'currentsprint',
        pathMatch: 'full'
      },
      {path: 'no-active', component: NoActiveComponent},
      {
        path: 'sprints',
        component: SprintBoardComponent
      },
      {
        path: 'sprintplans',
        component: UserStoryComponent
      },
      {
        path: 'taskplans',
        component: TasksPlanningComponent
      },
      {
        path: 'currentsprint',
        component: BoardComponent
      },
      {
        path: 'burndownchart',
        component: BurndownComponent
      },
      {
        path: 'metrix',
        component: StatisticsComponent
      },
      {
        path: 'leaderboard',
        component: LeaderboardComponent
      },
      {
        path: 'sprintboard/:id',
        component: SprintBoardComponent
      },
      {
        path: 'userstories/:id',
        component: UserstoryListComponent
      },
      {
        path: 'task-planning',
        component: TaskPlanningComponent
      },
      {
        path: 'statistics',
        component: ChartsComponent,
      },
      {
      path:'user-info',
      component: UserInfoComponent}
    ]
  },

  {
    path: 'products',
    component: ProductComponent
  },
  {
    path:'user-info',
    component: UserInfoComponent}

];


@Component({
  template: `<router-outlet></router-outlet> `
})

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

// tslint:disable-next-line: component-class-suffix
export class AppRoutingModule { }
// tslint:disable-next-line: max-line-length
export const routingComponents = [UserStoryComponent, TasksPlanningComponent, KanbanBoardComponent, BurndownComponent, StatisticsComponent, ChartsComponent];
