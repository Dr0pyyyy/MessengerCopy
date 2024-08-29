import { Injectable } from '@angular/core';
import {UserModel} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class ApplicationDataService {
  private _user: UserModel;

  constructor() { }

  setUser(user: UserModel): void {
    this._user = user;
  }

  getUser(): UserModel {
    return this._user;
  }
}
