import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products=[
    {proimg:'./assets/images/laptop.jpg',name:'Laptop',id:'pro01',price:15000},
    {proimg:'./assets/images/mobile.jpeg',name:'Mobile',id:'pro02',price:8000},
    {proimg:'./assets/images/tv.jpg',name:'TV',id:'pro03',price:12000},
    {proimg:'./assets/images/washing.jpg',name:'Washing Machine',id:'pro04',price:20000},
  ]

}
