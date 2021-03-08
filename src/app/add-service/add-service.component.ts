import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { UserService } from '../services/user.service';
import { ProviderService } from '../services/provider.service'

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  allServices

  constructor(private userService: UserService, private providerService: ProviderService) { }

  ngOnInit() {

    this.userService.getAllServices()
      .subscribe(data => {
        this.allServices = data
      }, err => {
        console.log(err)
      })

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

  addService() {
    //if (!this.form.value.newService) {
    for (let x of this.allServices) {
      if (x.serviceName == this.form.value.service) {
        this.form.value.service = x.serviceId;
      }
    }
    // }
    this.providerService.addService(this.form.value)
      .subscribe(data => {
        console.log(data)
      }, err => {
        console.log(err)
      })
  }

  changeService(e) {
    console.log(e.target.value);
  }

}
