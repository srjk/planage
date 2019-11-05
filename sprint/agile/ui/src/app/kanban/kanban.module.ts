import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ColumnComponent } from './column/column.component';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './card/card.component';
import { KanbanService } from './service/kanban.service';
import { WebsocketService } from './service/websocket.service';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SprintBoardComponent } from './sprint-board/sprint-board.component'; 
@NgModule({
  declarations: [ColumnComponent, BoardComponent, CardComponent, SprintBoardComponent],
  imports: [
    CommonModule,
    DragDropModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    MatMenuModule,
    MatToolbarModule
  ],
  exports: [BoardComponent],
  providers : [WebsocketService, KanbanService]
})
export class KanbanModule { }
