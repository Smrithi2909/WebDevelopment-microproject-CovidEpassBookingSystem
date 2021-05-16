import { Component, OnInit } from '@angular/core';
import { RegisterserviceService } from '../registerservice.service';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  email:any;
  password:any;
  firstname:any;
  phone:any;
  aadhar:any;
  address:any;
  city:any;
  state:any;
  zip:any;

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


  constructor(private service:RegisterserviceService) { }

  ngOnInit(): void {
  }
  registeruser(){
    this.service.register1(this.email,this.password,this.firstname,this.phone,this.aadhar,this.address,this.city,this.state,this.zip).subscribe(data=>{
    
      if(data){
        this.res = data;
        if(this.res.data != null){
          alert(this.res.data);
          return;
        }else{
          alert("xxx");
          return;
        }
      }
    },error=>{
      console.log(error);
    });
      
    }

  }
  
  


