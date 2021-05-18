import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
 { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, { path: 'register1', loadChildren: () => import('./register1/register1.module').then(m => m.Register1Module) }, { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
 { path: 'confirm', loadChildren: () => import('./confirm/confirm.module').then(m => m.ConfirmModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
