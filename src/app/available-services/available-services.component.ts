import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { ProviderService } from '../services/provider.service'


@Component({
  selector: 'app-available-services',
  templateUrl: './available-services.component.html',
  styleUrls: ['./available-services.component.css']
})
export class AvailableServicesComponent implements OnInit {
  arr = [0, 1, 2, 3, 4]

  filterArr = ["status", "price", "servicename", "Nofilter"]

  filters = {
    status: ["booked", "accepted", "finished", "cancelled", "rejected", "Nofilter"],
    servicename: ["House Cleaning", "Car Wash", "Painting", "Carpentery Work", "Nofilter"],
    Nofilter: ["Nofilter"]
  }

  statusArr = ["Nofilter"]
  allbookings = []
  bookings = []
  selectedStatus = "Nofilter"
  selectedFilter = "Nofilter"
  clickedService = []
  constructor(private providerService: ProviderService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.providerService.getBookings()
      .subscribe(response => {
        this.bookings = response['bookings']
        this.allbookings = this.bookings
        console.log(this.bookings)
      })
    this.selectFilter("servicename")
    console.log(this.route.snapshot.queryParamMap.get("serviceId"))


  }

  selectService(booking) {

    this.clickedService = booking;
    console.log(this.clickedService)

  }

  bookService() {
    //to be sent request to api
    console.log(this.clickedService);
  }

  filterBookings(selectedStatus) {
    this.selectedStatus = selectedStatus
    if (selectedStatus == "Nofilter") {
      this.bookings = this.allbookings
    } else {
      this.bookings = this.allbookings.filter(x => { return this.selectedStatus == x[this.selectedFilter] })
    }
  }

  selectFilter(filter) {
    this.selectedStatus = "Nofilter"
    this.selectedFilter = filter
    this.statusArr = this.filters[filter]
  }




}
