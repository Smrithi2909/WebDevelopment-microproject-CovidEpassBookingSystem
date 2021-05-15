import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-loginbox',
  templateUrl: './loginbox.component.html',
  styleUrls: ['./loginbox.component.css']
})
export class LoginboxComponent implements OnInit {
  email:any;
  password:any;

  constructor(private service:LoginService) { }

  ngOnInit(): void {
  }
  loginuser(){
  this.service.login(this.email,this.password).subscribe(result=>{
    console.log(result);
  },error=>{
    console.log(error);
  });
    
  }

}
