import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import rootReducer from "proflo-process-lib/lib/processManagementBoardApp";
import { BoardState } from "proflo-process-lib/lib/types";
import { INITIAL_STATE } from "proflo-process-lib/lib/processManagementBoardApp";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { ProcessModule } from "./process/process.module";
import {
  NgRedux,
  NgReduxModule
} from "@angular-redux/store";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AvatarModule } from "ngx-avatar";
import { NgxSpinnerModule } from "ngx-spinner";
import { SocketCommunication } from "./socket/SocketCommunication";
import { AuthGuard } from "./services/auth.guard";
import { LoginComponent } from "./login/login.component";
import { ImportFromExcelDialogComponent } from "./process/import-from-excel-dialog/import-from-excel-dialog.component";
import { FlexModule } from "@angular/flex-layout";
import { ColorPickerModule } from "ngx-color-picker";
import { SlackDialogComponent } from "./process/slack-dialog/slack-dialog.component";
import { ToastrModule } from 'ng6-toastr-notifications';
import { HttpErrorInterceptor } from './error-handler/http-error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ImportFromExcelDialogComponent,
    SlackDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    NgReduxModule,
    ProcessModule,
    HttpClientModule,
    AvatarModule,
    NgxSpinnerModule,
    FlexModule,
    ColorPickerModule, ToastrModule.forRoot(),
  ],
  providers: [SocketCommunication, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private ngRedux: NgRedux<BoardState>,
  ) {
    this.ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
