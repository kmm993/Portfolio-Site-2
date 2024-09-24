import { Component, ElementRef, HostListener, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ImageDialogData } from './dialog-image.i';
import { DialogImageService } from './dialog-image.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-preview-image',
  templateUrl: './preview-image.component.html'
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
  @ViewChild('dialogBody') dialogBody: ElementRef<HTMLElement>;

  constructor(
    private dialog: MatDialog,
    private dialogImageService: DialogImageService,
    @Inject(MAT_DIALOG_DATA) public data: ImageDialogData
  ) { 
    this.handleLoadImage();
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.next();
    } else if (event.key === 'ArrowLeft') {
      this.previous();
    } else if (event.key === 'ArrowDown') {
      this.dialogBody.nativeElement.scrollBy(0, 10);
    } else if (event.key === 'ArrowUp') {
      this.dialogBody.nativeElement.scrollBy(0, -10);
    }
  }

  next() {
    this.dialogImageService.$nextImage.next();
  }

  previous() {
    this.dialogImageService.$prevImage.next();
  }

  close() {
    this.dialog.closeAll();
  }

  private handleLoadImage() {
    this.dialogImageService.$loadImage
    .pipe(takeUntilDestroyed())
    .subscribe((data) => {
      this.data = data;
    });
  }
}
