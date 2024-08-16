import { Component } from '@angular/core';
import {BaseNavbarComponent} from "../../../components/core/base-navbar/base-navbar.component";
import {BaseFooterComponent} from "../../../components/core/base-footer/base-footer.component";
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
