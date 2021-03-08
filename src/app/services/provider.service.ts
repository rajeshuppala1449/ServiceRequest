import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) { }

  getBookings() {
    return this.http.get("https://run.mocky.io/v3/0773a2d5-ddac-4112-bc9b-75dbfe671a96")

  }

  getMyServices() {
    return this.http.get(`/provider/service/all?providerId=${localStorage.getItem("userId")}`)

  }

  getCustomerDetails(customerId) {

  }

  updateStatus(bookindId, newStatus) {

  }

  addService(details) {
    let postBody = {}
    let x
    if (details.newService) {

      this.http.post<{ serviceId: number; serviceName: string }>('/service/addService', { serviceName: details.newService })
        .subscribe(data => {
          console.log(data);
          postBody = { serviceId: data.serviceId, providerId: parseInt(localStorage.getItem("userId")), serviceDescription: details.desc, discount: details.discount, price: details.price }
          console.log(postBody)
          x = this.http.post('/provider/service/addService', postBody)
        }, err => {
          console.log(err)
        })

    } else {
      postBody = { serviceId: parseInt(details.service), providerId: parseInt(localStorage.getItem("userId")), serviceDescription: details.desc, discount: details.discount, price: details.price }
      x = this.http.post('/provider/service/addService', postBody)
    }

    return x;
  }

}
