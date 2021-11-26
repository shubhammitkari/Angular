import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-push-splice',
  templateUrl: './push-splice.component.html',
  styleUrls: ['./push-splice.component.scss']
})
export class PushSpliceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  users =[];

  onCreateUser(uname){
    this.users.push({name:uname.value});

    // if(this.users.length>3){
    //   // alert("More then 3");
    //   this.router.navigate(['products']);
    // }
  }
  onRemoveUser(){
    this.users.splice(this.users.length -1)
  }

  onRemoveItem(item:any){
    this.users.splice(item, 1)
  }

}
