import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersectionComponent } from './usersection/usersection.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/Http';
import { UserserviceService } from './userservice.service';
import { MypassComponent } from './mypass/mypass.component';


@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    NavbarComponent,
    UsersectionComponent,
    MypassComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[UserserviceService]
})
export class UserModule { }
