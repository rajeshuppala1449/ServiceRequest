import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-home-page',
  templateUrl: './provider-home-page.component.html',
  styleUrls: ['./provider-home-page.component.css']
})
export class ProviderHomePageComponent implements OnInit {
  arr = [0, 1, 2, 3, 4]
  constructor() { }

  ngOnInit() {
  }

}
