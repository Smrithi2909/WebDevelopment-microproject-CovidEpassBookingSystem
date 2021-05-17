import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/Http';



import { Register1RoutingModule } from './register1-routing.module';
import { Register1Component } from './register1.component';
import { HeaderComponent } from './header/header.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { RegisterserviceService } from './registerservice.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Register1Component,
    HeaderComponent,
    RegisterformComponent
  ],
  imports: [
    CommonModule,
    Register1RoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[RegisterserviceService]
  
})
export class Register1Module { }
