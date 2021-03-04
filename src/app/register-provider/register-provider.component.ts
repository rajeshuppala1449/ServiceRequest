import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-provider',
  templateUrl: './register-provider.component.html',
  styleUrls: ['./register-provider.component.css']
})
export class RegisterProviderComponent {

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phoneno: new FormControl(''),
    location: new FormControl(''),
    password: new FormControl(''),

  })

  submit() {
    console.log(this.form.value);
  }
}
