import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SprintBoardComponent } from './sprint-board/sprint-board.component';
import { SprintComponent } from './sprint/sprint.component';
import { UserStoryCardComponent } from './user-story-card/user-story-card.component';
import { MatCardModule, MatButtonModule, MatCheckboxModule, MatExpansionModule,
   MatListModule, MatIconModule, MatInputModule, MatButtonToggleModule, MatAutocompleteModule } from '@angular/material';
import { UserstoryListComponent } from './userstory-list/userstory-list.component';
import { TaskPlanningComponent } from './task-planning/task-planning.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SprintBoardComponent, SprintComponent, UserStoryCardComponent, UserstoryListComponent, TaskPlanningComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonToggleModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ]
})
export class SprintModule { }
