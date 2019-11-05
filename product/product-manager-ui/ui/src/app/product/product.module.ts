import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { MembersListComponent } from './members-list/members-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import {MatCardModule, MatIconModule, MatInputModule, MatButtonModule, MatDividerModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AvatarModule } from 'ngx-avatar';
import { UserListComponent } from './user-list/user-list.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatChipsModule} from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { StatisticsComponent } from '../statistics/statistics.component';
import { ChartsModule } from 'ng2-charts';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [AboutComponent, MembersListComponent, ProductDetailComponent, UserListComponent, StatisticsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatMenuModule,
    MatGridListModule,
    Ng2SearchPipeModule,
    AvatarModule,
    ScrollingModule,
    MatChipsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    NgxSpinnerModule,
    ChartsModule,
    MatSnackBarModule
  ],
  // exports : [AboutComponent, MembersListComponent, ProductDetailComponent, UserListComponent]
})
export class ProductModule { }
