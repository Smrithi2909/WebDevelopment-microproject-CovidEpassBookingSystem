import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-loginbox',
  templateUrl: './loginbox.component.html',
  styleUrls: ['./loginbox.component.css']
})
export class LoginboxComponent implements OnInit {
  email:string="";
  password:string="";
  res:any;
  constructor(private service:LoginService, private router:Router) { }

  ngOnInit(): void {
  }
  loginuser(){
  
    if(this.email.length == 0){
     alert("Please enter your email");
      return;
    }
    
    if(this.password.length == 0){
      alert("Please enter your Password");
       return;
     }
  
  
    this.service.login(this.email,this.password).subscribe(data=>{
    
    if(data){
      this.res = data;
      if(this.res.data != null){
        alert(this.res.data);
        return;
      }else{
       localStorage.setItem("userid",this.res.id);
         this.router.navigate(['/user/mypass']);
        return;
      }
    }
  },error=>{
    console.log(error);
  });
    
  }

}
