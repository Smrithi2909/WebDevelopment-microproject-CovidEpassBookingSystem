import { HttpClient } from '@angular/common/Http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
id:any;
res:any;
  constructor(private route:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.http.get("http://127.0.0.1:5000/getInfo/"+this.id).subscribe(data=>{
      this.res = data;
    })
  }

}
