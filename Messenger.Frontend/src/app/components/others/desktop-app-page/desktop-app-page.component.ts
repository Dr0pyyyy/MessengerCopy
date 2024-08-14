import { Component } from '@angular/core';
import {BaseNavbarComponent} from "../base-navbar/base-navbar.component";
import {BaseFooterComponent} from "../base-footer/base-footer.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-desktop-app-page',
  standalone: true,
  imports: [
    BaseNavbarComponent,
    BaseFooterComponent,
    NgOptimizedImage
  ],
  templateUrl: './desktop-app-page.component.html',
  styleUrl: './desktop-app-page.component.scss'
})
export class DesktopAppPageComponent {

}
