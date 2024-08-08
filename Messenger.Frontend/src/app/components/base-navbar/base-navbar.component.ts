import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-base-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './base-navbar.component.html',
  styleUrl: './base-navbar.component.scss'
})
export class BaseNavbarComponent {
  constructor(
  ) { }
}
