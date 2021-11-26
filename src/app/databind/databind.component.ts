import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.scss']
})
export class DatabindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dynName:string="shubham"

  myMethod(){
    return "My Name is "+this.dynName
  }

  appStatus:boolean=true;
  status1="Online";
  status2="Offline";

  enable:boolean=true;

}
