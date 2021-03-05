import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  login(credentials) {
    //localStorage.setItem('login', 'true');
    console.log('logged in');
    return true;
  }

  logout() {
    //localStorage.removeItem('login');
  }

  register(details) {
    localStorage.setItem('login', 'true')
    return true
  }

  isLoggedIn() {
    // if (localStorage.getItem('login')) {
    //   return true
    // } else {
    //   return false
    // }
    return true
  }


}
