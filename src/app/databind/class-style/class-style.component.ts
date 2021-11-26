import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.scss']
})
export class ClassStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mypro:boolean=false;
  myStyle= "15px";

  isActive:boolean=true;


  mltclasses={
    class1:true,
    class2:true,
    class3:true
  }

  mltStyle={
    'background': 'red',
    'border': '10px solid green'
  }

}
