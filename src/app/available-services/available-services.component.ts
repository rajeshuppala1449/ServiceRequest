import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { ProviderService } from '../services/provider.service'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-available-services',
  templateUrl: './available-services.component.html',
  styleUrls: ['./available-services.component.css']
})
export class AvailableServicesComponent implements OnInit {
  arr = [0, 1, 2, 3, 4]
  serviceName
  serviceId
  allbookings
  bookings

  // filterArr = ["status", "price", "servicename", "Nofilter"]

  // filters = {
  //   status: ["booked", "accepted", "finished", "cancelled", "rejected", "Nofilter"],
  //   servicename: ["House Cleaning", "Car Wash", "Painting", "Carpentery Work", "Nofilter"],
  //   Nofilter: ["Nofilter"]
  // }

  // statusArr = ["Nofilter"]

  // selectedStatus = "Nofilter"
  // selectedFilter = "Nofilter"
  clickedService
  constructor(private providerService: ProviderService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
    this.serviceId = this.route.snapshot.queryParamMap.get("serviceId")
    this.serviceName = this.route.snapshot.queryParamMap.get("serviceName")
    this.userService.getServicesByCategory(this.serviceId)
      .subscribe(data => {
        this.bookings = data
      }, err => {
        console.log(err)
      })
  }

  selectService(booking) {

    this.clickedService = booking;


  }

  bookService() {
    this.userService.bookService(this.clickedService.spId)
      .subscribe(data => {
        console.log(data)
        this.router.navigate(['/userHomePage'])
      }, err => {
        console.log(err)
      })

  }

  // filterBookings(selectedStatus) {
  //   this.selectedStatus = selectedStatus
  //   if (selectedStatus == "Nofilter") {
  //     this.bookings = this.allbookings
  //   } else {
  //     this.bookings = this.allbookings.filter(x => { return this.selectedStatus == x[this.selectedFilter] })
  //   }
  // }

  // selectFilter(filter) {
  //   this.selectedStatus = "Nofilter"
  //   this.selectedFilter = filter
  //   this.statusArr = this.filters[filter]
  // }

}
