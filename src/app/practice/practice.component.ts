import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ProviderService } from '../services/provider.service'


@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {


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
    },
    // {
    //   id: '7',
    //   name: 'PestControl',
    //   image: 'assets/images/s2.png',
    //   description: 'Description of service',
    // }, ,
    // {
    //   id: '8',
    //   name: 'Carpenter',
    //   image: 'assets/images/s12.png',
    //   description: 'Description of service',
    // }, ,
    // {
    //   id: '9',
    //   name: 'Electricians',
    //   image: 'assets/images/s9.png',
    //   description: 'Description of service',
    // },
  ];

  FeaturedService = {
    name: 'AC Repair & Service',
    image: 'assets/images/s7.png',
    description: 'Power Jet AC Service for Better Cooling.',
    id: '2'
  };

  FeaturedServiceProvicer = {
    name: 'Baadshah',
    image: 'kk.jpg',
    description: 'Power Jet AC Service for Better Cooling.',
    id: '1'
  };

  FeaturedAdvertisement;

  constructor(private router: Router) {

    // this.allservices =...  //fetch data from service
  }

  ngOnInit() {

  }


  goToServiceProvider(t) {
    // Navigates to Service Provider Page
  }

  show: boolean = false;
  fun() {
    this.show = true;
  }

  id = '-1';
  goToServiceProviderbysearch(t: string) {
    // Navigates to Service Provider Page

  }
}
