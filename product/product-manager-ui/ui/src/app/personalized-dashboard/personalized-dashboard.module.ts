import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductDetailComponent } from './add-product-detail/add-product-detail.component';
import { ProductCardComponent } from './product-card/product-card.component';

import {MatStepperModule} from '@angular/material/stepper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatDividerModule, MatMenuModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { ProductModule } from '../product/product.module';
import { AvatarModule } from 'ngx-avatar';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppBarComponent } from './app-bar/app-bar.component';
import { PersonalisedDashboardComponent } from './personalised-dashboard/personalised-dashboard.component';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [AddProductDetailComponent, ProductCardComponent,AppBarComponent, PersonalisedDashboardComponent],
  imports: [
    CommonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    ScrollingModule,
    ProductModule,
    FlexLayoutModule,
    MatToolbarModule,
    AvatarModule,
    MatGridListModule,
    MatIconModule,
    RouterModule, 
    MatDividerModule,
    Ng2SearchPipeModule,
    NgxSpinnerModule,
    MatMenuModule

  ],
  exports:[AddProductDetailComponent, ProductCardComponent,AppBarComponent, PersonalisedDashboardComponent]
})
export class PersonalizedDashboardModule { }
