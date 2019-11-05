import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {IBoardState} from '../../node_modules/proflo-sprint-lib/lib/board-interface';
import {
  MatGridListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule, MatFormFieldModule, MatRadioModule, MatStepperModule,
  MatInputModule, MatListModule
} from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NativeDateModule } from '@angular/material';
import { AppComponent } from './app.component';
import { UserStoryComponent } from './user-story/user-story.component';
import { UserstoryPlanningService } from './userstory-planning.service';
import { FilterPipe } from './filter.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TasksPlanningComponent } from './tasks-planning/tasks-planning.component';
import { ListComponent } from './kanban-board/list/list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FreezesprintService } from './services/freezesprint.service';
import { StatisticsComponent } from './statistics/statistics.component';
import { ChartsService } from './services/charts.service';
import { BurndownComponent } from './burndown/burndown.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { Isprint } from './model/ISprint';
import { AvatarModule } from 'ngx-avatar';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { MatMenuModule } from '@angular/material/menu';

import { BurndownchartService } from './services/burndownchart.service';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SprintModule } from './sprint/sprint.module';
import { SharedModule } from './shared/shared.module';
import { ChartsComponent } from './charts/charts.component';

import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ErrorHandlingModule } from './error-handling/error-handling.module';
import { KanbanModule } from './kanban/kanban.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { WebsocketService } from './kanban/service/websocket.service';
import { CookieService } from 'ngx-cookie-service';
import {rootReducer, INITIAL_STATE} from '../../node_modules/proflo-sprint-lib/lib/store';

const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    KanbanBoardComponent,
    UserStoryComponent,
    FilterPipe,
    TasksPlanningComponent,
    ListComponent,
    StatisticsComponent,
    BurndownComponent,
    LeaderboardComponent,
    ChartsComponent,
    SidenavigationComponent,
    UserInfoComponent

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatRadioModule,
    MatStepperModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    ChartsModule,
    FormsModule,
    NgReduxModule,
    AvatarModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDatepickerModule,
    NativeDateModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    MatSidenavModule,
    AppRoutingModule,
    MatCardModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    ScrollingModule,
    NgReduxModule,
    AvatarModule,
    ChartsModule,
    MatMenuModule,
    LayoutModule,
    SprintModule,
    SharedModule,
    KanbanModule,
    ErrorHandlingModule
  ],
  providers: [
    UserstoryPlanningService,
    FreezesprintService,
    ChartsService, BurndownchartService,
    CookieService
  ],
  bootstrap: [
    AppComponent
  ]

})
export class AppModule {
  constructor(ngRedux: NgRedux<IBoardState>) {
    ngRedux.configureStore((currentState, packet) => {
      console.log(packet);
      return rootReducer(currentState, packet);
    }, INITIAL_STATE);
  }
}
