import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
​
import { MatIconModule, MatDialogModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { SprintListComponent } from './sprint-list/sprint-list.component';
import { SprintComponent } from './sprint/sprint.component';
import { StoryComponent } from './story/story.component';
import { SelectStoryComponent } from './select-story/select-story.component';
import { SelectStoriesModule } from '../select-stories/select-stories.module';
​
@NgModule({
  declarations: [SprintListComponent, SprintComponent, StoryComponent, SelectStoryComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    DragDropModule,
    SelectStoriesModule,
    MatCheckboxModule
  ],
  entryComponents: [SelectStoryComponent],
  exports: [SprintListComponent, SprintComponent, StoryComponent, SelectStoryComponent]
})
export class SprintPlanningModule { }

