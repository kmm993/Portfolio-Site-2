import { Component } from '@angular/core';
import { PORTFOLIO_SECTIONS } from './portfolio';
import { DialogImageService } from './components/modal-image/dialog-image.service';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  currentSectionIndex = 0;
  currentImageIndex = 0;

  readonly portfolioSections = PORTFOLIO_SECTIONS;

  constructor(
    private dialogImageService: DialogImageService
  ) {
    this.onNextImage();
    this.onPreviousImage();
  }

  updateCurrentImageIndex(portfolioSectionIndex: number, portfolioItemIndex: number) {
    this.currentSectionIndex = portfolioSectionIndex;
    this.currentImageIndex = portfolioItemIndex;
  }

  private onNextImage() {
    this.dialogImageService.$nextImage
    .pipe(takeUntilDestroyed())
    .subscribe(() => {
      const endOfSection = this.currentImageIndex === this.portfolioSections[this.currentSectionIndex].portfolioItems.length - 1;
      const endOfLastSection = this.currentSectionIndex === this.portfolioSections.length - 1;

      if (endOfSection && endOfLastSection) {
        this.updateCurrentImageIndex(0, 0);
      } else if (endOfSection) {
        this.updateCurrentImageIndex(this.currentSectionIndex + 1, 0);
      } else {
        this.updateCurrentImageIndex(this.currentSectionIndex, this.currentImageIndex + 1);
      }

      this.dialogImageService.$loadImage.next(
        this.portfolioSections[this.currentSectionIndex].portfolioItems[this.currentImageIndex + 1]
      );
    })
  }

  private onPreviousImage() {
    this.dialogImageService.$prevImage
    .pipe(takeUntilDestroyed())
    .subscribe(() => {
      const beginningOfSection = this.currentImageIndex === 0;
      const beginningOfFirstSection = this.currentSectionIndex === 0;

      if (beginningOfSection && beginningOfFirstSection) {
        this.updateCurrentImageIndex(this.portfolioSections.length - 1, this.portfolioSections[this.portfolioSections.length - 1].portfolioItems.length - 1);
      } else if (beginningOfSection) {
        this.updateCurrentImageIndex(this.currentSectionIndex - 1, this.portfolioSections[this.currentSectionIndex - 1].portfolioItems.length - 1);
      } else {
        this.updateCurrentImageIndex(this.currentSectionIndex, this.currentImageIndex - 1);
      }

      this.dialogImageService.$loadImage.next(
        this.portfolioSections[this.currentSectionIndex].portfolioItems[this.currentImageIndex - 1]
      );
    })
  }
}
