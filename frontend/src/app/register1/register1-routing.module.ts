import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Register1Component } from './register1.component';

const routes: Routes = [{ path: '', component: Register1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Register1RoutingModule { }
