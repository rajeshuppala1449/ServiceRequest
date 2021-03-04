import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    location: new FormControl(''),
    phoneno: new FormControl(''),
    password: new FormControl('')
  })

  submit() {
    console.log(this.form.value)
  }


}
