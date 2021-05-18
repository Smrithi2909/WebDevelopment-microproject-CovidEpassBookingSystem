import { HttpClient } from '@angular/common/Http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
bookAPass(data:any){

return this.http.post("http://127.0.0.1:5000/bookpass",data);
}

MyPass(data:any){

  return this.http.post("http://127.0.0.1:5000/mypass",data);
  }
  
}
