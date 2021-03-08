import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { UserService } from '../services/user.service'
import { Ng2SearchPipeModule } from 'ng2-search-filter';


class Service {
  serviceId: number;
  serviceName: string;
}

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit {
  searchText: string;
  allServices

  displayServices = [
    {
      serviceId: '15',
      serviceName: 'Salon Service',
      image: 'assets/images/s5.png',

    },
    {
      serviceId: '16',
      serviceName: 'Ac Repair',
      image: 'assets/images/s7.png',

    },
    {
      serviceId: '17',
      serviceName: 'Pest Control',
      image: 'assets/images/s2.png',

    },
    {
      serviceId: '14',
      serviceName: 'Appliance Repair',
      image: 'assets/images/s10.png',

    },
    {
      serviceId: '7',
      serviceName: 'Painter',
      image: 'assets/images/s3.png',

    },
    {
      serviceId: '5',
      serviceName: 'Carpenter',
      image: 'assets/images/s12.png',

    }
  ];

  constructor(private router: Router, private userService: UserService) {

  }

  ngOnInit() {

    this.userService.getAllServices()
      .subscribe(data => {
        this.allServices = data;
        console.log(this.allServices)
      }, err => {
        console.log(err)
      })

  }


  goToServiceProvider(service) {

    this.router.navigate(['/availableServices'], { queryParams: { serviceId: service.serviceId } })

  }

}
