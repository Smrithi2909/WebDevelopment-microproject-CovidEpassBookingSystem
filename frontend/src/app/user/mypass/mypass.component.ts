import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-mypass',
  templateUrl: './mypass.component.html',
  styleUrls: ['./mypass.component.css']
})
export class MypassComponent implements OnInit {
res:any;
  constructor(private service:UserserviceService) { }

  ngOnInit(): void {
    this.service.MyPass({"id":localStorage.getItem("userid")}).subscribe(data =>{
      this.res = data;
    },error=>{
      console.log(error)
    }
    );
  }

}
