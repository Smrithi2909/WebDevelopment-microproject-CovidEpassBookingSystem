import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MypassComponent } from './mypass/mypass.component';
import { UserComponent } from './user.component';
import { UsersectionComponent } from './usersection/usersection.component';


const routes: Routes = [{ path: '', component: UserComponent, children:[
  {path:"bookpass",component:UsersectionComponent},
  {path:"mypass",component:MypassComponent}                      

]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
