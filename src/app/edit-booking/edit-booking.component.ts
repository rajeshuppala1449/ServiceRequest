import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css']
})
export class EditBookingComponent implements OnInit {

  booking = {}
  statusArr = { "BOOKED": "booked", "ACCEPTED": "accepted", "CANCELLED": "cancelled", "FINISHED": "finished", "REJECTED": "rejected" }
  constructor(private route: ActivatedRoute,
    private providerService: ProviderService,
    private router: Router) { }

  ngOnInit() {
    this.booking = JSON.parse(this.route.snapshot.queryParamMap.get('booking'));
    console.log(this.booking)
    // this.providerService.getCustomerDetails()
    //this.booking.location = "Hyderabad"
    console.log(this.booking)

  }

  checkStatus(status) {
    // return this.booking.status == status;
  }

  updateStatus(newStatus) {
    // this.providerService.updateStatus(this.bookingId,newStatus)
    console.log(newStatus)
    this.router.navigateByUrl("providerHomePage")
  }





}
