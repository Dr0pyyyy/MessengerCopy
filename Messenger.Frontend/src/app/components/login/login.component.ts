import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {BaseNavbarComponent} from "../base-navbar/base-navbar.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgOptimizedImage,
    BaseNavbarComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
