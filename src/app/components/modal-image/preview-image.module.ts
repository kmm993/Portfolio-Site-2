import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalImageDialogComponent, PreviewImageComponent } from './preview-image.component';

@NgModule({
  declarations: [PreviewImageComponent, ModalImageDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [PreviewImageComponent, ModalImageDialogComponent]
})
export class PreviewImageModule { }
