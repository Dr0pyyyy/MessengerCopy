import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../models/login-request';
import { HttpApiClient } from './http-api-client.service';
import {AuthRequest} from "../models/auth-request";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpApiClient: HttpApiClient) {}

  register(signUpRequest: AuthRequest): Observable<any> {
    return this.httpApiClient.post('/auth', signUpRequest);
  }

  login(loginRequest: LoginRequest): Observable<any> {
    return this.httpApiClient.post('/auth/login', loginRequest);
  }
}
