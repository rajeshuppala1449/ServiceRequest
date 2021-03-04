import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(3), Validators.email]),
    password: new FormControl('')
  }
  )

  get email() {
    return this.form.get('email');
  }

  login() {
    var valid = true;
    if (!valid) {
      this.form.setErrors({
        invalidLogin: true
      })
    } else {
      this.router.navigateByUrl('/userHomePage')
    }
    console.log(this.form.value.email)
  }

}
