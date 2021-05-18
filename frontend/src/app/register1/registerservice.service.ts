import { HttpClient } from '@angular/common/Http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {
 

  constructor(private http:HttpClient) { }
  register1(email:any,password:any,firstname:any,phone:any,aadhar:any,address:any,city:any,state:any,zip:any){
    return this.http.post("http://127.0.0.1:5000/signup",{email:email,password:password,firstname:firstname,phone:phone,address:address,city:city,state:state,zip:zip,aadhar:aadhar});
  }
  
}
