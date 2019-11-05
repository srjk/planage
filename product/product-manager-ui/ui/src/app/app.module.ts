import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule} from './material/material.module';
import {MatDividerModule} from '@angular/material/divider';

import { AvatarModule } from 'ngx-avatar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserListComponent } from './product/user-list/user-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ChartsModule } from 'ng2-charts';
// import { StatisticsComponent } from './statistics/statistics.component';
import { AboutComponent } from './product/about/about.component';
import {MatStepperModule} from '@angular/material/stepper';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatSelectModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductBacklogModule } from './product-backlog/product-backlog.module';
import { SelectStoriesModule } from './select-stories/select-stories.module';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BacklogService } from './service/backlog.service';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SprintPlanningModule } from './sprint-planning/sprint-planning.module';
import { ProductViewComponent } from './product-view/product-view.component';
import { GanttChartComponent } from './gantt-chart/gantt-chart.component';
import { PersonalisedDashboardComponent } from './personalized-dashboard/personalised-dashboard/personalised-dashboard.component';
import { AddProductDetailComponent } from './personalized-dashboard/add-product-detail/add-product-detail.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ProductCardComponent } from './personalized-dashboard/product-card/product-card.component';
import { CookieService } from 'ngx-cookie-service';
import {MatChipsModule} from '@angular/material/chips';
import { PersonalizedDashboardModule } from './personalized-dashboard/personalized-dashboard.module';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    // StatisticsComponent,
    NavigationComponent,
    GanttChartComponent,
    UserInfoComponent,
    ],
  imports: [
    MaterialModule,
    AvatarModule,
    FlexLayoutModule,
    Ng2SearchPipeModule,
    ChartsModule,
    MatCardModule,
    MatDividerModule,
    MatStepperModule,
    PersonalizedDashboardModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    DragDropModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    ProductBacklogModule,
    SelectStoriesModule,
    SprintPlanningModule,
    MatChipsModule,
    NgxSpinnerModule
  ],

  providers: [BacklogService, { provide: MatDialogRef, useValue: {} }, AddProductDetailComponent,CookieService],
  exports: [AddProductDetailComponent],
  entryComponents: [AddProductDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
