import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {BaseNavbarComponent} from "../../../components/core/base-navbar/base-navbar.component";
import {BaseFooterComponent} from "../../../components/core/base-footer/base-footer.component";

@Component({
  selector: 'app-login-page',
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
