import { Routes } from '@angular/router';
import {LoginComponent} from "./others/pages/login-page/login.component";
import {FeaturesPageComponent} from "./others/pages/features-page/features-page.component";
import {DesktopAppPageComponent} from "./others/pages/desktop-app-page/desktop-app-page.component";

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login-page', component: LoginComponent },
  { path: 'features', component: FeaturesPageComponent },
  { path: 'desktop-app', component: DesktopAppPageComponent },
];
