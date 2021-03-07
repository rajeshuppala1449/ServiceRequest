import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ProviderService } from '../services/provider.service'
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit {
  searchText: string;
  allservices = [
    {
      id: '1',
      name: 'Salon Service',
      image: 'assets/images/s5.png',
      description: 'Description of service',
    },
    {
      id: '2',
      name: 'Ac Repair & Service',
      image: 'assets/images/s7.png',
      description: 'Description of service',
    },
    {
      id: '3',
      name: 'Massage for Men',
      image: 'assets/images/s4.png',
      description: 'Description of service',
    },
    {
      id: '4',
      name: 'Appliance Repair',
      image: 'assets/images/s10.png',
      description: 'Description of service',
    },
    {
      id: '5',
      name: 'Painting',
      image: 'assets/images/s3.png',
      description: 'Description of service',
    },
    {
      id: '6',
      name: 'Cleaning & Disninfection',
      image: 'assets/images/s11.png',
      description: 'Description of service',
    }
  ];

  constructor(private router: Router) {

  }

  ngOnInit() {

  }


  goToServiceProvider(t) {
    // Navigates to Service Provider Page
  }


  goToServiceProviderbysearch(t: string) {
    // Navigates to Service Provider Page

  }

}
