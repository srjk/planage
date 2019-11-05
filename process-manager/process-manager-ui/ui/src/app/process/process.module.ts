import { NgModule } from "@angular/core";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { LayoutModule } from "@angular/cdk/layout";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material/material.module";
import { BoardComponent } from "./board/board.component";
import { CreateBoardDialogComponent } from "./create-board-dialog/create-board-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule } from "@angular/forms";
import { NgReduxModule } from "@angular-redux/store";
import { GroupComponent } from "./group/group.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AppRoutingModule } from "../app-routing.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AvatarModule } from "ngx-avatar";
import { ColorPickerModule } from "@syncfusion/ej2-angular-inputs";
import { enableRipple } from "@syncfusion/ej2-base";
import { RouterModule } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { StorageServiceModule } from "angular-webstorage-service";
import { NgxSpinnerModule } from "ngx-spinner";
import { ImportFromExcelDialogComponent } from "./import-from-excel-dialog/import-from-excel-dialog.component";
import { ColorPickerModule as ColorModule } from "ngx-color-picker";
import { SlackDialogComponent } from "./slack-dialog/slack-dialog.component";

enableRipple(true);

const avatarColors = ["#F90EB5", "#03CEF3", "#FF4600"];

@NgModule({
  declarations: [
    SidebarComponent,
    BoardComponent,
    CreateBoardDialogComponent,
    GroupComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    LayoutModule,
    FlexLayoutModule,
    HttpClientModule,
    CommonModule,
    MaterialModule,
    MatDialogModule,
    FormsModule,
    NgReduxModule,
    NgxSpinnerModule,
    AppRoutingModule,
    ColorPickerModule,
    ColorModule,
    StorageServiceModule,
    RouterModule.forRoot([]),
    AvatarModule.forRoot({
      colors: avatarColors
    }),
    ColorPickerModule
  ],
  exports: [SidebarComponent],
  entryComponents: [
    CreateBoardDialogComponent,
    ImportFromExcelDialogComponent,
    SlackDialogComponent
  ],
  providers: [CookieService],
  bootstrap: []
})
export class ProcessModule { }
