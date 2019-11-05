import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { ProductComponent } from './product/product.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProductcardsComponent } from './productcards/productcards.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CalendarComponent } from './calendar/calendar.component';
import {
  DxSpeedDialActionModule, DevExtremeModule, DxSchedulerModule,
  DxDataGridModule, DxButtonModule, DxTemplateModule
} from 'devextreme-angular';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Service } from './services/calendar.service';
import { AvatarModule } from 'ngx-avatar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PersonalCalendarComponent } from './personal-calendar/personal-calendar.component';
import { AssigneeComponent } from './assignee/assignee.component';
import { AssigneeCalendarComponent } from './assignee-calendar/assignee-calendar.component';
import { TaskComponent } from './task/task.component';
import { ProgramTasksComponent } from './program-tasks/program-tasks.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxMdModule } from 'ngx-md';
import { FileUploadModule } from 'ng2-file-upload';
import { ProgramComponent } from './program/program.component';
import { ProgramcardComponent } from './programcard/programcard.component';
import { AddparticipantComponent } from './addparticipant/addparticipant.component';
import { SlectionlistComponent } from './slectionlist/slectionlist.component';
import { ReleaseTaskComponent } from './release-task/release-task.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TaskCalendarComponent } from './task-calendar/task-calendar.component';
import { MatSelectModule } from '@angular/material/select';
import { SessionListComponent } from './session-list/session-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatNativeDateModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ParticipantCardComponent } from './participant-card/participant-card.component';
import { ParticipantComponent } from './participant/participant.component';
import { CookieService } from 'ngx-cookie-service';

import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { StorageServiceModule } from 'angular-webstorage-service';
import { SlackComponent } from './slack/slack.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProgramTaskComponent } from './program-task/program-task.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductcardsComponent,
    ProductFormComponent,
    CalendarComponent,
    PersonalCalendarComponent,
    AssigneeComponent,
    AssigneeCalendarComponent,
    TaskComponent,
    ProgramTasksComponent,
    ProgramComponent,
    ProgramcardComponent,
    AddparticipantComponent,
    SlectionlistComponent,
    ReleaseTaskComponent,
    TaskCalendarComponent,
    SessionListComponent,
    TaskListComponent,
    LoginComponent,
    SidenavComponent,
    ParticipantCardComponent,
    ParticipantComponent,
    SlackComponent,
    ProgramTaskComponent
   
  ],
  entryComponents: [
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FlexLayoutModule,
    MatDialogModule,
    MatChipsModule,
    MatExpansionModule,
    LayoutModule,
    DxTemplateModule,
    DxSchedulerModule,
    DxDataGridModule,
    DevExtremeModule,
    DxButtonModule,
    DxSpeedDialActionModule,
    AvatarModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatMenuModule,
    MatDatepickerModule,
    MatTabsModule,
    NgxMdModule,
    FileUploadModule,
    MatSelectModule,
    MatSlideToggleModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    StorageServiceModule,
    NgxSpinnerModule
  ],
  providers: [Service, CookieService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
