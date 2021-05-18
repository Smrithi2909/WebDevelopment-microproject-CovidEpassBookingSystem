import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-usersection',
  templateUrl: './usersection.component.html',
  styleUrls: ['./usersection.component.css']
})
export class UsersectionComponent implements OnInit {
  states: string[] =[ "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry"]
  index:number=0;
  index1:number=0;
  textbox:string="";
  res:any;

  constructor(private service:UserserviceService, private route:Router) { }

  ngOnInit(): void {
    this.fun();
  }
  moveRight(){
    if(this.index==this.states.length-1){ 
      //this.fun();
      return;
    }
    this.index=this.index+1;
    //this.fun();
  }
  moveLeft(){
    if(this.index==0){ 
     // this.fun();
    return;
    }
    this.index=this.index-1;
    //this.fun();
  }
  moveRight1(){
    if(this.index1==this.states.length-1){ 
    //  this.fun();
      return;
    }
    this.index1=this.index1+1;
    //this.fun();
  }
  moveLeft1(){
    if(this.index1==0){ 
      //this.fun();
      return;
    }
    this.index1=this.index1-1;
    //this.fun();
  }
  fun(){
    if(this.index == this.index1){
  
      if(this.index1 == 0){
        this.index1 = this.index1 + 1;
        return;
      }
      if(this.index1 == this.states.length -1){
        this.index1 = this.index1 -1 ;
        return;
      }
      if(this.index1 != 0){
        this.index1 = this.index1 + 1;
        return;
      }
    }

    
  }



  bookpass(){
    let val={
      "source":this.states[this.index],
      "destination":this.states[this.index1],
      "purpose":this.textbox,
      "id":localStorage.getItem("userid")
    };
    this.service.bookAPass(val).subscribe(data =>{
      if(data){
        this.res= data;
        alert("booked");
        this.route.navigate(["/confirm/info/"+this.res.id]);
      }      
    },error=>{
      console.log(error);
    });
  }







}
