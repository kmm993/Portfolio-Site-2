import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { ImageDialogData } from './dialog-image.i';

@Injectable({
  providedIn: 'root'
})
export class DialogImageService {
  readonly $nextImage = new Subject<void>();
  readonly $prevImage = new Subject<void>();
  readonly $loadImage = new Subject<ImageDialogData>();

  constructor() { }
}
