import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreviewImageComponent } from './preview-image.component';

@NgModule({
  declarations: [PreviewImageComponent],
  imports: [
    CommonModule
  ],
  exports: [PreviewImageComponent]
})
export class PreviewImageModule { }
