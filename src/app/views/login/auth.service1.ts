import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthService1 {
  constructor(private myRoute: Router) { }
  sendToken(token: string) {
    localStorage.setItem("LoggedInUser1", token)
  }
  getToken() {
    return localStorage.getItem("LoggedInUser1")
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("LoggedInUser1");
    this.myRoute.navigate(["login"]);
  }
}