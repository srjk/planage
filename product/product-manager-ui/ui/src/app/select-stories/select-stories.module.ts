import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectEpicsComponent } from './select-epics/select-epics.component';
import { SelectUserStoriesComponent } from './select-user-stories/select-user-stories.component';
import { UserStoryChecklistComponent } from './user-story-checklist/user-story-checklist.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatExpansionModule,
   MatSlideToggleModule, MatDialogModule, MatSelectModule, MatChipsModule, 
   MatCardModule, MatCheckboxModule, MatInputModule, MatButtonModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {NgxPaginationModule} from 'ngx-pagination'; //
​
​
​
@NgModule({
  declarations: [SelectEpicsComponent, SelectUserStoriesComponent, UserStoryChecklistComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatExpansionModule,
    MatSlideToggleModule,
    FormsModule,
    DragDropModule,
    MatDialogModule,
    MatSelectModule,
    MatChipsModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    NgxPaginationModule
  ],
  exports: [SelectEpicsComponent, SelectUserStoriesComponent, UserStoryChecklistComponent]
})
export class SelectStoriesModule { }
