import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatGridListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule, MatFormFieldModule, MatRadioModule, MatStepperModule,
  MatInputModule, MatListModule
} from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatRadioModule,
    MatStepperModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    FormsModule,,
    ReactiveFormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatCardModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
  ],
  exports:[
    CommonModule,
    MatToolbarModule,
     MatCardModule,
     MatExpansionModule,
     MatFormFieldModule,
     MatRadioModule,
     MatStepperModule,
     MatGridListModule,
     MatInputModule,
     MatListModule,
     FormsModule,,
     ReactiveFormsModule,
     MatIconModule,
     MatDatepickerModule,
     MatButtonToggleModule,
     MatSidenavModule,
     MatCardModule,
     DragDropModule,
     MatButtonModule,
     MatDialogModule,
     MatFormFieldModule,
     ReactiveFormsModule,
     FormsModule,
     MatInputModule,
     MatIconModule,
     MatMenuModule,]
})
export class MaterialModule {

 }
