import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  services = ['House Cleaning', "car wash", "painting", "Saloon", "bike service"]

  constructor() { }

  ngOnInit() {
  }


  form = new FormGroup({
    service: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    discount: new FormControl('', Validators.required),
    newService: new FormControl(''),
    desc: new FormControl('', Validators.required)
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
  }

  changeService(e) {
    console.log(e.target.value);
  }

}
