import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { FormControl, FormGroup, Validators } from "@angular/forms"

@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.component.html',
  styleUrls: ['./view-service.component.css']
})
export class ViewServiceComponent implements OnInit {

  customerId = 1
  currentServiceId = -1
  myServices = {}
  constructor(private providerService: ProviderService) { }

  ngOnInit() {

    this.providerService.getMyServices(this.customerId)
      .subscribe(response => {
        this.myServices = response["services"]
        console.log(this.myServices)
      })

  }

  form = new FormGroup({
    discount: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  })

  updateService(param) {
    this.currentServiceId = param
    console.log(param)
  }

  saveChanges() {
    console.log(this.currentServiceId)
    console.log(this.form.value)
    ///need to rerender this page
  }

}
