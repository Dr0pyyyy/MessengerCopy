import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {BaseNavbarComponent} from "../../../components/core/base-navbar/base-navbar.component";
import {BaseFooterComponent} from "../../../components/core/base-footer/base-footer.component";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../../services/auth.services";
import {LoginRequest} from "../../../models/login-request";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    BaseNavbarComponent,
    BaseFooterComponent,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  public loginRequest: LoginRequest = new LoginRequest();

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loginRequest.email = "johndoe@example.com";
    this.loginRequest.password = "password";
  }

  login() {
    this.authService.login(this.loginRequest).subscribe({
      next: (response) => {
        const userId = response.userId;
        this.router.navigate([`base/${userId}`], { relativeTo: this.route }).then(() => {
          localStorage.setItem("jwtToken", response.jwtToken);
        });
      },
      error: (error) => {
        console.log("Login failed");
      }
    });
  }

}
