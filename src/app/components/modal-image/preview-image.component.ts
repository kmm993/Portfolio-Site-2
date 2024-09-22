import { Component, ElementRef, HostListener, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-preview-image',
  templateUrl: './preview-image.component.html',
})
export class PreviewImageComponent implements OnInit {
  @Input() image = '';
  @Input() alt = '';
  @Input() galleryImage = true;

  constructor(
    private dialog: MatDialog
  ) { }

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    this.dialog.open(ModalImageDialogComponent, {
      height: '90vh',
      width: '95vw',
      data: {
        image: this.image,
        alt: this.alt
      },
      panelClass: 'dialog-image-panel'
    });
  }

  ngOnInit(): void { }
}

@Component({
  selector: '',
  templateUrl: './dialog-image.component.html',
  styleUrls: ['./dialog-image.component.scss']
})
export class ModalImageDialogComponent {
  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: ImageDialogData
  ) { }

  close() {
    this.dialog.closeAll();
  }
}

interface ImageDialogData {
  image: string;
  alt: string;
}