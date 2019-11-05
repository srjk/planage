import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsComponent } from './statistics/statistics.component';
import { AboutComponent } from './product/about/about.component';
import { MembersListComponent } from './product/members-list/members-list.component';
import { PersonalisedDashboardComponent } from './personalized-dashboard/personalised-dashboard/personalised-dashboard.component';

import { EpicViewComponent } from './product-backlog/epic-view/epic-view.component';
import { GanttChartComponent } from './gantt-chart/gantt-chart.component';
import { SprintListComponent } from './sprint-planning/sprint-list/sprint-list.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EpicListComponent } from './product-backlog/epic-list/epic-list.component';
import { EpicsComponent } from './product-backlog/epics/epics.component';
import { AppBarComponent } from './personalized-dashboard/app-bar/app-bar.component';

const routes: Routes = [
  {
    path: 'product-manager-ui',
    component: UserInfoComponent
  },

  {
    path: 'dashBoard', component: AppBarComponent,
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: PersonalisedDashboardComponent },
      {
        path: 'products/:id',
        component: NavigationComponent,
        children: [
          { path: '', redirectTo: 'about', pathMatch: 'full' },
          { path: 'about', component: AboutComponent },
          {
            path: 'backlog',
            component: EpicViewComponent,
            children: [
              {
                path: '', redirectTo: 'epics', pathMatch: 'full'
              },
              {
                path: 'epics',
                component: EpicListComponent,
              },
              {
                path: 'user-story',
                component: EpicsComponent
              }
            ]
          },
          { path: 'sprintplan', component: SprintListComponent },
          { path: 'statistics', component: StatisticsComponent },
          { path: 'roadmap', component: GanttChartComponent },
        ]
      }
    ]
  },

  // {path: '/product-manager-ui', redirectTo: 'product-manager-ui/dashBoard', pathMatch: 'full'},
  { path: '', redirectTo: '/product-manager-ui', pathMatch: 'full' },
  //   {path: 'products/:id',
  //   component: NavigationComponent,
  //   children: [
  //     {path: '', redirectTo: 'about' , pathMatch: 'full'},
  //     {path: 'about', component: AboutComponent},
  //     { path: 'backlog',
  //       component: EpicViewComponent,
  //       children: [
  //         {
  //           path: '', redirectTo: 'epics', pathMatch: 'full'
  //         },
  //         {
  //             path: 'epics',
  //             component: EpicListComponent,
  //         },
  //         {
  //           path: 'user-story',
  //           component: EpicsComponent
  //         }
  //       ]
  //     },
  //     {path: 'sprintplan', component: SprintListComponent},
  //     {path: 'statistics', component: StatisticsComponent},
  //     {path: 'roadmap', component: GanttChartComponent},
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
