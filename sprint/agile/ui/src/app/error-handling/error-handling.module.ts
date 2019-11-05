import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoActiveComponent } from './no-active/no-active.component';
import { InternalErrorComponent } from './internal-error/internal-error.component';



@NgModule({
  declarations: [NotFoundComponent, NoActiveComponent, InternalErrorComponent],
  imports: [
    CommonModule
  ],
  exports:[NotFoundComponent, NoActiveComponent]
})
export class ErrorHandlingModule { }
