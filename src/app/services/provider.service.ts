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

  getMyServices(providerId) {
    return this.http.get("https://run.mocky.io/v3/e42d8c4d-a76e-4dfc-8d26-5db55b69ac1c");
  }

  getCustomerDetails(customerId) {

  }

  updateStatus(bookindId, newStatus) {

  }

}
