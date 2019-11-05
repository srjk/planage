import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatCardModule, MatIconModule } from '@angular/material';
import { AvatarModule } from 'ngx-avatar';
import { SidenavigationComponent } from '../sidenavigation/sidenavigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [ProductComponent, ProductCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    AvatarModule,
    MatIconModule,
    AvatarModule,
    MatDividerModule,
    MatMenuModule,
    BrowserAnimationsModule,

  ]
})
export class SharedModule { }
