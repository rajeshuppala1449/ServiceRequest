import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { ActivatedRoute, Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.component.html',
  styleUrls: ['./view-service.component.css']
})
export class ViewServiceComponent implements OnInit {

  // customerId = 1
  currentService
  myServices
  constructor(private providerService: ProviderService, private router: Router) { }

  ngOnInit() {

    this.providerService.getMyServices()
      .subscribe(data => {
        this.myServices = data
      }, err => {
        console.log(err)
      })

  }

  form = new FormGroup({
    discount: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  })

  updateService(param) {
    this.currentService = param
    console.log(param)
  }

  saveChanges() {
    console.log(this.currentService)
    console.log(this.form.value)
    ///need to rerender this page
  }

  addService() {
    this.router.navigate(['/addService'])
  }

}
