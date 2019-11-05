import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatExpansionModule,
  MatDialogModule} from '@angular/material';
  import {MatMenuModule} from '@angular/material/menu';
  import {MatTooltipModule} from '@angular/material/tooltip';
  import {MatGridListModule} from '@angular/material/grid-list';
  import {MatCardModule} from '@angular/material/card';
  
  const MaterialComponent = [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
  MatTooltipModule,
MatMenuModule,
MatGridListModule,
MatCardModule,
MatDialogModule];

@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialModule { }
