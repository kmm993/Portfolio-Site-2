import { CommonModule } from '@angular/common';
import { ModalImageDialogComponent, PreviewImageComponent } from './preview-image.component';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [PreviewImageComponent, ModalImageDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [PreviewImageComponent, ModalImageDialogComponent]
})
export class PreviewImageModule { }
