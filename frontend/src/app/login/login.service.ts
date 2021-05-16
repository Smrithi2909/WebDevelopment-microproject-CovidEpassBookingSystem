import { HttpClient } from '@angular/common/Http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  login(email:string,pass:string){
    return this.http.post("http://127.0.0.1:5000/login",{email:email,password:pass});
  }
}
