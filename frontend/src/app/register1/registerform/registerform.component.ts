import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterserviceService } from '../registerservice.service';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  email:string="";
  password:string="";
  firstname:string="";
  phone:string="";
  aadhar:string="";
  address:string="";
  city:string="";
  state:string="";
  zip:string="";

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
  res:any;


  constructor(private service:RegisterserviceService, private router:Router) { }

  ngOnInit(): void {
  }
  registeruser(){
    if(this.email.length == 0){
      alert("Please enter your email");
       return;
     }
     
     if(this.password.length == 0){
       alert("Please enter your Password");
        return;
      }
      if(this.firstname.length == 0){
        alert("Please enter your firstname");
         return;
       }
       
       if(this.phone.length == 0){
         alert("Please enter your phonenumber");
          return;
        }
        if(this.aadhar.length == 0){
          alert("Please enter your aadharnumber");
           return;
         }
         
         if(this.address.length == 0){
           alert("Please enter your Address");
            return;
          }
          if(this.city.length == 0){
            alert("Please enter your city");
             return;
           }
           
           if(this.state.length == 0){
             alert("Please enter your state");
              return;
            }
            if(this.zip.length == 0){
              alert("Please enter your zip");
               return;
             }
    this.service.register1(this.email,this.password,this.firstname,this.phone,this.aadhar,this.address,this.city,this.state,this.zip).subscribe(data=>{
    
      if(data){
        this.res = data;
        if(this.res.data != null){
          alert(this.res.data);
          return;
        }else{
          alert("User created");
          this.router.navigate(['/login']);
          return;
        }
      }
    },error=>{
      console.log(error);
    });
      
    }

  }
  
  


