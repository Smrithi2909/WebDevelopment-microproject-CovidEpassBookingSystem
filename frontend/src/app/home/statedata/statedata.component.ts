import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/Http';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-statedata',
  templateUrl: './statedata.component.html',
  styleUrls: ['./statedata.component.css']
})
export class StatedataComponent implements OnInit {
  table:any;

  constructor(private Http:HttpClient) {

   }

  ngOnInit(): void {
    this.getregions();
  }
  getregions(){
    this.Http.get("http://127.0.0.1:5000/covid/region").subscribe(result=>{
      if(result){
        this.table = result;
      }
    

    }, error=>{
      console.log(error);
    });
  }

}
