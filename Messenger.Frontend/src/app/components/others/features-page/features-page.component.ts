import { Component } from '@angular/core';
import {BaseNavbarComponent} from "../../base-navbar/base-navbar.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-features-page',
  standalone: true,
  imports: [
    BaseNavbarComponent,
    NgOptimizedImage
  ],
  templateUrl: './features-page.component.html',
  styleUrl: './features-page.component.scss'
})
export class FeaturesPageComponent {

}
