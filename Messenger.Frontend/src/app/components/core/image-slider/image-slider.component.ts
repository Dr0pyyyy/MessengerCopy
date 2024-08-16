import {Component, Input, OnInit} from '@angular/core';
import {ImageSliderDataModel} from "../../../models/image-slider/image-slider-data.model";
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    NgForOf,
    NgClass
  ],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss'
})
export class ImageSliderComponent implements OnInit {

  @Input() sliderData: ImageSliderDataModel[];

  public currentActiveSlideId: number;

  ngOnInit() {
    this.currentActiveSlideId = 0;
  }

  setActiveSlide(id: number) {
    this.currentActiveSlideId = id;
  }
}
