import {Component, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {BaseNavbarComponent} from "../../../components/core/base-navbar/base-navbar.component";
import {BaseFooterComponent} from "../../../components/core/base-footer/base-footer.component";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../../services/auth.services";
import {LoginRequest} from "../../../models/login-request";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    BaseNavbarComponent,
    BaseFooterComponent,
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  public loginRequest: LoginRequest = new LoginRequest();

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
    document.body.style.backgroundColor = 'white';
  }

  login() {
    this.authService.login(this.loginRequest).subscribe({
      next: (response) => {
        const userId = response.userId;
        this.router.navigate([`/base/${userId}`]).then(() => {
          localStorage.setItem("jwtToken", response.jwtToken);
        });
      },
      error: (error) => {
        console.log("Login failed", error);
      }
    });
  }


}
