import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {BaseNavbarComponent} from "../others/base-navbar/base-navbar.component";
import {BaseFooterComponent} from "../others/base-footer/base-footer.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgOptimizedImage,
    BaseNavbarComponent,
    BaseFooterComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
