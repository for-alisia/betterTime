import { User } from './user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userIsLoggedIn = true;

  constructor() {}

  get user(): User {
    return {
      isLoggedIn: this.userIsLoggedIn,
    };
  }

  signUp() {
    this.userIsLoggedIn = true;
  }

  login() {
    this.userIsLoggedIn = true;
  }

  logout() {
    this.userIsLoggedIn = false;
  }
}
