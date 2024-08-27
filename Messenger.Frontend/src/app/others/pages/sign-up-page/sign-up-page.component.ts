import {Component, OnDestroy, OnInit} from '@angular/core';
import {BaseNavbarComponent} from "../../../components/core/base-navbar/base-navbar.component";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthRequest} from "../../../models/auth-request";
import {Subscription} from "rxjs";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [
    BaseNavbarComponent,
    NgOptimizedImage,
    ReactiveFormsModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss'
})
export class SignUpPageComponent implements OnInit, OnDestroy {

  public signUpRequest: AuthRequest = new AuthRequest();

  //Subscriptions
  private authSignUpSubscription$: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit() {
    document.body.style.backgroundColor = 'white';

    this.signUpRequest.firstname = "firstname";
    this.signUpRequest.lastname = "lastname";
    this.signUpRequest.email = "email@test.com";
    this.signUpRequest.phone = 123123123;
    this.signUpRequest.password = "password";
  }

  ngOnDestroy() {
    this.authSignUpSubscription$?.unsubscribe();
  }

  signUp() {
    this.authService.register(this.signUpRequest).subscribe({
      next: (response) => {
        this.router.navigate([`/login`])
          .then(() => {
            localStorage.setItem("jwtToken", response.jwtToken);
          });
      },
      error: (error) => {
        console.log("SignUp failed", error);
      }
    })
  }
}
