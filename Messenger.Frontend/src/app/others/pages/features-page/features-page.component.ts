import {Component, OnInit} from '@angular/core';
import {BaseNavbarComponent} from "../../../components/core/base-navbar/base-navbar.component";
import {NgOptimizedImage} from "@angular/common";
import {BaseFooterComponent} from "../../../components/core/base-footer/base-footer.component";
import {ImageSliderComponent} from "../../../components/core/image-slider/image-slider.component";
import {ImageSliderDataModel} from "../../../models/image-slider/image-slider-data.model";

@Component({
  selector: 'app-features-page',
  standalone: true,
  imports: [
    BaseNavbarComponent,
    NgOptimizedImage,
    BaseFooterComponent,
    ImageSliderComponent
  ],
  templateUrl: './features-page.component.html',
  styleUrl: './features-page.component.scss'
})
export class FeaturesPageComponent implements OnInit {
  public sliderData: ImageSliderDataModel[] = [];

  ngOnInit() {
    this.sliderData = [
      {
        id: 0,
        iconData: {
          iconPath: '/icons/outline/message-icon.svg',
          iconDescription: 'LOVE',
        },
        imagePath: '/images/features-page/express-yourself-1.png',
        content: {
          header: 'CHAT THEMES',
          title: 'Your chats Your way',
          content: 'Choose from fun themes and colors to make your chats more personal ❤️ 🏳️‍🌈',
        }
      },
      {
        id: 1,
        iconData: {
          iconPath: '/icons/outline/message-icon.svg',
          iconDescription: 'TIE DYE',
        },
        imagePath: '/images/features-page/express-yourself-2.png',
        content: {
          header: 'CHAT THEMES',
          title: 'Your chats Your way',
          content: 'Choose from fun themes and colors to make your chats more personal ❤️ 🏳️‍🌈',
        }
      },
      {
        id: 2,
        iconData: {
          iconPath: '/icons/outline/message-icon.svg',
          iconDescription: 'PRIDE',
        },
        imagePath: '/images/features-page/express-yourself-3.png',
        content: {
          header: 'CHAT THEMES',
          title: 'Your chats Your way',
          content: 'Choose from fun themes and colors to make your chats more personal ❤️ 🏳️‍🌈',
        }
      }
    ]
  }
}
