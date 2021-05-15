import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/Http';

@Component({
  selector: 'app-viruscount',
  templateUrl: './viruscount.component.html',
  styleUrls: ['./viruscount.component.css']
})
export class ViruscountComponent implements OnInit {
  recovered:any;
  res:any;

  constructor(private Http:HttpClient) {


   }

  ngOnInit(): void {
    this.getdata();
  }
  getdata(){
    this.Http.get("http://127.0.0.1:5000/covid/").subscribe(result=>{
    if(result){
      this.res = result;
    }
    },error=>{
      console.log(error);
    });
  }
 

}
