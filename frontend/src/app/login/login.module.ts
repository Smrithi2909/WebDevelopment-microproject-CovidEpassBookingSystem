import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { HeaderComponent } from './header/header.component';
import { LoginboxComponent } from './loginbox/loginbox.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/Http';
import { LoginService } from './login.service';


@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    LoginboxComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[LoginService]
})
export class LoginModule { }
