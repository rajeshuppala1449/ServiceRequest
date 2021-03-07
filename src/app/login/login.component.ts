import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  ngOnInit() {
    // localStorage.removeItem('login')
    // if (this.authService.isLoggedIn) {
    //   this.router.navigateByUrl('userHomePage')
    // }
  }

  constructor(private router: Router, private authService: AuthService) { }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(3), Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)])
  }
  )

  get email() {
    return this.form.get('email');
  }

  login() {
    if (this.form.valid) {
      var valid = this.authService.login(this.form.value);
      if (!valid) {
        this.form.setErrors({
          invalidLogin: true
        })
      } else {
        this.router.navigateByUrl('/userHomePage')
      }
    }

  }


}
