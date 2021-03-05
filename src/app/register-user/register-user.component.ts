import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  constructor(private router: Router, private authService: AuthService) { }

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*')
    ]),
    email: new FormControl('', [
      Validators.email,
      Validators.required
    ]),
    location: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*')]),
    phoneno: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*')]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)])
  })

  register() {
    if (this.form.valid) {
      let valid = this.authService.register(this.form.value)
      if (!valid) {
        this.form.setErrors({
          alreadyExists: true
        })
      } else {
        this.router.navigateByUrl('/userHomePage')
      }
    }

  }


}
