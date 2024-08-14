import { Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {FeaturesPageComponent} from "./components/others/features-page/features-page.component";
import {DesktopAppPageComponent} from "./components/others/desktop-app-page/desktop-app-page.component";

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'features', component: FeaturesPageComponent },
  { path: 'desktop-app', component: DesktopAppPageComponent },
];
