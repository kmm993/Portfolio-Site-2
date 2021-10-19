import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalImageComponent } from './modal-image.component';

@NgModule({
  declarations: [ModalImageComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [ModalImageComponent]
})
export class ModalImageModule { }
