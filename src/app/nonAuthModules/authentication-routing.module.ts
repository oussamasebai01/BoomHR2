import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginformComponent } from './login/loginform/loginform.component';
import { RegisterformComponent } from './register/registerform/registerform.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginformComponent,
  },
  {
    path: 'register',
    component: RegisterformComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
