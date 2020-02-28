import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImageCropperModule } from 'ngx-image-cropper';
import { Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';

@Component({
  selector: 'app-crop-image',
  templateUrl: './crop-image.component.html',
  styleUrls: ['./crop-image.component.css']
})

export class CropImageComponent implements OnInit {

  @Input()originalImage : any;
  @Output()imageOnChange = new EventEmitter(); 

  imageChangedEvent: any = '';
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper = false;
  containWithinAspectRatio = false;
  transform: ImageTransform = {};

  constructor() {
  }

  ngOnInit() {
  }

  
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.originalImage = event.base64;
    this.imageOnChange.emit(this.originalImage);
  }

  imageLoaded() {
    this.showCropper = true;
  }

  cropperReady(sourceImageDimensions: Dimensions) { }

  loadImageFailed() { }

}
