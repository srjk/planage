import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpicListComponent } from './epic-list/epic-list.component';
import { EpicsComponent } from './epics/epics.component';
import { UserStoryComponent } from './user-story/user-story.component';
import { UserStoryDialogBoxComponent } from './user-story-dialog-box/user-story-dialog-box.component';
import { RecommendedEpicsComponent } from '../recommended-epics/recommended-epics.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatListModule , MatSlideToggleModule,
         MatDialogModule, MatSelectModule, MatChipsModule, MatCardModule,
         MatCheckboxModule, MatInputModule, MatButtonModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectStoriesModule } from '../select-stories/select-stories.module';
import { EpicViewComponent } from './epic-view/epic-view.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatDividerModule} from '@angular/material/divider';
​
​
@NgModule({
  declarations: [EpicListComponent, EpicsComponent, UserStoryComponent, UserStoryDialogBoxComponent,
     RecommendedEpicsComponent,
     EpicViewComponent],
  imports: [
    CommonModule,
    SelectStoriesModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
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
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgxPaginationModule,
    MatDividerModule
  ],
  entryComponents: [UserStoryDialogBoxComponent],
  exports: [EpicListComponent, EpicsComponent, UserStoryComponent, UserStoryDialogBoxComponent,
    RecommendedEpicsComponent,
    EpicViewComponent]
})
export class ProductBacklogModule { }

